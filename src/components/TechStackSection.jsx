import React, { useState } from 'react';
import bg from '../assets/20743dcabce7d8f3d6a2e655b7ca62f177bdde90.jpg';
import TechCardItem from './cards/TechCardItem';
import SectionHeader from './common/SectionHeader';
import { TECH_CATEGORIES, TECH_CATEGORIES_DATA } from '../data/techStackData';
import '../App.css';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('Web Development');

  const currentContent = TECH_CATEGORIES_DATA[activeCategory] || TECH_CATEGORIES_DATA['Web Development'];

  return (
    <section className="tech-section">
      <img
        src={bg}
        alt="Office environment background"
        className="tech-bg"
      />

      <div className="max-container1">
        <SectionHeader className="tech-header-title">
          <span className="gold-text">Technology</span> We Use
        </SectionHeader>

        <div className="tech-categories-grid">
          {TECH_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;
            const iconColor = isSelected ? '#000000' : '#FFA500';
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`tech-cat-btn ${isSelected ? 'active' : ''}`}
              >
                <div>{cat.icon(iconColor)}</div>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        <div className="tech-matrix-box">
          {currentContent.map((subSection, index) => (
            <div
              key={subSection.subtitle + index}
              className="tech-sub-section"
              style={{ marginBottom: index === currentContent.length - 1 ? 0 : '40px' }}
            >
              {subSection.subtitle && (
                <h3 className="tech-sub-title">
                  {subSection.subtitle}
                </h3>
              )}

              <div
                className="tech-items-grid"
                style={{
                  '--desktop-cols': subSection.gridCols || 4,
                }}
              >
                {subSection.items.map((tech) => (
                  <TechCardItem key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
