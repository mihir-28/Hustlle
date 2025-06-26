import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-[var(--color-white)] theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Vision & Mission
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="bg-[var(--color-light)] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--color-accent)]">Vision</h3>
            <p className="text-base sm:text-lg text-[var(--color-dark)] leading-relaxed">
              To become India's most trusted AI-powered startup partner, enabling every entrepreneur—from metro cities to rural towns—to build, pitch and scale world-class businesses.
            </p>
          </motion.div>
          <motion.div 
            className="bg-[var(--color-light)] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--color-accent)]">Mission</h3>
            <p className="text-base sm:text-lg text-[var(--color-dark)] leading-relaxed">
              To simplify entrepreneurship by providing intelligent, affordable, and India-centric tools. Hustlle bridges the gap between ideas and execution by making startup support accessible to all.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection; 