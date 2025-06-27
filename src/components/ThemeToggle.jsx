import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useThemeContext();

  // Icon animation variants
  const iconVariants = {
    initial: { 
      rotate: -30,
      opacity: 0,
      scale: 0.5
    },
    animate: { 
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      rotate: 30,
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[var(--color-white)] text-[var(--color-dark)] shadow-md hover:shadow-lg transition-all overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;