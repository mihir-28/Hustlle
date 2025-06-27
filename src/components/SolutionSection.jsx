import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  const solutions = [
    {
      title: "Business Plan & Pitch Deck Generation",
      description: "Structured documents with industry-aligned templates"
    },
    {
      title: "Financial Modelling & Forecasting",
      description: "Dashboards and scenario analysis tools"
    },
    {
      title: "Professional Guidance & Services",
      description: "Verified expert access through integrated networks"
    },
    {
      title: "Investor Connect",
      description: "Smart matchmaking and outreach tools"
    },
    {
      title: "Unified Dashboard",
      description: "Real-time analytics, investor tracking, and document access—all in one place"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--color-white)] theme-transition relative overflow-hidden">
      {/* Abstract tech pattern */}
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-xl mx-auto mb-20 text-center">
          <motion.div 
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[1px] w-5 bg-[var(--color-primary)]"></div>
            <span className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-primary)]">Our Approach</span>
            <div className="h-[1px] w-5 bg-[var(--color-primary)]"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-dark)]"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Solution
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[var(--color-gray)] leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A fully integrated AI-powered platform that offers:
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-md"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
            >
              <div className="bg-[var(--color-light)] rounded-lg p-8 h-full hover:translate-y-[-4px] transition-all duration-300 group w-full flex flex-col">
                <div className="h-[70px] mb-4">
                  <h3 className="text-xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300 relative">
                    {solution.title}
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--color-primary)] to-transparent absolute bottom-[-8px] left-0 group-hover:w-24 transition-all duration-300"></div>
                  </h3>
                </div>
                
                <p className="text-[var(--color-gray)]">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 