'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#appointment' }
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary"
        >
          DentalCare
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full glass w-10 h-10 flex items-center justify-center shadow-medium"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-primary" />
          </motion.button>
          
          {/* Desktop Book Now Button */}
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(77, 166, 255, 0.35)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-full shadow-glow"
          >
            Book Now
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full glass w-10 h-10 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-primary" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass mt-4 mx-6 rounded-2xl p-6 shadow-strong"
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleMenuClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition py-2 text-lg"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={handleMenuClick}
              className="bg-primary text-white px-6 py-3 rounded-full shadow-glow text-center font-semibold"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
