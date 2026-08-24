import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import faqBg from '../assets/a22f98f6d896051920da15f01a1d3ea0768547e4.jpg';
import FAQItemCard from './cards/FAQItemCard';
import { FAQS_DATA } from '../data/faqData';
import '../App.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-hero-banner">
        <img
          src={faqBg}
          alt="FAQ Background"
          className="faq-hero-bg"
        />
        <div className="faq-hero-overlay" />
        
        <h2 className="faq-large-title">
          F<span className="faq-large-title1">A</span>Q
        </h2>
      </div>

      <div className="faq-grey-box-wrapper">
        <div className="faq-grey-container">
          <h3 className="faq-box-heading">
            <span>Frequently Asked Questions</span>
            <HelpCircle size={24} className="faq-title-icon" />
          </h3>

          <div className="faq-accordion-list">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <FAQItemCard
                  key={index}
                  faq={faq}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? -1 : index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
