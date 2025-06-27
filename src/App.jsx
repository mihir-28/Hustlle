import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import HomePage from './pages/HomePage'
import Header from './ui/Header'
import Preloader from './components/Preloader'
import { ImageProvider } from './context/ImageContext'
import ThemeProvider from './context/ThemeContext'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <ImageProvider>
        <div className="min-h-screen bg-[var(--color-light)]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <Preloader key="preloader" onLoadComplete={handleLoadComplete} />
            ) : (
              <>
                <Header />
                <main>
                  <HomePage />
                </main>
              </>
            )}
          </AnimatePresence>
        </div>
      </ImageProvider>
    </ThemeProvider>
  )
}

export default App
