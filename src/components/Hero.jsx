import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, ChevronDown } from 'lucide-react';
import { personalData } from '../data/portfolio';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#ded5c5] shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
              </span>
              <span className="text-xs font-mono font-medium text-[#543f32]">
                {personalData.availability}
              </span>
            </div>

            {/* Greeting */}
            <h2 className="text-base sm:text-lg font-semibold text-[#735e50] mb-2 flex items-center gap-2">
              <span>Hi, I'm {personalData.preferredName}</span>
              <span className="inline-block origin-[70%_70%]">👋</span>
            </h2>

            {/* Main Large Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#2b1e17] mb-4 leading-[1.1]">
              AI & Machine Learning{' '}
              <span className="gradient-text block mt-1">Student & Developer</span>
            </h1>

            {/* Sub-headline */}
            <div className="text-xl sm:text-2xl font-bold text-[#453225] mb-5 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#9a3412] shrink-0" />
              <span>
                Building Intelligent Digital Solutions
              </span>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#5e4b3e] leading-relaxed max-w-2xl mb-8 font-normal">
              {personalData.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm w-full sm:w-auto"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resumePath}
                download="Gatamaneni_Sudeep_Resume.pdf"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-[#786454]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-5 border-t border-[#e5dcd0] w-full">
              <span className="text-xs uppercase tracking-wider text-[#8a7667] font-mono">
                Connect:
              </span>

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
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="h-4 w-px bg-[#ded5c5] mx-2" />

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#6e5a4d]">
                <Terminal className="w-3.5 h-3.5 text-[#9a3412]" />
                <span>Python • PyTorch • LLMs • React</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech AI Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#8c7767] animate-bounce pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
