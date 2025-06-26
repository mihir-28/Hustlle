import React from 'react';
import { motion } from 'framer-motion';

const MarketSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-[var(--color-light)] theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Market Snapshot
        </motion.h2>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            "61,400+ recognized startups in India",
            "63 million MSMEs contributing ~30% of India's GDP",
            "$24B startup funding in 2022",
            "Rising demand for business documentation and digital transformation",
            "Supportive government programs: Startup India, Make in India"
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-white)] p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ translateY: -2 }}
            >
              <p className="text-base sm:text-lg text-[var(--color-dark)]">{stat}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection; 