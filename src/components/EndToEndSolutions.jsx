import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function EndToEndSolutions({ searchQuery = '' }) {
  const navigate = useNavigate();

  const solutions = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description:
        'Creating visually stunning, lightning-fast, and scalable web solutions that empower businesses to grow, innovate, and succeed in the digital world.',
      variant: 'orange',
      cardClass: 'card-top-left-rounded',
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description:
        'Build engaging, feature-packed mobile applications that deliver outstanding user experiences, increase customer retention, and help your business grow on iOS and Android.',
      variant: 'dark',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description:
        'Designing user experiences that increase engagement, improve usability, and maximize conversions through research-driven and visually appealing interfaces.',
      variant: 'dark',
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description:
        'Building intelligent cloud environments that provide flexibility, security, and high availability to accelerate your digital transformation.',
      variant: 'dark',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description:
        'Empowering your brand with innovative, data-driven marketing strategies that enhance online presence, engage your audience, and accelerate business growth.',
      variant: 'orange',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description:
        'Transform your business with conversion-optimized e-commerce solutions designed to attract customers, increase sales, and build lasting brand loyalty.',
      variant: 'dark',
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      description:
        'Secure your digital infrastructure with intelligent cybersecurity solutions that protect against modern threats and data breaches.',
      variant: 'dark',
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description:
        'Transform your business with intelligent AI solutions that automate processes, improve productivity, and accelerate innovation.',
      variant: 'dark',
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description:
        'Navigate digital transformation with expert IT guidance, tailored strategies, and innovative technology solutions.',
      variant: 'orange',
      cardClass: 'card-bottom-right-rounded',
    },
  ];

  const filteredSolutions = solutions.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (serviceId) => {
    navigate(`/services?service=${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

          {searchQuery && (
            <div style={{ textAlign: 'center', marginBottom: '20px', color: '#FFA600', fontWeight: '600', fontSize: '16px' }}>
              Showing {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </div>
          )}

          <div className="solutions-grid">
            {filteredSolutions.length > 0 ? (
              filteredSolutions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className={`solution-card ${
                    item.variant === 'orange' ? 'solution-card-orange' : 'solution-card-dark'
                  } ${item.cardClass || ''}`}
                  style={{ cursor: 'pointer' }}
                  title={`View ${item.title} in Our Services`}
                >
                  <h3 className="solution-card-title">{item.title}</h3>
                  <p className="solution-card-desc">{item.description}</p>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px', color: '#aaaaaa', fontSize: '16px' }}>
                No solutions found matching "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
