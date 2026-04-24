import { useEffect, useRef, useState } from 'react';
import { TextScramble } from './TextScramble';

interface HeroProps {
  setCursorType: (type: string) => void;
}

export function Hero({ setCursorType }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1A2238] to-[#0D1B2A]" />
      
      {/* Animated orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F8BA08]/5 blur-3xl animate-morph"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#00BCD4]/5 blur-3xl animate-morph"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: 'transform 0.3s ease-out',
          animationDelay: '-4s',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF7F00]/3 blur-3xl animate-morph"
        style={{
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          transition: 'transform 0.3s ease-out',
          animationDelay: '-2s',
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(248,186,8,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(248,186,8,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold">
              <span className="w-2 h-2 rounded-full bg-[#F8BA08] animate-pulse" />
              <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">
                Communication Digitale
              </span>
            </div>

            {/* Heading */}
            <h1 className="reveal text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] font-montserrat">
              <span className="text-white">Votre image,</span>
              <br />
              <TextScramble
                texts={['notre passion.', 'votre succes.', 'notre metier.', 'votre avenir.']}
                className="gradient-text"
              />
            </h1>

            {/* Subheading */}
            <p className="reveal text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed font-dm">
              Nous transformons vos idées en expériences digitales mémorables.
              Design graphique, community management et publicité en ligne
              à Antsirabe, Madagascar.
            </p>

            {/* CTAs */}
            <div className="reveal flex flex-wrap gap-4">
              <a
                href="#contact"
                data-cursor="cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Lancer votre projet
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                data-cursor="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Découvrir nos services
              </a>
            </div>

            {/* Quick info */}
            <div className="reveal flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-white/30 text-sm font-dm">
                <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Antsirabe, Madagascar
              </div>
              <div className="flex items-center gap-2 text-white/30 text-sm font-dm">
                <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                034 30 164 52
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Main card */}
              <div className="relative w-[380px] h-[480px] rounded-3xl glass border border-white/10 overflow-hidden animate-float-slow">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8BA08]/10 via-transparent to-[#00BCD4]/10" />
                
                {/* Content inside card */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <img
                      src="https://ankinomg.wordpress.com/wp-content/uploads/2024/09/ankino-mg-export-online.png"
                      alt="Ankino MG Logo"
                      className="h-12 w-auto mb-6"
                    />
                    <div className="space-y-3">
                      <div className="h-2 w-3/4 rounded-full bg-white/10" />
                      <div className="h-2 w-1/2 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Service icons grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      <svg key="design" className="w-8 h-8 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
                      <svg key="social" className="w-8 h-8 text-[#A2D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
                      <svg key="ads" className="w-8 h-8 text-[#FF7F00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                      <svg key="video" className="w-8 h-8 text-[#00BCD4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
                      <svg key="brand" className="w-8 h-8 text-[#9EE6CF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
                      <svg key="voice" className="w-8 h-8 text-[#F4A261]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" /></svg>,
                    ].map((icon, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-2xl glass flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F8BA08] to-[#FF7F00] animate-float flex items-center justify-center shadow-lg shadow-[#F8BA08]/20">
                <svg className="w-10 h-10 text-[#0D1B2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00BCD4] to-[#A2D9FF] animate-float flex items-center justify-center shadow-lg shadow-[#00BCD4]/20" style={{ animationDelay: '-3s' }}>
                <svg className="w-8 h-8 text-[#0D1B2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal">
        <span className="text-white/30 text-xs tracking-widest uppercase font-montserrat">Défiler</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#F8BA08] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
