"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our gallery', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-white/10 backdrop-blur-sm py-3 md:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#home" className="flex items-center space-x-2">
            <img 
              src="/images/logo3.png" 
              alt="Saloon & Spa Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex lg:space-x-8 md:space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className="text-black hover:text-amber-600 font-semibold transition-colors duration-300 text-sm lg:text-base"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="block text-black hover:text-amber-600 font-semibold transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;