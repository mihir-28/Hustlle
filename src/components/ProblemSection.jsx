import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const problems = [
    "Lack of structured tools for creating investor-ready plans",
    "Limited access to financial modelling for budgeting and forecasting",
    "Difficulty reaching relevant investors",
    "Challenges finding affordable, reliable professional services"
  ];

  return (
    <section className="py-24 px-4 theme-transition relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left column - Title and description */}
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="h-[1px] w-8 bg-[var(--color-tertiary)]"></div>
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-tertiary)]">Challenges</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-dark)]">The Problem</h2>
              
              <p className="text-lg text-[var(--color-gray)] leading-relaxed mb-8 font-light">
                Startups struggle with fragmented tools, inefficiencies, and limited access to professional resources.
              </p>
              
              <div className="hidden md:block">
                <motion.div 
                  className="h-1 w-16 bg-gradient-to-r from-[var(--color-tertiary)] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Problem cards */}
          <motion.div 
            className="md:w-3/5 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                className="bg-[var(--color-white)] p-6 md:p-8 rounded-lg border-l-2 border-[var(--color-tertiary)] hover:border-l-4 transition-all"
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ translateX: 4 }}
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-full bg-[var(--color-light)] w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-tertiary)] font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-lg text-[var(--color-dark)] font-medium">{problem}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 