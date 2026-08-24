import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import WhyChooseCard from './cards/WhyChooseCard';
import SectionHeader from './common/SectionHeader';
import CTAButton from './common/CTAButton';
import { SERVICES_DATA, WHY_CHOOSE_FEATURES } from '../data/servicesData';
import { scrollToSection } from '../utils/navigation';
import '../App.css';

export default function ServicesSection() {
  const [searchParams] = useSearchParams();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const idx = SERVICES_DATA.findIndex((s) => s.id === serviceParam);
      if (idx !== -1) {
        setActiveServiceIndex(idx);
        scrollToSection('services');
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prevIndex) => (prevIndex + 1) % SERVICES_DATA.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeService = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];

  const handlePrevService = () => {
    setActiveServiceIndex((prev) =>
      prev === 0 ? SERVICES_DATA.length - 1 : prev - 1
    );
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) =>
      prev === SERVICES_DATA.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="services" className="services-section-wrapper">
      <div className="max-container services-container">
        <SectionHeader
          title="OUR"
          highlightedText="SERVICES"
          highlightClass="highlight-orange"
          className="services-main-heading"
        />

        <div className="services-showcase-grid">
          <div className="service-info-column">
            <h3 className="service-title-display">
              <span className="orange-word">{activeService.titleFirst}</span>{' '}
              <span className="orange-word">{activeService.titleSecond}</span>
            </h3>

            <p className="service-description-text">
              {activeService.description}
            </p>

            <ul className="service-features-list">
              {activeService.features.map((feature, idx) => (
                <li key={idx} className="service-feature-item">
                  <span className="check-badge">
                    <Check size={13} strokeWidth={3.5} />
                  </span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="service-action-wrapper">
              <CTAButton
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="get-solution-btn"
              >
                <span>Get Your Business Solution</span>
                <ArrowRight size={18} className="cta-arrow-icon" />
              </CTAButton>
            </div>
          </div>

          <div className="service-carousel-column">
            <div className="carousel-wrapper">
              <button
                type="button"
                onClick={handlePrevService}
                className="carousel-nav-btn prev-btn"
                aria-label="Previous Service Image"
                title="Previous Service"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="carousel-cards-track">
                <div className="carousel-card-item active-card">
                  <div className="card-image-wrapper">
                    <img
                      src={activeService.image}
                      alt={`${activeService.titleFirst} ${activeService.titleSecond}`}
                      className="carousel-card-img"
                    />
                  </div>
                </div>

                <div
                  onClick={handleNextService}
                  className="carousel-card-item inactive-card"
                  style={{ cursor: 'pointer' }}
                  title={`Next: ${SERVICES_DATA[(activeServiceIndex + 1) % SERVICES_DATA.length].titleFirst} ${SERVICES_DATA[(activeServiceIndex + 1) % SERVICES_DATA.length].titleSecond}`}
                >
                  <div className="card-image-wrapper">
                    <img
                      src={SERVICES_DATA[(activeServiceIndex + 1) % SERVICES_DATA.length].image}
                      alt={`${SERVICES_DATA[(activeServiceIndex + 1) % SERVICES_DATA.length].titleFirst} ${SERVICES_DATA[(activeServiceIndex + 1) % SERVICES_DATA.length].titleSecond}`}
                      className="carousel-card-img"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextService}
                className="carousel-nav-btn next-btn"
                aria-label="Next Service Image"
                title="Next Service"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="carousel-pagination-dots">
              {SERVICES_DATA.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceIndex(index)}
                  className={`carousel-dot-btn ${index === activeServiceIndex ? 'active' : ''}`}
                  aria-label={`Go to ${service.title}`}
                  title={service.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-container why-choose-container">
        <h2 className="why-choose-heading">
          Why Choose NB Media{' '}
          <span className="highlight-orange">Tech for Your Growth?</span>
        </h2>

        <div className="why-choose-cards-grid">
          {WHY_CHOOSE_FEATURES.map((item) => (
            <WhyChooseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
