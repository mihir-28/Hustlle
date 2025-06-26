import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const memberVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 theme-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            "Punit Mehta",
            "Sumit Mehta",
            "Virag Bora",
            "Dharmit Shah",
            "Ankit Dhandharia"
          ].map((member, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={memberVariants}
              whileHover={{ translateY: -2 }}
            >
              <motion.div 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[var(--color-light)] mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                variants={avatarVariants}
                whileHover="hover"
              >
                {/* Placeholder for team member photo */}
                <span className="text-xl sm:text-2xl text-[var(--color-accent)] font-bold">
                  {member.split(' ').map(name => name[0]).join('')}
                </span>
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-dark)]">{member}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 