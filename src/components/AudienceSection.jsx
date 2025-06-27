import React from 'react';
import { motion } from 'framer-motion';

const AudienceSection = () => {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Who We Serve
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: "Stage",
              description: "Idea-stage, early-stage, growth-stage startups and SMEs"
            },
            {
              title: "Location",
              description: "Tier 1, Tier 2/3 cities, and rural India"
            },
            {
              title: "Audience",
              description: "Founders, student entrepreneurs, consultants, incubators"
            },
            {
              title: "Needs",
              description: "Planning, funding, and professional connect services"
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--color-white)] p-5 sm:p-6 rounded-xl text-center hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ translateY: -3 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[var(--color-tertiary)] mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                variants={iconVariants}
              >
                <span className="text-xl sm:text-2xl text-[var(--color-white)] font-bold">
                  {index + 1}
                </span>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[var(--color-dark)]">{item.title}</h3>
              <p className="text-sm sm:text-base text-[var(--color-gray)]">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection; 