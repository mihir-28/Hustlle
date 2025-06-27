import React, { useState, useEffect } from 'react'
import './index.css'
import HomePage from './pages/HomePage'
import Header from './ui/Header'

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
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default App
