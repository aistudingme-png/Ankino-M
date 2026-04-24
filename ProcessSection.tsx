import { useState } from 'react';

interface ProcessSectionProps {
  setCursorType: (type: string) => void;
}

const steps = [
  {
    number: '01',
    title: 'Decouverte',
    description: 'Nous ecoutons vos besoins, analysons votre marche et definissons ensemble les objectifs de votre projet digital.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    color: '#F8BA08',
  },
  {
    number: '02',
    title: 'Strategie',
    description: 'Elaboration d\'une strategie sur mesure : planning, direction artistique, choix des canaux et defintion des KPIs.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    color: '#A2D9FF',
  },
  {
    number: '03',
    title: 'Creation',
    description: 'Nos creatifs donnent vie a votre projet : maquettes, visuels, contenus et productions multimedia.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
    color: '#FF7F00',
  },
  {
    number: '04',
    title: 'Livraison',
    description: 'Validation, optimisation et livraison de vos supports. Suivi des performances et ajustements continus.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#9EE6CF',
  },
];

export function ProcessSection({ setCursorType }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1A2238] to-[#0D1B2A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/20 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF7F00]/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">Notre Processus</span>
          </div>
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat">
            <span className="text-white">Comment nous </span>
            <span className="gradient-text">travaillons</span>
          </h2>
          <p className="reveal mt-6 text-lg text-white/50 max-w-2xl mx-auto font-dm">
            Un processus clair et transparent en 4 etapes pour garantir
            la reussite de chaque projet.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal-scale group relative"
              style={{ transitionDelay: `${index * 0.15}s` }}
              data-cursor="hover"
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+32px)] right-[-calc(50%-32px)] h-[2px] z-0"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}40, ${steps[index + 1].color}40)`,
                  }}
                >
                  <div
                    className="h-full transition-all duration-700"
                    style={{
                      width: activeStep > index ? '100%' : '0%',
                      background: `linear-gradient(90deg, ${step.color}, ${steps[index + 1].color})`,
                    }}
                  />
                </div>
              )}

              <div className={`relative glass rounded-3xl p-8 text-center transition-all duration-500 ${
                activeStep === index
                  ? 'border-[color:var(--accent)] scale-[1.02] shadow-lg'
                  : 'hover:scale-[1.01]'
              }`}
                style={{
                  '--accent': step.color,
                  borderColor: activeStep === index ? `${step.color}30` : 'transparent',
                  boxShadow: activeStep === index ? `0 10px 40px ${step.color}15` : 'none',
                } as React.CSSProperties}
              >
                {/* Number */}
                <div className="absolute top-4 right-6 text-5xl font-black font-space opacity-[0.05] text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-500 ${
                    activeStep === index ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                  style={{
                    background: activeStep === index ? `${step.color}20` : `${step.color}10`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>

                {/* Step number */}
                <div className="text-xs font-bold tracking-widest uppercase mb-2 font-montserrat"
                  style={{ color: step.color }}>
                  Etape {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed font-dm">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-5 mx-auto w-12 h-1 rounded-full overflow-hidden bg-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: activeStep >= index ? '100%' : '0%',
                      background: step.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
