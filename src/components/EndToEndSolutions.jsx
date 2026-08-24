import React from 'react';
import { useNavigate } from 'react-router-dom';
import SolutionCard from './cards/SolutionCard';
import { SERVICES_DATA } from '../data/servicesData';
import { scrollToSection } from '../utils/navigation';
import '../App.css';

export default function EndToEndSolutions() {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/services?service=${serviceId}`);
    scrollToSection('services');
  };

  return (
    <section id="solutions" className="solutions-section">
      <div className="max-container">
        <div className="solutions-grey-wrapper1">
          <div className="solutions-header-badge">
            <h2>End-to-End Solutions</h2>
          </div>

          <p className="solutions-subtitle">
            We help businesses transform with intelligent solutions that improve
            efficiency, elevate customer experiences, and achieve lasting growth.
          </p>

          <div className="solutions-grid">
            {SERVICES_DATA.map((item) => (
              <SolutionCard
                key={item.id}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
