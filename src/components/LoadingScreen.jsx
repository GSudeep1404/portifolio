import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading system architecture...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const statuses = [
      'Initializing Sudeep.dev...',
      'Mounting neural pipeline models...',
      'Configuring SentinelAI security layers...',
      'Preparing engineering showcase...',
      'System Ready.'
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 20) + 14;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      const statusIndex = Math.min(
        Math.floor((currentProgress / 100) * statuses.length),
        statuses.length - 1
      );
      setStatusText(statuses[statusIndex]);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 300);
      }
    }, 110);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf8f5] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Sleek Minimalist Monogram */}
        <div className="relative w-12 h-12 mb-6 rounded-2xl bg-white border border-[#ded5c5] flex items-center justify-center shadow-xs">
          <span className="text-base font-bold font-mono text-[#2b1e17]">GS</span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#9a3412] rounded-full" />
        </div>

        {/* Text */}
        <div className="font-mono text-xs tracking-wider uppercase text-[#5e4634] mb-2 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9a3412] animate-ping" />
          <span>{statusText}</span>
        </div>

        <div className="text-[11px] text-[#8a7667] mb-5 font-mono">
          Booting Environment • {progress}%
        </div>

        {/* Progress Bar */}
        <div className="w-56 h-1 bg-[#ede4d4] rounded-full overflow-hidden border border-[#ded5c5]">
          <div
            className="h-full bg-[#2b1e17] rounded-full transition-all duration-150 ease-out shadow-xs"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
