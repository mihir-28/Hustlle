import React from 'react';
import { motion } from 'framer-motion';

const ValuePropositionSection = () => {
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
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Value Proposition
        </motion.h2>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: "Localized Content",
              description: "Tailored templates and AI insights for Indian industries"
            },
            {
              title: "Multi-lingual Support",
              description: "Reaching Tier 2/3 founders"
            },
            {
              title: "Cultural Context",
              description: "AI trained on Indian market dynamics"
            },
            // {
            //   title: "Affordable Pricing",
            //   description: "Starting at ₹499/month"
            // },
            // {
            //   title: "Investor Access",
            //   description: "50,000+ global angels, VCs, and accelerators"
            // }
          ].map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-light)] p-5 sm:p-6 rounded-xl border-l-4 border-[var(--color-secondary)] hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ translateX: 2 }}
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