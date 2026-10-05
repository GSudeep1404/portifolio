import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#faf8f5] border-t border-[#ded5c5] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#eee4d6]">
          {/* Brand info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-bold text-[#2b1e17] tracking-tight">
                {personalData.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9a3412]" />
            </div>
            <p className="text-xs sm:text-sm text-[#705c4f]">
              Building intelligent solutions with AI & technology.
            </p>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#ded5c5] text-[#5e4b3e] hover:text-[#1d140f] hover:border-[#bdafa0] transition-all hover:-translate-y-0.5 shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#ded5c5] text-[#5e4b3e] hover:text-[#1d140f] hover:border-[#bdafa0] transition-all hover:-translate-y-0.5 shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-white border border-[#ded5c5] text-[#5e4b3e] hover:text-[#1d140f] hover:border-[#bdafa0] transition-all hover:-translate-y-0.5 shadow-xs"
              aria-label="Email Sudeep"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-[#ded5c5] text-[#5e4b3e] hover:text-[#1d140f] hover:border-[#bdafa0] transition-all hover:-translate-y-0.5 shadow-xs"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#8a7667]">
          <p className="font-mono">
            © 2026 {personalData.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#695648]">
            <span>Designed & Engineered for AI Innovation</span>
            <Sparkles className="w-3 h-3 text-[#9a3412]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
