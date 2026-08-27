import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/3253a1c1ec490f80b90fa0f85ab705112eb36522 (1).png';
import { MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../data/companyData';
import { handleHashNavigation } from '../utils/navigation';
import IndiaMapSvg from './common/IndiaMapSvg';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    handleHashNavigation(e, path, location.pathname, navigate);
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-white-card container-fluid py-4 py-md-5 px-3 px-sm-4 px-md-5">
        <div className="row g-4 justify-content-between mb-4">
          <div className="col-12 col-md-5 col-lg-4 text-center text-md-start">
            <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="text-decoration-none color-inherit">
              <div className="d-flex flex-column align-items-center align-items-md-start" style={{ cursor: 'pointer' }}>
                <img src={logoImg} alt={`${COMPANY_INFO.name} Logo`} style={{ width: 'auto', maxHeight: '50px', objectFit: 'contain' }} />
                <div className="navbar-brand-text text-center text-md-start mt-2">
                  <span className="footer-brand-title">NB MEDIA TECH</span>
                  <span className="footer-brand-pvt d-block">PVT LTD</span>
                </div>
              </div>
            </Link>

            <div className="footer-address mt-3">
              {COMPANY_INFO.fullAddress.map((line, idx) => (
                <p key={idx} className="mb-1">{line}</p>
              ))}
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 text-center text-md-start">
            <h4 className="footer-column-heading mt-0 mt-md-2 mb-3">MENU</h4>
            <ul className="footer-menu-list list-unstyled d-flex flex-column gap-2 p-0 mb-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.path.startsWith('/#') ? (
                    <a href={item.path} onClick={(e) => handleNavClick(e, item.path)} className="text-decoration-none">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} onClick={(e) => handleNavClick(e, item.path)} className="text-decoration-none">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-4 text-center text-md-start">
            <h4 className="footer-column-heading mt-0 mt-md-2 mb-3">CONTACT</h4>
            
            <div className="d-flex flex-column gap-2 fs-6 fw-semibold text-secondary mb-3 align-items-center align-items-md-start">
              <div className="d-flex align-items-center gap-2">
                <MapPin size={18} color="#FFA600" className="flex-shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Mail size={18} color="#FFA600" className="flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-dark text-decoration-none">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="india-map-box1 d-flex justify-content-center justify-content-md-start">
              <IndiaMapSvg />
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center pt-3 mt-3 border-top">
          {COMPANY_INFO.copyright}
        </div>
      </div>

      <div className="footer-orange-bar d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4 py-2 px-3 px-md-5">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-dark text-decoration-none fw-bold">Terms & Conditions</a>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-dark text-decoration-none fw-bold">Privacy Policy</a>
      </div>
    </footer>
  );
}

