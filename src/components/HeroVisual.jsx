import React, { useState } from 'react';
import { ShieldCheck, Cpu, Terminal, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('guard');

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center select-none">
      {/* Background warm ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ede0ce]/60 via-[#f4ebe0]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint SVG Traces in Warm Sepia */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sepiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c5f47" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b38c73" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer technical rings */}
        <circle cx="250" cy="250" r="220" stroke="#7c5f47" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
        <circle cx="250" cy="250" r="170" stroke="#b38c73" strokeWidth="1" opacity="0.3" />
        <circle cx="250" cy="250" r="120" stroke="#7c5f47" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />

        {/* Blueprint traces */}
        <path d="M 60 140 L 150 140 L 190 180" stroke="url(#sepiaGrad)" strokeWidth="1.2" fill="none" />
        <path d="M 440 130 L 350 130 L 310 170" stroke="url(#sepiaGrad)" strokeWidth="1.2" fill="none" />
        <path d="M 80 390 L 160 390 L 210 340" stroke="url(#sepiaGrad)" strokeWidth="1.2" fill="none" />
        <path d="M 420 370 L 330 370 L 290 330" stroke="url(#sepiaGrad)" strokeWidth="1.2" fill="none" />

        {/* Neural Network Nodes */}
        <circle cx="130" cy="190" r="3.5" fill="#8c7562" />
        <circle cx="130" cy="250" r="3.5" fill="#8c7562" />
        <circle cx="130" cy="310" r="3.5" fill="#8c7562" />
        <circle cx="210" cy="160" r="4" fill="#644232" />
        <circle cx="210" cy="225" r="4" fill="#644232" />
        <circle cx="210" cy="285" r="4" fill="#644232" />
        <circle cx="210" cy="345" r="4" fill="#644232" />

        {/* Synapse connections */}
        <line x1="130" y1="190" x2="210" y2="160" stroke="#a38c79" strokeWidth="1" opacity="0.4" />
        <line x1="130" y1="190" x2="210" y2="225" stroke="#a38c79" strokeWidth="1" opacity="0.4" />
        <line x1="130" y1="250" x2="210" y2="225" stroke="#7c5f47" strokeWidth="1.2" opacity="0.6" />
        <line x1="130" y1="250" x2="210" y2="285" stroke="#a38c79" strokeWidth="1" opacity="0.4" />
        <line x1="130" y1="310" x2="210" y2="285" stroke="#a38c79" strokeWidth="1" opacity="0.4" />
        <line x1="130" y1="310" x2="210" y2="345" stroke="#7c5f47" strokeWidth="1.2" opacity="0.6" />

        {/* Output Node */}
        <line x1="210" y1="225" x2="310" y2="250" stroke="url(#sepiaGrad)" strokeWidth="1.5" />
        <line x1="210" y1="285" x2="310" y2="250" stroke="url(#sepiaGrad)" strokeWidth="1.5" />
        <circle cx="310" cy="250" r="6" fill="#4a3528" />
        <circle cx="310" cy="250" r="12" stroke="#644232" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" />
      </svg>

      {/* Main Luxury Ivory & Espresso Terminal Console */}
      <div className="relative z-10 w-[92%] sm:w-[88%] rounded-3xl bg-white border border-[#ded5c5] shadow-2xl shadow-[#3b2b20]/10 p-5 sm:p-6 transition-all duration-500 hover:border-[#bfa78f]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#eee4d6]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d0c2b2]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#d0c2b2]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#d0c2b2]" />
            <div className="flex items-center gap-1.5 ml-2.5 px-2.5 py-0.5 rounded-md bg-[#faf7f2] border border-[#e8ded2] text-[11px] font-mono text-[#543f32]">
              <Terminal className="w-3 h-3 text-[#9a3412]" />
              <span>telemetry://sudeep-core</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#15803d] bg-[#f0fdf4] px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
            <span>OPERATIONAL</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 mb-3.5 bg-[#faf8f5] p-1 rounded-xl border border-[#e8ded0]">
          <button
            onClick={() => setActiveTab('guard')}
            className={`flex-1 py-1 px-2.5 rounded-lg text-[11px] font-mono transition-all ${
              activeTab === 'guard'
                ? 'bg-white text-[#241711] font-semibold shadow-xs border border-[#ded4c3]'
                : 'text-[#7a685b] hover:text-[#241711]'
            }`}
          >
            SentinelAI.py
          </button>
          <button
            onClick={() => setActiveTab('medassist')}
            className={`flex-1 py-1 px-2.5 rounded-lg text-[11px] font-mono transition-all ${
              activeTab === 'medassist'
                ? 'bg-white text-[#241711] font-semibold shadow-xs border border-[#ded4c3]'
                : 'text-[#7a685b] hover:text-[#241711]'
            }`}
          >
            MedAssist.py
          </button>
          <button
            onClick={() => setActiveTab('agripulse')}
            className={`flex-1 py-1 px-2.5 rounded-lg text-[11px] font-mono transition-all ${
              activeTab === 'agripulse'
                ? 'bg-white text-[#241711] font-semibold shadow-xs border border-[#ded4c3]'
                : 'text-[#7a685b] hover:text-[#241711]'
            }`}
          >
            AgriPulse.py
          </button>
        </div>

        {/* Deep Roast Espresso Terminal Screen (Rich Contrast against Cream) */}
        <div className="p-3.5 rounded-2xl bg-[#1f1612] border border-[#3b2a20] font-mono text-xs text-[#eedecf] space-y-1.5 overflow-hidden shadow-inner">
          {activeTab === 'guard' && (
            <>
              <div className="text-[#8c7462]">// SentinelAI Real-time Threat Inspector</div>
              <div className="text-[#e2a87b]">import <span className="text-[#f7eedf]">{'{ SentinelGateway, PolicyGuard }'}</span> from <span className="text-[#98c379]">'@sentinel/core'</span>;</div>
              <div className="text-[#eedecf]">const gateway = new <span className="text-[#e5c07b]">SentinelGateway</span>({'{ strictMode: true }'});</div>
              <div className="text-[#8c7462]">// Intercepting prompt stream</div>
              <div className="text-[#eedecf]">const inspection = await gateway.<span className="text-[#e2a87b]">evaluate</span>(userPrompt);</div>
              <div className="flex items-center gap-1.5 text-[#86efac] pt-1.5 border-t border-[#3b2a20]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#86efac] shrink-0" />
                <span className="truncate">Threat Score: 0.00 • Clean Pass-Through</span>
              </div>
            </>
          )}

          {activeTab === 'medassist' && (
            <>
              <div className="text-[#8c7462]">// MedAssist Clinical OCR & Summarizer</div>
              <div className="text-[#e2a87b]">import <span className="text-[#f7eedf]">{'{ LabParser, GroundedRAG }'}</span> from <span className="text-[#98c379]">'@medassist/engine'</span>;</div>
              <div className="text-[#eedecf]">const vitals = await <span className="text-[#e5c07b]">LabParser</span>.extractMetrics(reportBuffer);</div>
              <div className="text-[#8c7462]">// Medical knowledge retrieval validation</div>
              <div className="text-[#eedecf]">const summary = await <span className="text-[#e2a87b]">GroundedRAG</span>.explain(vitals);</div>
              <div className="flex items-center gap-1.5 text-[#fcd34d] pt-1.5 border-t border-[#3b2a20]">
                <Sparkles className="w-3.5 h-3.5 text-[#fcd34d] shrink-0" />
                <span className="truncate">Biomarkers parsed • Grounding verified</span>
              </div>
            </>
          )}

          {activeTab === 'agripulse' && (
            <>
              <div className="text-[#8c7462]">// AgriPulse Decision Support Pipeline</div>
              <div className="text-[#e2a87b]">import <span className="text-[#f7eedf]">{'{ SoilClassifier, WeatherFeed }'}</span> from <span className="text-[#98c379]">'@agripulse/ai'</span>;</div>
              <div className="text-[#eedecf]">const advisory = await <span className="text-[#e5c07b]">SoilClassifier</span>.computeLifecycle(sensorData);</div>
              <div className="text-[#8c7462]">// MSME Idea Hackathon 6.0 Engine</div>
              <div className="text-[#eedecf]">const irrigation = advisory.<span className="text-[#e2a87b]">getIrrigationTrigger</span>();</div>
              <div className="flex items-center gap-1.5 text-[#86efac] pt-1.5 border-t border-[#3b2a20]">
                <Activity className="w-3.5 h-3.5 text-[#86efac] shrink-0" />
                <span className="truncate">Advisory generated: Drip cycle planned</span>
              </div>
            </>
          )}
        </div>

        {/* Telemetry Metrics Bar */}
        <div className="grid grid-cols-3 gap-2.5 mt-3.5 text-center">
          <div className="p-2 rounded-xl bg-[#faf8f5] border border-[#e8ded0]">
            <div className="text-[10px] text-[#7a685b] uppercase font-mono tracking-wider">Gateway Latency</div>
            <div className="text-xs font-bold text-[#2b1e17] font-mono mt-0.5">14ms</div>
          </div>
          <div className="p-2 rounded-xl bg-[#faf8f5] border border-[#e8ded0]">
            <div className="text-[10px] text-[#7a685b] uppercase font-mono tracking-wider">Defense Score</div>
            <div className="text-xs font-bold text-[#9a3412] font-mono mt-0.5">99.8%</div>
          </div>
          <div className="p-2 rounded-xl bg-[#faf8f5] border border-[#e8ded0]">
            <div className="text-[10px] text-[#7a685b] uppercase font-mono tracking-wider">Architecture</div>
            <div className="text-xs font-bold text-[#2b1e17] font-mono mt-0.5">PyTorch / TF</div>
          </div>
        </div>
      </div>

      {/* Floating Precision Tag 1: Top-Right */}
      <div className="absolute -top-3 -right-2 sm:-right-3 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-[#ded5c5] shadow-lg shadow-[#3b2b20]/8 animate-float-gentle">
        <div className="w-7 h-7 rounded-lg bg-[#faf5ee] border border-[#e3d7c5] flex items-center justify-center text-[#9a3412]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-mono text-[#8c6b52] font-semibold uppercase">SentinelAI</div>
          <div className="text-xs text-[#2b1e17] font-medium">LLM Gateway Shield</div>
        </div>
      </div>

      {/* Floating Precision Tag 2: Bottom-Left */}
      <div className="absolute -bottom-3 -left-2 sm:-left-3 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-[#ded5c5] shadow-lg shadow-[#3b2b20]/8 animate-float-gentle-reverse">
        <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#15803d]">
          <Cpu className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-mono text-[#15803d] font-semibold uppercase">MSME Hackathon 6.0</div>
          <div className="text-xs text-[#2b1e17] font-medium">AgriPulse Platform</div>
        </div>
      </div>
    </div>
  );
}
