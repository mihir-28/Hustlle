import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, delay: 0.4 }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
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
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[var(--color-dark)]"
              variants={fadeIn}
            >
              Empowering <span className="text-[var(--color-accent)]">Indian</span> Entrepreneurs
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 text-[var(--color-gray)] leading-relaxed"
              variants={fadeIn}
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
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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