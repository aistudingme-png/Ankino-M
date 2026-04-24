import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #F8BA08, #FF7F00, #00BCD4)',
          boxShadow: '0 0 10px rgba(248, 186, 8, 0.5), 0 0 20px rgba(248, 186, 8, 0.2)',
        }}
      />
      {/* Glow dot at the end */}
      <div
        className="absolute top-0 h-[3px] w-6 -translate-x-full"
        style={{
          left: `${progress}%`,
          background: 'radial-gradient(circle, rgba(0,188,212,0.8), transparent)',
          filter: 'blur(3px)',
          transition: 'left 150ms ease-out',
        }}
      />
    </div>
  );
}
