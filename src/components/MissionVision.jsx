import React from 'react';
import missionImg from '../assets/b8854b390466838ff70b35c159a3c90f9700f362.jpg';
import visionImg from '../assets/34bd2af547b98f3b01b943da6a25bdc2e2785b9b.jpg';
import SectionHeader from './common/SectionHeader';
import '../App.css';

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="max-container">

        <div className="mission-row">
          <div className="mission-image-col">
            <div className="vertical-image-card">
              <img
                src={missionImg}
                alt="OUR MISSION"
              />
            </div>
          </div>
          <div className="mission-text-col">
            <SectionHeader
              title="OUR"
              highlightedText="MISSION"
              highlightClass="gold-text"
              className="section-headline"
            />

            <p className="section-paragraph">
              To deliver innovative, scalable, and technology-driven solutions that address complex 
              business challenges, optimize performance, strengthen operational capabilities, and empower 
              organizations to achieve sustainable growth and long-term competitive advantage.
            </p>
          </div>
        </div>

        <div className="vision-row">
          <div className="vision-text-col">
            <SectionHeader
              title="OUR"
              highlightedText="VISION"
              highlightClass="gold-text"
              className="section-headline1"
            />

            <p className="section-paragraph1">
              To become a trusted global technology partner, transforming ideas into innovative solutions 
              that shape the future, create lasting value, enhance business performance, drive sustainable 
              growth, and create new opportunities through technology and innovation.
            </p>
          </div>
          <div className="vision-image-col">
            <div className="vertical-image-card">
              <img
                src={visionImg}
                alt="OUR VISION"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
