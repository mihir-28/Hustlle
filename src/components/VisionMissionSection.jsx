import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  return (
    <section className="py-24 px-4 bg-[var(--color-white)] theme-transition relative overflow-hidden">
      {/* Abstract geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-[var(--color-primary)]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-[var(--color-tertiary)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-[0.5px] border-[var(--color-gray)] rounded-full opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="flex items-center space-x-2 mb-16 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-[1px] w-8 bg-[var(--color-primary)]"></div>
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-primary)]">Our Foundation</h2>
          <div className="h-[1px] w-8 bg-[var(--color-primary)]"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <div className="inline-block p-1.5 rounded-lg bg-[var(--color-light)]">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-tertiary)] flex items-center justify-center">
                  <span className="text-white text-xl">V</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-[var(--color-dark)]">Vision</h3>
            <p className="text-lg text-[var(--color-gray)] leading-relaxed font-light">
              To become India's most trusted AI-powered startup partner, enabling every entrepreneur—from metro cities to rural towns—to build, pitch and scale world-class businesses.
            </p>
            <motion.div 
              className="mt-8 h-1 w-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-tertiary)]"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4">
              <div className="inline-block p-1.5 rounded-lg bg-[var(--color-light)]">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[var(--color-tertiary)] to-[var(--color-primary)] flex items-center justify-center">
                  <span className="text-white text-xl">M</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-[var(--color-dark)]">Mission</h3>
            <p className="text-lg text-[var(--color-gray)] leading-relaxed font-light">
              To simplify entrepreneurship by providing intelligent, affordable, and India-centric tools. Hustlle bridges the gap between ideas and execution by making startup support accessible to all.
            </p>
            <motion.div 
              className="mt-8 h-1 w-16 bg-gradient-to-r from-[var(--color-tertiary)] to-[var(--color-primary)]"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection; 