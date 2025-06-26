import React from 'react'
import './index.css'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-light)]">
      <header className="p-4 md:p-6 bg-[var(--color-white)] shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-[var(--color-accent)]">Hustlle</h1>
        </div>
      </header>
      
      <main>
        <HomePage />
      </main>
      
      <footer className="p-4 bg-[var(--color-dark)] text-[var(--color-white)]">
        <div className="container mx-auto">
          <p className="text-center">© 2023 Hustlle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
