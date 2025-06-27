import React from 'react';
import { motion } from 'framer-motion';

const PositioningSection = () => {
  const differentiators = [
    "Localized tools",
    "Investor-ready outputs",
    "Multi-lingual & affordable",
    "End-to-end startup support"
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] theme-transition relative overflow-hidden">
      {/* Abstract circuit-like pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#ffffff" strokeWidth="1">
            <path d="M 100 100 L 700 100 L 700 700 L 100 700 Z" />
            <path d="M 200 200 L 600 200 L 600 600 L 200 600 Z" />
            <path d="M 300 300 L 500 300 L 500 500 L 300 500 Z" />
            <path d="M 100 100 L 300 300" />
            <path d="M 700 100 L 500 300" />
            <path d="M 700 700 L 500 500" />
            <path d="M 100 700 L 300 500" />
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[1px] w-12 bg-white opacity-60"></div>
            <span className="text-sm uppercase tracking-[0.2em] font-medium text-white">Positioning</span>
            <div className="h-[1px] w-12 bg-white opacity-60"></div>
          </motion.div>
          
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-10 left-0 text-white opacity-20 text-8xl font-serif">"</div>
            <div className="absolute -bottom-16 right-0 text-white opacity-20 text-8xl font-serif">"</div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
              AI-powered co-pilot for Indian founders to plan, fund, and grow their startups – faster and smarter.
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 text-white opacity-90">Key differentiators:</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, translateY: 20 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-5 h-full hover:bg-black/30 transition-all duration-300 relative overflow-hidden">
                    {/* Animated highlight on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <span className="font-bold text-white text-lg">{item}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection; 