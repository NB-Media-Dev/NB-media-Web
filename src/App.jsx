import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <SplashScreen key="splash" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ minHeight: '100vh', backgroundColor: '#090A0F', color: '#ffffff', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}
        >
          <Router>
            <ScrollToTop />
            <div className="bg-[#090A0F] min-h-screen text-white content-wrapper" style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
              <Navbar />
              <main style={{ width: '100%', overflowX: 'hidden' }}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <HomePage />
                    }
                  />
                  <Route
                    path="/services"
                    element={<ServicesPage />}
                  />
                  <Route
                    path="/contact"
                    element={<ContactPage />}
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
