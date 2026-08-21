import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/web_size_2.png';
import '../App.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    setMobileMenuOpen(false);

    if (path.startsWith('/#')) {
      e.preventDefault();
      const hash = path.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/' + hash);
      } else {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <motion.div
            layoutId="navbar-logo-shared"
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="navbar-logo-wrapper"
            style={{ display: 'inline-block' }}
          >
            <img src={logoImg} alt="NB Media TECH" className="navbar-logo-img" />
          </motion.div>
        </Link>

        <div className="navbar-right">
          <nav className="navbar-links">
            <Link to="/" className={`nav-link`}>
              Home
            </Link>
            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, '/#about')}
              className="nav-link"
            >
              About Us
            </a>
            <Link
              to="/services"
              className={`nav-link`}
            >
              Our Services
            </Link>
            <a
              href="/#products"
              onClick={(e) => handleNavClick(e, '/#products')}
              className="nav-link"
            >
              Our Products
            </a>
          </nav>

          <div className="navbar-action">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="enquire-now-btn"
            >
              Enquire Now &gt;
            </a>
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
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-link"
          >
            Home
          </Link>
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, '/#about')}
            className="nav-link"
          >
            About Us
          </a>
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-link"
          >
            Our Services
          </Link>
          <a
            href="/#products"
            onClick={(e) => handleNavClick(e, '/#products')}
            className="nav-link"
          >
            Our Products
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="enquire-now-btn"
            style={{ textAlign: 'center', marginTop: '8px' }}
          >
            Enquire Now &gt;
          </a>
        </div>
      )}
    </header>
  );
}
