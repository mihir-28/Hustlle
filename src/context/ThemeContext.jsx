import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useThemeContext = () => useContext(ThemeContext);

// Preload images function
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload theme images on initial load
  useEffect(() => {
    const preloadThemeImages = async () => {
      try {
        // Preload both theme images
        await Promise.all([
          preloadImage('/Gradients/grad3.png'),
          preloadImage('/Gradients/grad12.png')
        ]);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading theme images:', error);
        // Still mark as preloaded even if there's an error
        setImagesPreloaded(true);
      }
    };
    
    preloadThemeImages();
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme with smooth transition
  const toggleTheme = async () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Create and animate the overlay
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    document.body.appendChild(overlay);
    
    // Trigger a reflow to ensure the animation works
    void overlay.offsetWidth;
    
    // Add the active class to start the animation
    overlay.classList.add('active');
    
    // Make sure both theme images are preloaded
    if (!imagesPreloaded) {
      try {
        await Promise.all([
          preloadImage('/Gradients/grad3.png'),
          preloadImage('/Gradients/grad12.png')
        ]);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading theme images during toggle:', error);
      }
    }
    
    // Wait for a short delay before changing the theme
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
      
      // Fade out the overlay
      setTimeout(() => {
        overlay.classList.remove('active');
        
        // Remove the overlay after the transition
        setTimeout(() => {
          document.body.removeChild(overlay);
          setIsTransitioning(false);
        }, 700);
      }, 300);
    }, 100);
  };

  // Check if dark mode is active
  const isDarkMode = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 