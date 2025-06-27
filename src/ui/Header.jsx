import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.getAttribute('data-theme') === 'dark' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && 
         !htmlElement.hasAttribute('data-theme'));
      setIsDarkMode(isDark);
    };
    
    checkTheme();
    
    // Set up observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Listen to system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => checkTheme();
    mediaQuery.addEventListener('change', handleChange);
    
    // Handle scroll for pill navigation
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <header 
        className={`transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'px-8 py-3 rounded-full bg-white shadow-md w-auto' 
            : 'px-8 py-3 rounded-full bg-black/20 backdrop-blur-md w-auto'
        }`}
      >
        <div className="container mx-auto max-w-6xl flex justify-center">
          <h1 className="text-3xl font-bold text-[var(--color-dark)]">hustlle</h1>
        </div>
      </header>
    </div>
  );
};

export default Header; 