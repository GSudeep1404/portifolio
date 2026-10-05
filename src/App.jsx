import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import LearningJourney from './components/LearningJourney';
import GitHubSection from './components/GitHubSection';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import CommandPalette from './components/CommandPalette';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global shortcut Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-[#2b1e17] selection:bg-[#e4d7c5] selection:text-[#241710]">
      {/* Loading Screen on initial boot */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Subtle Custom Interactive Cursor on Desktop */}
      <CustomCursor />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Textured Background Layers */}
      <div className="fixed inset-0 precision-grid pointer-events-none z-0" />
      <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

      {/* Warm ambient diffuse lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#eee4d6]/60 via-[#f6efe6]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 -left-40 w-[600px] h-[600px] bg-[#f0e5d4]/40 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-2/3 -right-40 w-[600px] h-[600px] bg-[#ecdcca]/35 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <LearningJourney />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Interactive AI Assistant */}
      <AIChat />
    </div>
  );
}
