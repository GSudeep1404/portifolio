import React from 'react';
import { GraduationCap, Cpu, Sparkles, Target, BookOpen, CheckCircle, Code, Shield } from 'lucide-react';
import { personalData } from '../data/portfolio';

const iconMap = {
  GraduationCap: GraduationCap,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Target: Target,
};

export default function About() {
  const { about } = personalData;

  const coreInterests = [
    { name: 'Artificial Intelligence', icon: Sparkles },
    { name: 'Machine Learning', icon: Cpu },
    { name: 'Generative AI', icon: Sparkles },
    { name: 'Large Language Models', icon: Code },
    { name: 'Web Development', icon: Code },
    { name: 'Cybersecurity for AI', icon: Shield },
    { name: 'Software Development', icon: Code },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            {about.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio narrative & Interests */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 text-[#4a3528] leading-relaxed text-base">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="font-normal text-[#574438]">
                  {p}
                </p>
              ))}

              {/* Core Interests chips */}
              <div className="pt-5 border-t border-[#eee4d6]">
                <h3 className="text-xs uppercase font-mono tracking-wider text-[#7a6454] font-semibold mb-3">
                  Core Technical Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreInterests.map((interest, i) => {
                    const IconComponent = interest.icon;
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf7f2] border border-[#e5dcce] text-xs font-medium text-[#4a3528] hover:border-[#bdafa0] transition-colors"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-[#9a3412]" />
                        {interest.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Currently Learning Section */}
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9a3412] animate-ping" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#3d2c22] font-mono">
                    Currently Deep-Diving Into
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#8a7667]">Continuous Upskilling</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {about.currentlyLearning.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf7f2] border border-[#e5dcce] text-xs font-medium text-[#4a3528] hover:border-[#bdafa0] transition-all cursor-default"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#15803d]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 4 Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {about.infoCards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Cpu;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 hover:border-[#bdafa0] transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-[#faf5ee] border border-[#e3d7c5] text-[#9a3412] group-hover:scale-105 group-hover:bg-[#f2ece2] transition-all shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8a7667]">
                      {card.label}
                    </span>
                    <h4 className="text-base font-bold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors">
                      {card.value}
                    </h4>
                    <p className="text-xs text-[#705c4f]">
                      {card.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
