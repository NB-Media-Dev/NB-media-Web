import React from 'react';

export default function SolutionCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item.id)}
      className={`solution-card w-100 ${
        item.variant === 'orange' ? 'solution-card-orange' : 'solution-card-dark'
      } ${item.cardClass || ''}`}
      style={{ cursor: 'pointer' }}
      title={`View ${item.title} in Our Services`}
    >
      <h3 className="solution-card-title">{item.title}</h3>
      <p className="solution-card-desc">{item.description}</p>
    </div>
  );
}
