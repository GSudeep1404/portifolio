import React from 'react';
import {
  Compass,
  Brain,
  Code,
  Sparkles,
  Shield,
  Layers,
  Rocket
} from 'lucide-react';
import { personalData } from '../data/portfolio';

const stepIconMap = {
  Brain: Brain,
  Code: Code,
  Sparkles: Sparkles,
  Shield: Shield,
  Layers: Layers,
  Rocket: Rocket,
};

export default function LearningJourney() {
  const { learningJourney } = personalData;

  return (
    <section id="journey" className="relative py-20 lg:py-28 overflow-hidden bg-[#f5f0e6]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>GROWTH & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            My <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            From algorithmic foundations and full-stack integration to LLM defense and competitive hackathons.
          </p>
        </div>

        {/* Journey Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {learningJourney.map((step, idx) => {
            const Icon = stepIconMap[step.icon] || Brain;

            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                {/* Background watermarked step number */}
                <span className="absolute -top-3 -right-2 text-7xl font-mono font-black text-[#ede3d4] select-none pointer-events-none group-hover:text-[#e4d8c5] transition-colors">
                  {step.step}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#faf5ee] border border-[#e3d7c5] text-[#9a3412] group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#faf8f5] text-[#6e5a4d] border border-[#e8ded0]">
                      Phase {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[#695648] text-xs sm:text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#eee4d6]">
                  <div className="flex flex-wrap gap-1.5">
                    {step.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f0e8dc] border border-[#e3d7c5] text-[#4a362a]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progression Bar */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-[#ded5c5] text-center flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#786454] shadow-xs">
          <span className="text-[#2b1e17] font-bold">Algorithms</span>
          <span className="text-[#b5a392]">→</span>
          <span className="text-[#2b1e17] font-bold">Web Architectures</span>
          <span className="text-[#b5a392]">→</span>
          <span className="text-[#9a3412] font-bold">Generative AI / LLMs</span>
          <span className="text-[#b5a392]">→</span>
          <span className="text-[#2b1e17] font-bold">AI Defense & Guardrails</span>
          <span className="text-[#b5a392]">→</span>
          <span className="text-[#2b1e17] font-bold">Production Systems</span>
          <span className="text-[#b5a392]">→</span>
          <span className="text-[#15803d] font-bold">Hackathon Wins</span>
        </div>
      </div>
    </section>
  );
}
