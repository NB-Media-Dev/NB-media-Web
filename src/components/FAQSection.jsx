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
      <div className="faq-hero-banner position-relative d-flex align-items-center justify-content-center overflow-hidden">
        <img
          src={faqBg}
          alt="FAQ Background"
          className="faq-hero-bg position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div className="faq-hero-overlay position-absolute top-0 start-0 w-100 h-100" />
        
        <h2 className="faq-large-title position-relative z-2 text-center">
          F<span className="faq-large-title1">A</span>Q
        </h2>
      </div>

      <div className="container position-relative z-3 faq-container-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <div className="faq-grey-container">
              <h3 className="faq-box-heading text-center d-flex align-items-center justify-content-center gap-2 mb-4">
                <span>Frequently Asked Questions</span>
                <HelpCircle size={24} className="faq-title-icon flex-shrink-0" />
              </h3>

              <div className="faq-accordion-list d-flex flex-column gap-3">
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
        </div>
      </div>
    </section>
  );
}

