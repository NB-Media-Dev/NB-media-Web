import React from 'react';
import officeBg from '../assets/Untitled Project.jpg';
import SectionHeader from './common/SectionHeader';
import '../App.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-banner-container">
        <div className="about-banner-bg-wrapper">
          <img
            src={officeBg}
            alt="Office background"
            className="about-banner-bg"
          />
          <div className="about-banner-overlay" />
        </div>
        <div className="about-banner-content">
          <div className="about-card-col">
            <div className="about-gold-card">
              <SectionHeader
                title="ABOUT"
                highlightedText="US"
                highlightClass="gold-text"
                className="about-card-title"
              />

              <div className="about-paragraphs">
                <p>
                  We are a technology and digital solutions company dedicated to helping businesses grow through innovation, creativity, and smart technology. We deliver customized solutions tailored to each client's unique goals, enabling them to succeed in today's competitive digital landscape.
                </p>
                <p>
                  With a team of experienced professionals, we specialize in web and mobile app development, UI/UX design, cloud solutions, digital marketing, and e-commerce. Our commitment to quality, innovation, and customer satisfaction allows us to build lasting partnerships and deliver solutions that drive measurable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
