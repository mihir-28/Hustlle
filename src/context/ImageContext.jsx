import React, { createContext, useState, useContext } from 'react';

// Create the context
const ImageContext = createContext();

// Custom hook to use the image context
export const useImageContext = () => useContext(ImageContext);

// Provider component
export const ImageProvider = ({ children }) => {
  // Store preloaded image objects
  const [preloadedImages, setPreloadedImages] = useState({});
  
  // Function to register a preloaded image
  const registerImage = (key, imageUrl) => {
    setPreloadedImages(prev => ({
      ...prev,
      [key]: imageUrl
    }));
  };
  
  // Function to register multiple images at once
  const registerImages = (imageMap) => {
    setPreloadedImages(prev => ({
      ...prev,
      ...imageMap
    }));
  };
  
  // Function to get a preloaded image by key
  const getImage = (key) => {
    return preloadedImages[key] || null;
  };
  
  // Context value
  const value = {
    preloadedImages,
    registerImage,
    registerImages,
    getImage,
  };
  
  return (
    <ImageContext.Provider value={value}>
      {children}
    </ImageContext.Provider>
  );
}; 