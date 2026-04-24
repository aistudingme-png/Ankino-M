interface AboutProps {
  setCursorType: (type: string) => void;
}

const values = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque projet, en portant une attention particulière aux détails.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Collaboration',
    description: 'Nous travaillons en étroite collaboration avec nos clients pour des résultats optimaux.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'Nous restons à la pointe des tendances digitales pour offrir des solutions innovantes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Ponctualité',
    description: 'Le respect des délais est au coeur de notre engagement envers nos clients.',
  },
];

const team = [
  {
    name: 'Design',
    description: 'Créateurs visuels passionnés',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17.5 10.5c0 0-1-1.5-4-1.5s-4 1.5-4 1.5" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 15l3-3 2 2 3-3 2 2" />
      </svg>
    ),
  },
  {
    name: 'Stratégie',
    description: 'Stratèges digitaux experts',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Production',
    description: 'Techniciens multimédia',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
];

export function About({ setCursorType }: AboutProps) {
  return (
    <section id="apropos" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1B2A]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(248,186,8,0.04) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(0,188,212,0.04) 0%, transparent 50%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">Qui sommes-nous</span>
          </div>
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat">
            <span className="text-white">L'équipe derrière </span>
            <span className="gradient-text">votre succès</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Text */}
          <div className="space-y-6">
            <h3 className="reveal text-3xl font-bold text-white font-montserrat">
              Votre partenaire digital à
              <span className="gradient-text"> Antsirabe</span>
            </h3>
            <p className="reveal text-lg text-white/50 leading-relaxed font-dm">
              Ankino MG est une équipe passionnée basée à Antsirabe, Madagascar,
              spécialisée dans la communication digitale et la création visuelle.
            </p>
            <p className="reveal text-lg text-white/50 leading-relaxed font-dm">
              Nous accompagnons les entreprises dans le développement de leur image
              et de leur présence en ligne, avec une approche centrée sur le client
              et des solutions personnalisées adaptées à chaque besoin.
            </p>
            <div className="reveal flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8BA08]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm font-dm">Antsirabe, Madagascar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8BA08]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm font-dm">5+ ans d'expérience</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="reveal-right relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated background shape */}
              <div className="absolute inset-0 animate-morph bg-gradient-to-br from-[#F8BA08]/10 to-[#FF7F00]/10" />
              
              {/* Team cards */}
              <div className="absolute inset-8 flex flex-col gap-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl glass card-hover group"
                    data-cursor="hover"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F8BA08]/10 to-[#FF7F00]/10 flex items-center justify-center text-[#F8BA08] group-hover:scale-110 transition-transform duration-300">
                      {member.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-montserrat">{member.name}</h4>
                      <p className="text-white/40 text-sm font-dm">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#F8BA08]/10 animate-float blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#00BCD4]/10 animate-float blur-xl" style={{ animationDelay: '-3s' }} />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="reveal-scale text-center p-8 rounded-3xl glass card-hover group"
              data-cursor="hover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl mx-auto mb-5 bg-gradient-to-br from-[#F8BA08]/10 to-[#FF7F00]/10 flex items-center justify-center text-[#F8BA08] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#F8BA08]/10 transition-all duration-500">
                {value.icon}
              </div>
              <h4 className="text-white font-bold mb-2 font-montserrat group-hover:text-[#F8BA08] transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed font-dm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
