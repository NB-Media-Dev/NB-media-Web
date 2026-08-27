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
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <div className="solutions-grey-wrapper position-relative">
          <div className="solutions-header-badge">
            <h2>End-to-End Solutions</h2>
          </div>

          <p className="solutions-subtitle">
            We help businesses transform with intelligent solutions that improve
            efficiency, elevate customer experiences, and achieve lasting growth.
          </p>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-md-4">
            {SERVICES_DATA.map((item) => (
              <div key={item.id} className="col d-flex">
                <SolutionCard
                  item={item}
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

