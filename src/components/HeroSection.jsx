import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useImageContext } from '../context/ImageContext';
import { useThemeContext } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDarkMode } = useThemeContext();
  const { preloadedImages } = useImageContext();
  const darkImageRef = useRef(null);
  const lightImageRef = useRef(null);

  // Preload both theme images on component mount
  useEffect(() => {
    // Preload dark theme image
    const darkImg = new Image();
    darkImg.src = '/Gradients/grad3.png';
    darkImageRef.current = darkImg;

    // Preload light theme image
    const lightImg = new Image();
    lightImg.src = '/Gradients/grad12.png';
    lightImageRef.current = lightImg;
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
    hidden: { opacity: 0, translateY: 30 },
    visible: { 
      opacity: 1, 
      translateY: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, translateY: 30 },
    visible: {
      opacity: 1,
      translateY: 0,
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

  // Get the appropriate background images
  const darkModeImage = '/Gradients/grad3.png';
  const lightModeImage = '/Gradients/grad12.png';

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient image with animation */}
      <div className="absolute inset-0 w-full h-full">
        {/* Always render both images but control visibility with opacity */}
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-700"
          style={{ opacity: isDarkMode ? 1 : 0 }}
        >
          <img 
            src={darkModeImage}
            alt="Dark Background Gradient" 
            className="w-full h-full object-cover"
            style={{ visibility: isDarkMode ? 'visible' : 'hidden' }}
          />
        </div>
        
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-700"
          style={{ opacity: isDarkMode ? 0 : 1 }}
        >
          <img 
            src={lightModeImage}
            alt="Light Background Gradient" 
            className="w-full h-full object-cover"
            style={{ visibility: isDarkMode ? 'hidden' : 'visible' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-opacity-30 backdrop-blur-[2px]"></div>
      </div>
      
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