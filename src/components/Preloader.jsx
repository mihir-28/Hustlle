import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useImageContext } from '../context/ImageContext';

// List of images to preload - include both theme images
const imagesToPreload = [
  '/Gradients/grad3.png',  // Dark theme image
  '/Gradients/grad12.png', // Light theme image
];

// Minimum time to display the preloader (in milliseconds)
const MIN_DISPLAY_TIME = 2000;

// Total animation duration for the progress bar (in milliseconds)
const PROGRESS_ANIMATION_DURATION = 2000;

const Preloader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { registerImages } = useImageContext();
  
  // Handle the progress animation
  useEffect(() => {
    let progressInterval;
    const incrementSize = 1;
    const incrementDelay = PROGRESS_ANIMATION_DURATION / 100;
    
    // Start the progress animation
    progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        // If images are loaded, move faster to 100%
        const newProgress = prevProgress + incrementSize;
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          
          // Wait a moment at 100% before completing
          setTimeout(() => {
            if (imagesLoaded) {
              onLoadComplete();
            }
          }, 300);
          
          return 100;
        }
        
        return newProgress;
      });
    }, incrementDelay);
    
    return () => clearInterval(progressInterval);
  }, [imagesLoaded, onLoadComplete]);
  
  // Handle image loading
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;
    const loadedImages = {};
    
    // Function to preload a single image with high priority
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        // Set high fetch priority for critical images
        img.fetchPriority = "high";
        img.loading = "eager";
        
        img.onload = () => {
          loadedCount++;
          loadedImages[src] = src; // Store the loaded image URL
          resolve();
        };
        img.onerror = reject;
        
        // Start loading the image
        img.src = src;
      });
    };
    
    // Create background image elements in the DOM but hidden
    // This ensures they're in the browser cache
    const preloadInDom = (src) => {
      const imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.style.position = 'absolute';
      imgElement.style.width = '1px';
      imgElement.style.height = '1px';
      imgElement.style.opacity = '0';
      imgElement.style.pointerEvents = 'none';
      document.body.appendChild(imgElement);
      
      // Return a function to remove the element later
      return () => document.body.removeChild(imgElement);
    };
    
    // Create cleanup functions array
    const cleanupFunctions = [];
    
    // Preload all images
    const preloadAllImages = async () => {
      try {
        // Add images to DOM for immediate caching
        imagesToPreload.forEach(src => {
          cleanupFunctions.push(preloadInDom(src));
        });
        
        // Load images with promises
        await Promise.all(imagesToPreload.map(src => preloadImage(src)));
        
        // Register all preloaded images with the context
        registerImages(loadedImages);
        
        // Mark images as loaded
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        // If preloading fails, still mark as loaded after minimum time
        setTimeout(() => {
          setImagesLoaded(true);
        }, MIN_DISPLAY_TIME);
      }
    };
    
    preloadAllImages();
    
    // Cleanup function to remove the hidden images
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [registerImages]);

  // Particles animation for AI tech feel
  const particles = Array(12).fill(0);
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-light)] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid pattern for tech feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Centered content container */}
      <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto px-4 text-center">
        {/* Logo with AI glow effect */}
        <motion.div
          className="relative w-full flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold relative z-10">
            <span className="text-[var(--color-primary)]">Hustlle</span>
          </h1>
          <div className="absolute -inset-4 bg-[var(--color-primary)] opacity-10 blur-xl rounded-full"></div>
        </motion.div>
        
        {/* AI-inspired loading indicator */}
        <div className="relative w-full h-1 mb-6">
          {/* Base track */}
          <div className="absolute inset-0 bg-[var(--color-light)] rounded-full overflow-hidden border border-[var(--color-gray)] opacity-30"></div>
          
          {/* Animated progress bar */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-tertiary)] to-[var(--color-primary)] rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[var(--color-primary)] blur-md rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 0.3 }}
          />
        </div>
        
        {/* Digital counter */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            className="text-sm font-mono tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[var(--color-primary)]">{progress}</span>
            <span className="text-[var(--color-primary)]">%</span>
          </motion.div>
          
          {/* Tech loading text */}
          <motion.div 
            className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-gray)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
          >
            Powering Entrepreneurial Success
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader; 