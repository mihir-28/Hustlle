import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          The Problem
        </motion.h2>
        <motion.p 
          className="text-base sm:text-xl mb-8 sm:mb-12 text-center text-[var(--color-gray)] max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Startups struggle with fragmented tools, inefficiencies, and limited access to professional resources:
        </motion.p>
        
        <motion.div 
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "Lack of structured tools for creating investor-ready plans",
            "Limited access to financial modelling for budgeting and forecasting",
            "Difficulty reaching relevant investors",
            "Challenges finding affordable, reliable professional services"
          ].map((problem, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-white)] p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-white)] flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <p className="text-base sm:text-lg text-[var(--color-dark)]">{problem}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection; 