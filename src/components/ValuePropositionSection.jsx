import React from 'react';
import { motion } from 'framer-motion';

const ValuePropositionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-[var(--color-white)] theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Value Proposition
        </motion.h2>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            {
              title: "Localized Content",
              description: "Tailored templates and AI insights for Indian industries"
            },
            {
              title: "Affordable Pricing",
              description: "Starting at ₹499/month"
            },
            {
              title: "Multi-lingual Support",
              description: "Reaching Tier 2/3 founders"
            },
            {
              title: "Investor Access",
              description: "50,000+ global angels, VCs, and accelerators"
            },
            {
              title: "Cultural Context",
              description: "AI trained on Indian market dynamics"
            }
          ].map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-light)] p-5 sm:p-6 rounded-xl border-l-4 border-[var(--color-accent)] hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[var(--color-dark)]">{value.title}</h3>
              <p className="text-sm sm:text-base text-[var(--color-gray)]">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 