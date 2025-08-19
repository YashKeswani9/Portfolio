'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import siteText from '@/data/siteText.json';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = siteText.navigation.links;

  useEffect(() => {
    const handleScroll = () => {
      const sections = (siteText.navigation?.links ?? []).map(l => l.id);
      let currentSection = sections[0] ?? 'home';
      const offset = 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = section;
          break;
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = sections[sections.length - 1] ?? currentSection;
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full transition-colors duration-300 bg-black text-white border-b border-white/10 shadow-sm py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left spacer (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block w-1/3"
          />

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex items-center justify-center space-x-6 w-1/3">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`font-subheading text-lg transition-colors duration-300 relative group whitespace-nowrap ${
                    activeSection === link.id
                      ? 'text-white font-semibold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* keep the underline; full width for active, hover for inactive */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right spacer (desktop only) */}
          <div className="hidden md:block w-1/3" />

          {/* Mobile center title */}
          <div className="md:hidden flex-1 text-center font-heading text-sm text-white/90">
            {siteText.general?.siteName ?? 'Portfolio'}
          </div>

          {/* Mobile Menu Button (right) */}
          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 focus:outline-none hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black border-t border-white/10 shadow-lg"
        >
          <div className="px-6 py-6 space-y-5">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`block font-subheading text-xl w-full text-left whitespace-nowrap transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        activeSection === link.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
