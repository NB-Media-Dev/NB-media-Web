import React from 'react';
import heroBg from '../assets/3ea84206489df0c90440af3fc1781323ab06257c.jpg';
import AnimatedCount from './common/AnimatedCount';
import { HERO_STATS } from '../data/heroData';
import { COMPANY_INFO } from '../data/companyData';
import '../App.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-wrapper">
        <img src={heroBg} alt={`${COMPANY_INFO.name} Office`} className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-welcome">Welcome to</p>
        
        <h1 className="hero-main-title">
          NB Media <span className="gold-text">Tech Pvt Ltd</span>
        </h1>

        <h2 className="hero-tagline">
          {COMPANY_INFO.tagline}
        </h2>

        <p className="hero-description">
          Innovative technology solutions crafted to help businesses unlock new opportunities, 
          improve efficiency, and create meaningful digital experiences that drive lasting success.
        </p>
      </div>

      <div className="hero-stats-wrapper">
        <div className="stats-card-gold">
          <div className="stats-grid">
            {HERO_STATS.map((stat) => (
              <div key={stat.id} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <AnimatedCount target={stat.targetNumber} suffix={stat.suffix} />
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
