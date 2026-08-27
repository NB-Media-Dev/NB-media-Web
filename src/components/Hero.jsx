import React from 'react';
import heroBg from '../assets/3ea84206489df0c90440af3fc1781323ab06257c.jpg';
import AnimatedCount from './common/AnimatedCount';
import { HERO_STATS } from '../data/heroData';
import { COMPANY_INFO } from '../data/companyData';
import '../App.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section position-relative min-vh-90 d-flex flex-column justify-content-between overflow-hidden">
      {/* Background image & overlay */}
      <div className="hero-bg-wrapper position-absolute top-0 start-0 w-100 h-100 z-0">
        <img src={heroBg} alt={`${COMPANY_INFO.name} Office`} className="hero-bg-img w-100 h-100 object-fit-cover" />
        <div className="hero-bg-overlay position-absolute top-0 start-0 w-100 h-100" />
      </div>

      {/* Main Hero Content */}
      <div className="container position-relative z-3 hero-content-container pt-5 mt-5">
        <div className="row justify-content-center justify-content-lg-start mt-5">
          <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-start">
            <p className="hero-welcome text-white fw-semibold mb-2">Welcome to</p>
            
            <h1 className="hero-main-title text-white fw-bolder mb-3">
              NB Media <span className="gold-text">Tech Pvt Ltd</span>
            </h1>

            <h2 className="hero-tagline gold-text fw-bold mb-3">
              {COMPANY_INFO.tagline}
            </h2>

            <p className="hero-description text-light fw-medium mx-auto mx-lg-0">
              Innovative technology solutions crafted to help businesses unlock new opportunities, 
              improve efficiency, and create meaningful digital experiences that drive lasting success.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Stats Card with Responsive Bootstrap Grid */}
      <div className="container position-relative z-2 hero-stats-container my-4 my-lg-5 px-3 px-sm-4">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="stats-card-gold p-3 p-sm-4 rounded-4">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 g-md-4 text-center">
                {HERO_STATS.map((stat) => (
                  <div key={stat.id} className="col d-flex flex-column align-items-center justify-content-center stat-item">
                    <div className="stat-icon mb-2">{stat.icon}</div>
                    <AnimatedCount target={stat.targetNumber} suffix={stat.suffix} />
                    <p className="stat-label mb-0">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

