import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check if dark mode is active
  useEffect(() => {
    // Initial check
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
    
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Text animation variants with slight y movement
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: isDarkMode 
        ? "0px 4px 20px rgba(253, 151, 0, 0.3)" 
        : "0px 4px 20px rgba(1, 60, 241, 0.25)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Background image animation
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient image with animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <img 
          src={isDarkMode ? "/Gradients/grad3.png" : "/Gradients/grad12.png"}
          alt="Background Gradient" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30 backdrop-blur-[2px]"></div>
      </motion.div>
      
      {/* Content container */}
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-[var(--color-dark)]"
            variants={textVariants}
          >
            Empowering <span className="text-[var(--color-primary)]">Indian</span> Entrepreneurs
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-10 text-[var(--color-dark)] leading-relaxed max-w-3xl mx-auto"
            variants={textVariants}
          >
            <strong>Hustlle</strong> is an AI-powered SaaS platform designed to simplify and automate critical startup processes. 
            Built for Indian startups, entrepreneurs, and SMEs, it offers a unified interface for business planning, 
            financial modelling, investor matchmaking, and professional networking.
          </motion.p>
          
          {/* <motion.button 
            className={`px-10 py-5 rounded-lg font-bold text-lg backdrop-blur-sm transition-all ${
              isDarkMode 
                ? "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-[var(--color-dark)]" 
                : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-tertiary)] text-[var(--color-white)]"
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 