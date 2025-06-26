import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="py-20 px-4 bg-[var(--color-white)] theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Vision & Mission
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="bg-[var(--color-light)] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--color-accent)]">Vision</h3>
            <p className="text-base sm:text-lg text-[var(--color-dark)] leading-relaxed">
              To become India's most trusted AI-powered startup partner, enabling every entrepreneur—from metro cities to rural towns—to build, pitch and scale world-class businesses.
            </p>
          </motion.div>
          <motion.div 
            className="bg-[var(--color-light)] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
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