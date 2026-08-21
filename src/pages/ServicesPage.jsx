import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function ServicesPage({ searchQuery = '' }) {
  return (
    <div style={{ paddingTop: '60px' }}>
      <ServicesSection searchQuery={searchQuery} />
      <ContactSection />
    </div>
  );
}
