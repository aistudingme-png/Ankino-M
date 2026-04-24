import { useEffect, useRef, useState } from 'react';

interface StatsCounterProps {
  setCursorType: (type: string) => void;
}

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Projets livres',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#F8BA08',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfaction client',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    color: '#FF7F00',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Annees d\'experience',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: '#A2D9FF',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Clients satisfaits',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: '#00BCD4',
  },
];

function useCountUp(end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, trigger]);

  return count;
}

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="reveal-scale text-center p-8 rounded-3xl glass card-hover group relative overflow-hidden"
      data-cursor="hover"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${stat.color}08, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
        style={{ background: `${stat.color}15`, color: stat.color }}
      >
        {stat.icon}
      </div>

      {/* Counter */}
      <div className="text-5xl font-black font-space mb-2" style={{ color: stat.color }}>
        {isVisible ? count : 0}
        <span className="text-3xl">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-white/40 text-sm font-medium tracking-wide uppercase font-montserrat">
        {stat.label}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
      />
    </div>
  );
}

export function StatsCounter({ setCursorType }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1B2A]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(248,186,8,0.04) 0%, transparent 60%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
