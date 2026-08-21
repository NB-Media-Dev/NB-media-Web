import React from 'react';
import { Search } from 'lucide-react';
import missionImg from '../assets/b8854b390466838ff70b35c159a3c90f9700f362.jpg';
import visionImg from '../assets/34bd2af547b98f3b01b943da6a25bdc2e2785b9b.jpg';
import '../App.css';

export default function MissionVision({ searchQuery, setSearchQuery }) {
  const handleSearchSubmit = () => {
    const elem = document.querySelector('#solutions');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <section className="mission-vision-section">
      <div className="max-container">
        <div className="search-bar-wrapper">
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search end-to-end solutions & services..."
              className="search-input-field"
            />
            <Search 
              className="search-icon-btn" 
              size={20} 
              onClick={handleSearchSubmit}
              style={{ cursor: 'pointer' }}
              title="Search services"
            />
          </div>
        </div>

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
            <h2 className="section-headline">
              OUR <span className="gold-text">MISSION</span>
            </h2>

            <p className="section-paragraph">
              To deliver innovative, scalable, and technology-driven solutions that address complex 
              business challenges, optimize performance, strengthen operational capabilities, and empower 
              organizations to achieve sustainable growth and long-term competitive advantage.
            </p>
          </div>
        </div>

        <div className="vision-row">
          <div className="vision-text-col">
            <h2 className="section-headline1">
              OUR <span className="gold-text">VISION</span>
            </h2>

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
