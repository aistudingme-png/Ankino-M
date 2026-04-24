import { useState, useEffect } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 200);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#0D1B2A] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#F8BA08]/5 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          <img
            src="https://ankinomg.wordpress.com/wp-content/uploads/2024/09/ankino-mg-export-online.png"
            alt="Ankino MG"
            className="h-16 w-auto animate-pulse"
          />
          {/* Glow */}
          <div className="absolute inset-0 bg-[#F8BA08]/10 blur-2xl rounded-full" />
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#F8BA08] to-[#FF7F00] transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2">
          <span className="text-white/40 text-xs font-montserrat tracking-widest uppercase">
            Chargement
          </span>
          <div className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-[#F8BA08] animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-1 h-1 rounded-full bg-[#F8BA08] animate-bounce" style={{ animationDelay: '0.1s' }} />
            <span className="w-1 h-1 rounded-full bg-[#F8BA08] animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
