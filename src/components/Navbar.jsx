import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './common/BrandLogo';
import CTAButton from './common/CTAButton';
import { NAV_ITEMS } from '../data/companyData';
import { handleHashNavigation } from '../utils/navigation';
import '../App.css';
import { Check, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    setMobileMenuOpen(false);
    handleHashNavigation(e, path, location.pathname, navigate);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <BrandLogo className="navbar-logo-img" />
        </Link>

        <div className="navbar-right">
          <nav className="navbar-links">
            {NAV_ITEMS.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.path} className="nav-link">
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="navbar-action">
            <CTAButton
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="enquire-now-btn"
            >
              Enquire Now <ChevronRight size={20} />
            </CTAButton>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {NAV_ITEMS.map((item) => (
            item.path.startsWith('/#') ? (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="nav-link"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
              >
                {item.label}
              </Link>
            )
          ))}
          <CTAButton
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="enquire-now-btn"
            style={{ textAlign: 'center', marginTop: '8px' }}
          >
            Enquire Now  <ChevronRight size={20} />
          </CTAButton>
        </div>
      )}
    </header>
  );
}
