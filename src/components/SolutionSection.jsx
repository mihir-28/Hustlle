import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
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
    <section className="py-16 sm:py-20 px-4 bg-[var(--color-white)] theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Our Solution
        </motion.h2>
        <motion.p 
          className="text-base sm:text-xl mb-8 sm:mb-12 text-center text-[var(--color-gray)] max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A fully integrated AI-powered platform that offers:
        </motion.p>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: "Business Plan & Pitch Deck Generation",
              description: "Structured documents with industry-aligned templates"
            },
            {
              title: "Financial Modelling & Forecasting",
              description: "Dashboards and scenario analysis tools"
            },
            {
              title: "Investor Connect",
              description: "Smart matchmaking and outreach tools"
            },
            {
              title: "Professional Guidance & Services",
              description: "Verified expert access through integrated networks"
            },
            {
              title: "Unified Dashboard",
              description: "Real-time analytics, investor tracking, and document access—all in one place"
            }
          ].map((solution, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-light)] p-6 sm:p-8 rounded-xl hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ translateY: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)" }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--color-dark)]">{solution.title}</h3>
              <p className="text-[var(--color-gray)]">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection; 