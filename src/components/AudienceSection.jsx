import React from 'react';
import { motion } from 'framer-motion';

const AudienceSection = () => {
  const audiences = [
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
  ];

  return (
    <section className="py-24 px-4 theme-transition relative">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[var(--color-light)] opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column - Title and description */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="sticky top-24 space-y-6"
              initial={{ translateY: 20 }}
              whileInView={{ translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center space-x-2 mb-2">
                <div className="h-[1px] w-5 bg-[var(--color-primary)]"></div>
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-primary)]">Target Market</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)]">Who We Serve</h2>
              
              <p className="text-lg text-[var(--color-gray)] leading-relaxed font-light">
                Our platform is designed to serve diverse entrepreneurial needs across India's startup ecosystem.
              </p>
              
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent hidden lg:block"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          {/* Right column - Audience grid */}
          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {audiences.map((item, index) => (
              <motion.div 
                key={index}
                className="relative bg-[var(--color-white)] rounded-lg overflow-hidden group"
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                whileHover={{ translateY: -5 }}
              >
                {/* Subtle gradient border */}
                <div className="absolute inset-0 p-[1px] rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-transparent to-[var(--color-tertiary)] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-light)] flex items-center justify-center">
                      <span className="text-[var(--color-primary)] font-medium text-xl">{index + 1}</span>
                    </div>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-primary)] group-hover:w-24 transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-dark)]">{item.title}</h3>
                  <p className="text-[var(--color-gray)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection; 