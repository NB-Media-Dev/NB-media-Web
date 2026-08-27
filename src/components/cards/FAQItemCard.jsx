import React, { memo } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQItemCard = memo(function FAQItemCard({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item-card ${isOpen ? 'active' : ''}`}>
      <button onClick={onToggle} className="faq-question-btn">
        <span>{faq.question}</span>
        <span className={`faq-toggle-icon ${isOpen ? 'open' : ''}`}>
          <IoIosArrowDown />
        </span>
      </button>

      <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="faq-answer-content">{faq.answer}</div>
      </div>
    </div>
  );
});

export default FAQItemCard;

