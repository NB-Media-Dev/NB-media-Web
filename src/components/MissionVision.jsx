import React from 'react';
import missionImg from '../assets/b8854b390466838ff70b35c159a3c90f9700f362.jpg';
import visionImg from '../assets/34bd2af547b98f3b01b943da6a25bdc2e2785b9b.jpg';
import SectionHeader from './common/SectionHeader';
import '../App.css';

const SECTIONS = [
  {
    id: 'mission',
    title: 'OUR',
    highlightedText: 'MISSION',
    image: missionImg,
    alt: 'OUR MISSION',
    text: 'To deliver innovative, scalable, and technology-driven solutions that address complex business challenges, optimize performance, strengthen operational capabilities, and empower organizations to achieve sustainable growth and long-term competitive advantage.',
    reverse: false,
  },
  {
    id: 'vision',
    title: 'OUR',
    highlightedText: 'VISION',
    image: visionImg,
    alt: 'OUR VISION',
    text: 'To become a trusted global technology partner, transforming ideas into innovative solutions that shape the future, create lasting value, enhance business performance, drive sustainable growth, and create new opportunities through technology and innovation.',
    reverse: true,
  },
];

export default function MissionVision() {
  return (
    <section className="mission-vision-section py-4 py-lg-5">
      <div className="container px-3 px-md-4 px-lg-5">
        {SECTIONS.map(({ id, title, highlightedText, image, alt, text, reverse }, index) => (
          <div
            key={id}
            className={`row align-items-center justify-content-between g-4 g-lg-5 ${
              index !== SECTIONS.length - 1 ? 'mb-5 pb-3 pb-lg-5' : ''
            }`}
          >
            <div
              className={`col-12 col-lg-5 d-flex justify-content-center ${
                reverse ? 'justify-content-lg-end order-1 order-lg-2' : 'justify-content-lg-start order-1'
              }`}
            >
              <div className="vertical-image-card">
                <img src={image} alt={alt} />
              </div>
            </div>

            <div
              className={`col-12 col-lg-6 text-center text-lg-start ${
                reverse ? 'order-2 order-lg-1' : 'order-2'
              }`}
            >
              <SectionHeader
                title={title}
                highlightedText={highlightedText}
                highlightClass="gold-text"
                className="section-headline mb-3 mb-lg-4"
              />
              <p className="section-paragraph mx-auto mx-lg-0 fs-4">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
