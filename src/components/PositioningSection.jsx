import React from 'react';
import { motion } from 'framer-motion';

const PositioningSection = () => {
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: index => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + (index * 0.1)
      }
    })
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-[var(--color-accent)] theme-transition">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.blockquote 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[var(--color-white)] max-w-4xl mx-auto leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={quoteVariants}
        >
          "AI-powered co-pilot for Indian founders to plan, fund, and grow their startups – faster and smarter."
        </motion.blockquote>
        
        <motion.h3 
          className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-[var(--color-white)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Key differentiators:
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            "Localized tools",
            "Investor-ready outputs",
            "Multi-lingual & affordable",
            "End-to-end startup support"
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-white)] px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-md transition-all"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={tagVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" 
              }}
            >
              <span className="font-bold text-sm sm:text-base text-[var(--color-dark)]">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositioningSection; 