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
    <section className="tech-section py-4 py-lg-5">
      <img
        src={bg}
        alt="Office environment background"
        className="tech-bg"
      />

      <div className="container position-relative z-2">
        <SectionHeader className="tech-header-title mb-4 mb-lg-5">
          <span className="gold-text">Technology</span> We Use
        </SectionHeader>

        {/* Categories grid using Bootstrap responsive row columns */}
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-6 g-2 g-md-3 justify-content-center mb-4 mb-lg-5">
          {TECH_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;
            const iconColor = isSelected ? '#000000' : '#FFA500';
            return (
              <div key={cat.name} className="col">
                <button
                  onClick={() => setActiveCategory(cat.name)}
                  className={`tech-cat-btn w-100 h-100 ${isSelected ? 'active' : ''}`}
                >
                  <div>{cat.icon(iconColor)}</div>
                  <span>{cat.name}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Matrix box containing tech stack sub-sections */}
        <div className="tech-matrix-box">
          {currentContent.map((subSection, index) => (
            <div
              key={subSection.subtitle + index}
              className="tech-sub-section mb-4"
            >
              {subSection.subtitle && (
                <h3 className="tech-sub-title mb-3">
                  {subSection.subtitle}
                </h3>
              )}

              {/* Items grid using Bootstrap responsive row-cols */}
              <div className={`row row-cols-2 row-cols-sm-3 row-cols-lg-${subSection.gridCols || 4} g-2 g-md-3 justify-content-center`}>
                {subSection.items.map((tech) => (
                  <div key={tech.name} className="col d-flex">
                    <TechCardItem tech={tech} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

