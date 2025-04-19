
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AcademicsSection from '@/components/AcademicsSection';
import StudentLifeSection from '@/components/student-life/StudentLifeSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Jimba-Gede Secondary School";
  }, []);

  return (
    <div className="min-h-screen space-y-4 md:space-y-2">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <NewsEventsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

