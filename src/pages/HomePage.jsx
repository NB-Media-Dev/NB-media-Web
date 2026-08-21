import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import EndToEndSolutions from '../components/EndToEndSolutions';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';
import ProductsSection from '../components/ProductsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ searchQuery, setSearchQuery }) {
  return (
    <>
      <Hero />
      <MissionVision searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EndToEndSolutions searchQuery={searchQuery} />
      <AboutSection />
      <TechStackSection />
      <ProductsSection searchQuery={searchQuery} />
      <FAQSection />
      <ContactSection />
    </>
  );
}
