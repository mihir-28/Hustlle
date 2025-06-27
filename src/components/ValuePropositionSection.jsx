import React from 'react';
import { motion } from 'framer-motion';

const ValuePropositionSection = () => {
  const values = [
    {
      title: "Localized Content",
      description: "Tailored templates and AI insights for Indian industries",
      icon: "🇮🇳"
    },
    {
      title: "Multi-lingual Support",
      description: "Reaching Tier 2/3 founders",
      icon: "🗣️"
    },
    {
      title: "Cultural Context",
      description: "AI trained on Indian market dynamics",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-28 px-4 bg-[var(--color-white)] theme-transition relative">
      {/* Abstract AI pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02] pointer-events-none">
        <div className="absolute h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[var(--color-primary)]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 5 + 1}px`,
                height: `${Math.random() * 100 + 50}px`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left side - Title and description */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-[1px] w-8 bg-[var(--color-primary)]"></div>
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-primary)]">Our Value</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-dark)]">Value Proposition</h2>
            
            <p className="text-lg text-[var(--color-gray)] leading-relaxed mb-8 font-light">
              We differentiate ourselves by providing AI tools specifically designed for the unique challenges and opportunities in the Indian startup ecosystem.
            </p>
            
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          {/* Right side - Value cards */}
          <motion.div 
            className="lg:w-3/5 grid gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, translateX: 20 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="bg-[var(--color-light)] rounded-lg p-8 hover:translate-x-2 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="bg-[var(--color-white)] w-14 h-14 rounded-lg flex items-center justify-center text-2xl shadow-sm">
                      {value.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-[var(--color-gray)]">{value.description}</p>
                      
                      <div className="mt-4 w-12 h-[1px] bg-[var(--color-primary)] opacity-50 group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 