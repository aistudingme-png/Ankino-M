import { useEffect, useRef, useState } from 'react';
import { TextScramble } from './TextScramble';

interface OrbitHeroProps {
  setCursorType: (type: string) => void;
}

interface OrbitService {
  label: string;
  color: string;
  icon: React.ReactNode;
  orbit: number; // orbit ring index (0, 1, 2)
  startAngle: number; // initial angle in degrees
  speed: number; // rotation speed multiplier
}

const services: OrbitService[] = [
  {
    label: 'Design',
    color: '#F8BA08',
    orbit: 0,
    startAngle: 0,
    speed: 1,
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    label: 'Social',
    color: '#A2D9FF',
    orbit: 0,
    startAngle: 120,
    speed: 1,
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Pub',
    color: '#FF7F00',
    orbit: 0,
    startAngle: 240,
    speed: 1,
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: 'Video',
    color: '#00BCD4',
    orbit: 1,
    startAngle: 60,
    speed: -0.7,
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    label: 'Brand',
    color: '#9EE6CF',
    orbit: 1,
    startAngle: 200,
    speed: -0.7,
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: 'Voice',
    color: '#F4A261',
    orbit: 1,
    startAngle: 320,
    speed: -0.7,
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
  },
];

export function OrbitHero({ setCursorType }: OrbitHeroProps) {
  const [angle, setAngle] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 600, height: 600 });
  const heroRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(null);

  // Animate orbit rotation
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      // Slow down significantly when hovering a service
      const speedFactor = hoveredService !== null ? 0.15 : 1;
      setAngle((prev) => prev + delta * 12 * speedFactor); // ~12 deg/sec
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hoveredService]);

  // Update container size
  useEffect(() => {
    const updateSize = () => {
      if (orbitRef.current) {
        const rect = orbitRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Parallax mouse effect
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

  // Calculate orbit radii based on container
  const baseSize = Math.min(containerSize.width, containerSize.height);
  const orbitRadii = [baseSize * 0.32, baseSize * 0.46];
  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1A2238] to-[#0D1B2A]" />

      {/* Animated background orbs */}
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#F8BA08]/5 blur-3xl animate-morph"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-[#00BCD4]/5 blur-3xl animate-morph"
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
          transition: 'transform 0.4s ease-out',
          animationDelay: '-4s',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,186,8,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,186,8,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col items-center">
          {/* ───────── ORBIT SYSTEM ───────── */}
          <div
            ref={orbitRef}
            className="relative w-full max-w-[600px] aspect-square mb-8"
            style={{
              transform: `perspective(1200px) rotateX(${mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
              transition: 'transform 0.4s ease-out',
            }}
          >
            {/* Orbit rings (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
              style={{ overflow: 'visible' }}
            >
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F8BA08" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FF7F00" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#F8BA08" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8BA08" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F8BA08" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#FF7F00" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="orbitGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#A2D9FF" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#9EE6CF" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Center glow */}
              <circle cx={centerX} cy={centerY} r={baseSize * 0.18} fill="url(#centerGlow)" />

              {/* Orbit ring 1 (inner, dashed) */}
              <circle
                cx={centerX}
                cy={centerY}
                r={orbitRadii[0]}
                fill="none"
                stroke="url(#orbitGrad1)"
                strokeWidth="1"
                strokeDasharray="2 6"
                style={{
                  transformOrigin: `${centerX}px ${centerY}px`,
                  transform: `rotate(${angle * 0.3}deg)`,
                }}
              />

              {/* Orbit ring 2 (outer, dashed) */}
              <circle
                cx={centerX}
                cy={centerY}
                r={orbitRadii[1]}
                fill="none"
                stroke="url(#orbitGrad2)"
                strokeWidth="1"
                strokeDasharray="3 8"
                style={{
                  transformOrigin: `${centerX}px ${centerY}px`,
                  transform: `rotate(${-angle * 0.2}deg)`,
                }}
              />

              {/* Connection lines (when service is hovered) */}
              {hoveredService !== null && (() => {
                const service = services[hoveredService];
                const radius = orbitRadii[service.orbit];
                const currentAngle = (service.startAngle + angle * service.speed) * (Math.PI / 180);
                const x = centerX + Math.cos(currentAngle) * radius;
                const y = centerY + Math.sin(currentAngle) * radius;
                return (
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke={service.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="16" dur="0.8s" repeatCount="indefinite" />
                  </line>
                );
              })()}

              {/* Decorative orbit dots (small particles on orbits) */}
              {[0, 1].map((orbitIdx) =>
                [0, 1, 2, 3].map((i) => {
                  const dotAngle = ((i * 90 + angle * (orbitIdx === 0 ? 0.5 : -0.4)) * Math.PI) / 180;
                  const r = orbitRadii[orbitIdx];
                  return (
                    <circle
                      key={`${orbitIdx}-${i}`}
                      cx={centerX + Math.cos(dotAngle) * r}
                      cy={centerY + Math.sin(dotAngle) * r}
                      r="1.5"
                      fill={orbitIdx === 0 ? '#F8BA08' : '#00BCD4'}
                      opacity="0.5"
                    />
                  );
                })
              )}
            </svg>

            {/* ─── CENTER LOGO ─── */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                transform: `translate(-50%, -50%) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              }}
            >
              <div className="relative">
                {/* Pulsing ring around logo */}
                <div className="absolute inset-0 rounded-full border-2 border-[#F8BA08]/30 animate-ping" />
                <div className="absolute -inset-2 rounded-full border border-[#F8BA08]/20 animate-pulse" />

                {/* Glow halo */}
                <div className="absolute -inset-8 rounded-full bg-[#F8BA08]/10 blur-2xl animate-pulse-glow" />

                {/* Logo container */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#1A2238] to-[#0D1B2A] flex items-center justify-center shadow-2xl border border-[#F8BA08]/30 backdrop-blur-md">
                  <img
                    src="https://ankinomg.wordpress.com/wp-content/uploads/2024/09/ankino-mg-export-online.png"
                    alt="Ankino MG"
                    className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ─── ORBITING SERVICES ─── */}
            {services.map((service, i) => {
              const radius = orbitRadii[service.orbit];
              const currentAngle = ((service.startAngle + angle * service.speed) * Math.PI) / 180;
              const x = centerX + Math.cos(currentAngle) * radius;
              const y = centerY + Math.sin(currentAngle) * radius;
              const isHovered = hoveredService === i;
              const sizeClass = service.orbit === 0 ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-11 h-11 sm:w-12 sm:h-12';

              return (
                <div
                  key={service.label}
                  className="absolute z-10 transition-transform"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  data-cursor="hover"
                >
                  {/* Trailing glow */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-md transition-opacity duration-300"
                    style={{
                      background: service.color,
                      opacity: isHovered ? 0.4 : 0.15,
                    }}
                  />

                  {/* Icon button */}
                  <div
                    className={`relative ${sizeClass} rounded-2xl glass flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isHovered ? 'scale-125' : 'scale-100'
                    }`}
                    style={{
                      color: service.color,
                      borderColor: isHovered ? `${service.color}80` : 'rgba(255,255,255,0.1)',
                      boxShadow: isHovered
                        ? `0 0 30px ${service.color}60, 0 0 60px ${service.color}30`
                        : `0 4px 12px ${service.color}20`,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Label tooltip */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 font-montserrat pointer-events-none`}
                    style={{
                      color: service.color,
                      opacity: isHovered ? 1 : 0.5,
                      transform: `translate(-50%, ${isHovered ? '0' : '-4px'})`,
                      background: isHovered ? `${service.color}15` : 'transparent',
                      border: isHovered ? `1px solid ${service.color}30` : '1px solid transparent',
                    }}
                  >
                    {service.label}
                  </div>
                </div>
              );
            })}

            {/* Floating particles around orbit */}
            {[...Array(8)].map((_, i) => {
              const particleAngle = ((i * 45 + angle * 0.6) * Math.PI) / 180;
              const r = baseSize * 0.55;
              const px = centerX + Math.cos(particleAngle) * r;
              const py = centerY + Math.sin(particleAngle) * r;
              return (
                <div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-[#F8BA08]/40"
                  style={{
                    left: `${px}px`,
                    top: `${py}px`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 8px rgba(248, 186, 8, 0.6)',
                  }}
                />
              );
            })}
          </div>

          {/* ───────── TEXT CONTENT (BELOW ORBIT) ───────── */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold">
              <span className="w-2 h-2 rounded-full bg-[#F8BA08] animate-pulse-dot" />
              <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">
                Base a Antsirabe, Madagascar
              </span>
            </div>

            {/* Heading */}
            <h1 className="reveal text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] font-montserrat">
              <span className="text-white">Creez votre </span>
              <TextScramble
                texts={['identite', 'presence', 'image', 'marque']}
                className="gradient-text"
              />
              <br />
              <span className="text-white">digitale avec </span>
              <span className="gradient-text">Ankino MG</span>
            </h1>

            {/* Subheading */}
            <p className="reveal text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-dm">
              Equipe specialisee dans la communication digitale et la creation visuelle.
              Nous transformons vos idees en experiences memorables.
            </p>

            {/* CTAs */}
            <div className="reveal flex flex-wrap justify-center gap-4 pt-2">
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
                Decouvrir nos services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase font-montserrat">Defiler</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#F8BA08] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
