import React from 'react';
import missionImg from '../assets/b8854b390466838ff70b35c159a3c90f9700f362.jpg';
import visionImg from '../assets/34bd2af547b98f3b01b943da6a25bdc2e2785b9b.jpg';
import SectionHeader from './common/SectionHeader';
import '../App.css';

export default function MissionVision() {
  return (
    <section className="mission-vision-section py-4 py-lg-5">
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        {/* Mission Row */}
        <div className="row align-items-center g-4 g-lg-5 mb-5 pb-3">
          <div className="col-12 col-lg-5 d-flex justify-content-center ">
            <div className="vertical-image-card1">
              <img
                src={missionImg}
                alt="OUR MISSION"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <SectionHeader
              title="OUR"
              highlightedText="MISSION"
              highlightClass="gold-text"
              className="section-headline1 mb-3 mb-lg-4 "
            />

            <p className="section-paragraph mx-auto mx-lg-10 fs-4">
              To deliver innovative, scalable, and technology-driven solutions that address complex 
              business challenges, optimize performance, strengthen operational capabilities, and empower 
              organizations to achieve sustainable growth and long-term competitive advantage.
            </p>
          </div>
        </div>

        {/* Vision Row */}
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7 text-center text-lg-start order-2 order-lg-1">
            <SectionHeader
              title="OUR"
              highlightedText="VISION"
              highlightClass="gold-text"
              className="section-headline mb-3 mb-lg-4  "
            />

            <p className="section-paragraph1  fs-4">
              To become a trusted global technology partner, transforming ideas into innovative solutions 
              that shape the future, create lasting value, enhance business performance, drive sustainable 
              growth, and create new opportunities through technology and innovation.
            </p>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center order-1 order-lg-2">
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

