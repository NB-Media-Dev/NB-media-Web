import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import PageLayout from '../components/common/PageLayout';

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesSection />
      <ContactSection />
    </PageLayout>
  );
}
