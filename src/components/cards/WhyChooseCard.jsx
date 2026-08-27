import React, { memo } from 'react';

const WhyChooseCard = memo(function WhyChooseCard({ item }) {
  return (
    <div className="why-choose-card">
      <div className="why-choose-card-img-box">
        <img src={item.image} alt={item.title} className="why-choose-asset-img" />
      </div>
      <h3 className="why-choose-card-title">{item.title}</h3>
      <p className="why-choose-card-desc">{item.description}</p>
    </div>
  );
});

export default WhyChooseCard;

