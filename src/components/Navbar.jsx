import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Navbar({ onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#faf8f5]/90 backdrop-blur-xl border-b border-[#e7ded2] shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Editorial Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Sudeep Portfolio Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-white border border-[#ded5c5] flex items-center justify-center transition-all duration-200 group-hover:border-[#9c8470] shadow-xs">
              <span className="text-[#2b1e17] font-mono font-bold text-sm tracking-tight">
                GS
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#9a3412] rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#2b1e17] group-hover:text-[#5e4634] transition-colors">
                {personalData.name}
              </span>
              <span className="text-[11px] text-[#78695d] font-mono tracking-tight -mt-0.5 hidden sm:inline">
                AI & Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e7ded2] backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#1d140f] bg-[#f2ebe0] shadow-xs font-semibold'
                      : 'text-[#6b594d] hover:text-[#1d140f] hover:bg-[#f6f1e8]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[#5e4634] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-[#ded5c5] text-[#6b594d] hover:text-[#1d140f] hover:border-[#bdafa0] text-xs transition-colors shadow-xs"
              title="Open command palette (Ctrl + K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e5d9c2]" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-white border border-[#ded5c5] text-[#5e4634]"
              aria-label="Command palette"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#ded5c5] text-[#5e4634] hover:text-[#2b1e17] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#9a3412]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-white border border-[#e7ded2] backdrop-blur-xl shadow-xl animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#f2ebe0] text-[#1d140f] font-semibold'
                      : 'text-[#6b594d] hover:bg-[#faf7f2] hover:text-[#1d140f]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#5e4634]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#e7ded2] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary w-full py-2.5 rounded-xl text-center text-sm font-semibold"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
