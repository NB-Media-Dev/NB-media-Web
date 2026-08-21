import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import webDevImg from '../assets/d518cc62a3566673968e45a3efda9c937d735258.jpg';
import cyberImg from '../assets/34a026c0221740abb7f6a0221de7d800ffa268ea.jpg';
import digitalMarketingImg from '../assets/d6da307d87f1818a4cb151576279f986cd13eda4.jpg';
import cloudImg from '../assets/fbcd3f87704c77d405fe4f982bbc57077f7b350e.jpg';
import uiUxImg from '../assets/afac26262a737476427ebb0251ee1c621910be17.jpg';
import aiAutomationImg from '../assets/ca173fb13b87daa44bdcac4808929d36b459ebad.jpg';
import mobileDevImg from '../assets/73f44acbff67fcd17a22d973ff6073e566636614.jpg';
import resultDrivenImg from '../assets/2cbf3bd90b902b10cb62e91b559408bb62dda8e2.png';
import realTimeAnalyticsImg from '../assets/25d65920a0384dc4ca6cb3b400e74f765811b126.png';
import customizedSolutionImg from '../assets/d14b364d914711f0c34b293e529e581c074daf62.png';
import endToEndSupportImg from '../assets/bb35453984c2c9a496498b1307c63baa5bb9566c.png';
import scalableSolutionsImg from '../assets/c90d3830af1bed7dee28f8f13a7aff2da25ee2bf.png';
import clientFocusedImg from '../assets/de95c4a85fb02a6aa980b459c797be88b4c260d1.png';

import '../App.css';

export default function ServicesSection({ searchQuery = '' }) {
  const [searchParams] = useSearchParams();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const mainServices = [
    {
      id: 'web-dev',
      titleFirst: 'Web',
      titleSecond: 'Development',
      description:
        'We build fast, secure, and scalable websites tailored to your business needs. From corporate websites to custom web applications, we deliver solutions that drive growth.',
      features: [
        'Responsive & Mobile-Friendly Design',
        'SEO-Optimized & High Performance',
        'Secure, Scalable & Custom Solutions',
      ],
      image: webDevImg,
    },
    {
      id: 'mobile-dev',
      titleFirst: 'Mobile App',
      titleSecond: 'Development',
      description:
        'Build engaging, feature-packed mobile applications that deliver outstanding user experiences, increase customer retention, and help your business grow on iOS and Android.',
      features: [
        'iOS & Android Native Apps',
        'Intuitive & Modern UI/UX',
        'Real-Time Cloud Synchronization',
      ],
      image: mobileDevImg,
    },
    {
      id: 'ui-ux',
      titleFirst: 'UI/UX',
      titleSecond: 'Design',
      description:
        'Create engaging digital experiences with modern, user-focused interface designs. We design intuitive and visually appealing experiences that improve user satisfaction.',
      features: [
        'User-Centered Design',
        'Interactive Prototypes',
        'Responsive & Modern Interfaces',
      ],
      image: uiUxImg,
    },
    {
      id: 'cloud-solutions',
      titleFirst: 'Cloud',
      titleSecond: 'Solutions',
      description:
        'Leverage secure and scalable cloud technologies to power your business growth. We simplify cloud migration, deployment, and infrastructure management.',
      features: [
        'Cloud Migration & Deployment',
        'Secure Infrastructure Management',
        'High Availability & Scalability',
      ],
      image: cloudImg,
    },
    {
      id: 'digital-marketing',
      titleFirst: 'Digital',
      titleSecond: 'Marketing',
      description:
        'Grow your brand with data-driven digital marketing strategies that generate real results. We help you reach the right audience and maximize your online presence.',
      features: [
        'SEO & Search Marketing',
        'Social Media & Paid Ads',
        'Lead Generation & Analytics',
      ],
      image: digitalMarketingImg,
    },
    {
      id: 'ecommerce',
      titleFirst: 'E-Commerce',
      titleSecond: 'Solutions',
      description:
        'Transform your business with conversion-optimized e-commerce solutions designed to attract customers, increase sales, and build lasting brand loyalty.',
      features: [
        'Custom E-Commerce Storefronts',
        'Secure Payment Integration',
        'Inventory & Order Management',
      ],
      image: webDevImg,
    },
    {
      id: 'cyber-security',
      titleFirst: 'Cyber',
      titleSecond: 'Security',
      description:
        'Protect your business from digital threats with comprehensive cybersecurity solutions. We safeguard your systems, networks, and sensitive business data.',
      features: [
        'Security Assessment & Audits',
        'Data Protection & Compliance',
        'Threat Monitoring & Prevention',
      ],
      image: cyberImg,
    },
    {
      id: 'ai-automation',
      titleFirst: 'AI',
      titleSecond: 'Automation',
      description:
        'Transform your business with intelligent automation powered by artificial intelligence. We streamline workflows, improve efficiency, and reduce manual effort.',
      features: [
        'AI-Powered Workflows',
        'Process Automation',
        'Intelligent Business Solutions',
      ],
      image: aiAutomationImg,
    },
    {
      id: 'it-consulting',
      titleFirst: 'IT',
      titleSecond: 'Consulting',
      description:
        'Navigate digital transformation with expert IT guidance, tailored strategies, and innovative technology solutions.',
      features: [
        'Strategic Tech Roadmap',
        'Architecture & Infrastructure Planning',
        'Digital Transformation Consulting',
      ],
      image: cloudImg,
    },
  ];

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const idx = mainServices.findIndex((s) => s.id === serviceParam);
      if (idx !== -1) {
        setActiveServiceIndex(idx);
        const elem = document.querySelector('#services');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [searchParams]);

  // Automatically rotate featured service every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prevIndex) => (prevIndex + 1) % mainServices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mainServices.length]);

  const whyChooseFeatures = [
    {
      id: 'result-driven',
      title: 'Result-Driven Strategies',
      description:
        'We build focused strategies designed to deliver measurable growth, stronger visibility, and better results.',
      image: resultDrivenImg,
    },
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics',
      description:
        'Monitor performance, identify trends, and make data-driven decisions with confidence.',
      image: realTimeAnalyticsImg,
    },
    {
      id: 'customized-solutions',
      title: 'Customized Solutions',
      description:
        'We understand your goals, audience, and challenges to create solutions tailored specifically to your business needs.',
      image: customizedSolutionImg,
    },
    {
      id: 'end-to-end-support',
      title: 'End-to-End Support',
      description:
        'From planning to execution and ongoing support, we manage every stage to keep your business moving forward.',
      image: endToEndSupportImg,
    },
    {
      id: 'scalable-solutions',
      title: 'Scalable Solutions',
      description:
        'Flexible solutions that evolve with your business, enabling seamless expansion, improved performance, and long-term growth.',
      image: scalableSolutionsImg,
    },
    {
      id: 'client-focused',
      title: 'Client-Focused Approach',
      description:
        'We align every solution with your business priorities, combining close collaboration, strategic insight, and continuous refinement to deliver meaningful, measurable value.',
      image: clientFocusedImg,
    },
  ];

  const filteredWhyChoose = whyChooseFeatures.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeService = mainServices[activeServiceIndex] || mainServices[0];

  const handlePrevService = () => {
    setActiveServiceIndex((prev) =>
      prev === 0 ? mainServices.length - 1 : prev - 1
    );
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) =>
      prev === mainServices.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="services" className="services-section-wrapper">
      <div className="max-container services-container">
        <h2 className="services-main-heading">
          OUR <span className="highlight-orange">SERVICES</span>
        </h2>

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
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const elem = document.querySelector('#contact');
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="get-solution-btn"
              >
                Get Your Business Solution
              </a>
            </div>
          </div>

          <div className="service-carousel-column">
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
                title={`Next: ${mainServices[(activeServiceIndex + 1) % mainServices.length].titleFirst} ${mainServices[(activeServiceIndex + 1) % mainServices.length].titleSecond}`}
              >
                <div className="card-image-wrapper">
                  <img
                    src={mainServices[(activeServiceIndex + 1) % mainServices.length].image}
                    alt={`${mainServices[(activeServiceIndex + 1) % mainServices.length].titleFirst} ${mainServices[(activeServiceIndex + 1) % mainServices.length].titleSecond}`}
                    className="carousel-card-img"
                  />
                </div>
              </div>
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
          {filteredWhyChoose.map((item) => (
            <div key={item.id} className="why-choose-card">
              <div className="why-choose-card-img-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="why-choose-asset-img"
                />
              </div>
              <h3 className="why-choose-card-title">{item.title}</h3>
              <p className="why-choose-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
