import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--color-accent)",
      boxShadow: "0px 5px 15px rgba(255, 79, 24, 0.4)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[var(--color-dark)]"
              variants={textVariants}
            >
              Empowering <span className="text-[var(--color-accent)]">Indian</span> Entrepreneurs
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 text-[var(--color-gray)] leading-relaxed"
              variants={textVariants}
            >
              <strong>Hustlle</strong> is an AI-powered SaaS platform designed to simplify and automate critical startup processes. 
              Built for Indian startups, entrepreneurs, and SMEs, it offers a unified interface for business planning, 
              financial modelling, investor matchmaking, and professional networking—affordable, multilingual, 
              and localized for Tier 1 to Tier 3 cities.
            </motion.p>
            <motion.button 
              className="bg-[var(--color-accent)] text-[var(--color-white)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:opacity-90 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="bg-[var(--color-white)] p-6 rounded-2xl shadow-lg">
              {/* Placeholder for hero image/illustration */}
              <div className="aspect-video bg-[var(--color-light)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-gray)]">Hero Illustration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 