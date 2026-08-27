import React, { memo } from 'react';

const TechCardItem = memo(function TechCardItem({ tech }) {
  return (
    <div className="tech-card-item w-100">
      <div className="tech-logo-svg">{tech.icon}</div>
      <span className="tech-name gold-text">{tech.name}</span>
    </div>
  );
});

export default TechCardItem;


