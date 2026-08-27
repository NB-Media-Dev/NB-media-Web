import React from 'react';
import officeBg from '../assets/Untitled Project.jpg';
import SectionHeader from './common/SectionHeader';
import '../App.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section position-relative overflow-hidden py-4 py-lg-5">
      <div className="about-banner-bg-wrapper position-absolute top-0 start-0 w-100 h-100">
        <img
          src={officeBg}
          alt="Office background"
          className="about-banner-bg w-100 h-100 object-fit-cover"
        />
        <div className="about-banner-overlay position-absolute top-0 start-0 w-100 h-100" />
      </div>

      <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-2">
        <div className="about-banner-content position-relative z-2 p-3 p-sm-4 p-lg-5">
          <div className="row justify-content-center justify-content-lg-end w-100 m-0">
            <div className="col-12 col-md-10 col-lg-6 col-xl-5 p-0">
              <div className="about-gold-card">
                <SectionHeader
                  title="ABOUT"
                  highlightedText="US"
                  highlightClass="gold-text"
                  className="about-card-title mb-3"
                />

                <div className="about-paragraphs">
                  <p className="mb-2">
                    We are a technology and digital solutions company dedicated to helping businesses grow through innovation, creativity, and smart technology. We deliver customized solutions tailored to each client's unique goals, enabling them to succeed in today's competitive digital landscape.
                    With a team of experienced professionals, we specialize in web and mobile app development, UI/UX design, cloud solutions, digital marketing, and e-commerce. Our commitment to quality, innovation, and customer satisfaction allows us to build lasting partnerships and deliver solutions that drive measurable business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

