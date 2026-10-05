import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Compass,
  Code2,
  FolderGit2,
  GraduationCap,
  Trophy,
  Mail,
  Download,
  Github,
  Linkedin,
  CornerDownLeft
} from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    {
      id: 'home',
      name: 'Home',
      category: 'Navigation',
      icon: Compass,
      action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'about',
      name: 'About Me',
      category: 'Navigation',
      icon: Compass,
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'skills',
      name: 'Skills & Tech Stack',
      category: 'Navigation',
      icon: Code2,
      action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'projects',
      name: 'Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'education',
      name: 'Education & Curriculum',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'achievements',
      name: 'Achievements & Hackathons',
      category: 'Navigation',
      icon: Trophy,
      action: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'contact',
      name: 'Contact Sudeep',
      category: 'Navigation',
      icon: Mail,
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'resume',
      name: 'Download Resume (PDF)',
      category: 'Actions',
      icon: Download,
      action: () => {
        window.open(personalData.resumePath, '_blank');
      },
    },
    {
      id: 'github',
      name: 'GitHub Profile (@GSudeep1404)',
      category: 'External Links',
      icon: Github,
      action: () => window.open(personalData.github, '_blank'),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Profile',
      category: 'External Links',
      icon: Linkedin,
      action: () => window.open(personalData.linkedin, '_blank'),
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? (filteredCommands.length || 1) - 1 : prev - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white border border-[#ded5c5] shadow-2xl shadow-[#241711]/25 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#eee4d6] bg-[#faf8f5]">
          <Search className="w-4 h-4 text-[#8a7667] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-[#2b1e17] placeholder-[#a89687] focus:outline-none font-sans"
          />
          <kbd className="px-2 py-0.5 rounded bg-white border border-[#ded5c5] text-[10px] font-mono text-[#786454]">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#8a7667] font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-[#f2ebe0] text-[#1d140f] font-medium'
                      : 'text-[#5e4b3e] hover:bg-[#faf7f2] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected
                          ? 'bg-[#2b1e17] text-white'
                          : 'bg-[#faf8f5] border border-[#ded5c5] text-[#5e4b3e]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#2b1e17]">{cmd.name}</div>
                      <div className="text-[10px] text-[#8a7667] font-mono">
                        {cmd.category}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-[#5e4634]" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="px-4 py-2.5 bg-[#faf8f5] border-t border-[#eee4d6] flex items-center justify-between text-[11px] font-mono text-[#8a7667]">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span className="text-[#5e4634]">Sudeep.dev</span>
        </div>
      </div>
    </div>
  );
}
