import React, { useState, useEffect } from 'react'
import './index.css'
import HomePage from './pages/HomePage'

function App() {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <div className="min-h-screen bg-[var(--color-light)]">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <header className={`transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'mt-4 px-8 py-3 rounded-full bg-white shadow-md w-auto' 
            : 'w-full px-4 md:px-6 py-4 md:py-6 bg-transparent'
        }`}>
          <div className="container mx-auto max-w-6xl flex justify-center">
            <h1 className="text-3xl font-bold text-[var(--color-dark)]">hustlle</h1>
          </div>
        </header>
      </div>
      
      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default App
