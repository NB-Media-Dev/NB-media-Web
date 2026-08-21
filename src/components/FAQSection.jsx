import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import faqBg from '../assets/a22f98f6d896051920da15f01a1d3ea0768547e4.jpg';
import { IoIosArrowDown } from "react-icons/io";
import '../App.css';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What software development services do you offer?',
      answer: 'We provide end-to-end technology solutions, including Web Development, Mobile App Development, UI/UX Design, Digital Marketing, Cloud Solutions, AI Automation, E-commerce Development, and Cybersecurity services tailored to your business goals.',
    },
    {
      question: 'Do you build custom websites for businesses?',
      answer: 'Yes. We design and develop responsive, secure, and high-performance websites that are customized to your business requirements, ensuring an excellent user experience across all devices.',
    },
    {
      question: 'Do you develop mobile applications for Android and iOS?',
      answer: 'Absolutely. We develop native and cross-platform mobile applications for Android and iOS with intuitive interfaces, seamless performance, and scalable architecture.',
    },
    {
      question: 'What is included in your digital marketing services?',
      answer: 'Our digital marketing services include SEO, Social Media Marketing, Google Ads, Meta Ads, Content Marketing, Email Marketing, and Performance Marketing to help businesses increase visibility and generate quality leads.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on the scope and complexity. After understanding your requirements, we provide a detailed project plan with estimated milestones and delivery dates.',
    },
  ];

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
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-item-card ${isOpen ? 'active' : ''}`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="faq-question-btn"
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-toggle-icon ${isOpen ? 'open' : ''}`}>
                      <IoIosArrowDown />
                    </span>
                  </button>
                  
                  <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                    <div className="faq-answer-content">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
