import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const linkVariants = {
    hidden: { opacity: 0 },
    visible: index => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 + (index * 0.1)
      }
    }),
    hover: {
      scale: 1.02,
      color: "var(--color-accent)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-[var(--color-dark)] theme-transition">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-[var(--color-white)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-8 items-center">
          <motion.a 
            href="mailto:info@hustlle.com" 
            className="text-lg sm:text-xl text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors"
            custom={0}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            variants={linkVariants}
          >
            📧 info@hustlle.com
          </motion.a>
          <motion.a 
            href="tel:+919099939030" 
            className="text-lg sm:text-xl text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors"
            custom={1}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            variants={linkVariants}
          >
            📱 +91-90999 39030
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 