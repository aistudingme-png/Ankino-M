interface ServicesProps {
  setCursorType: (type: string) => void;
}

const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    title: 'Design Graphique',
    description: 'Création d\'identité visuelle, logos, supports de communication print et digital. Nous donnons vie à votre marque avec un design qui marque les esprits.',
    color: '#F8BA08',
    features: ['Identité visuelle', 'Logo & charte graphique', 'Flyers & affiches', 'Packaging'],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    title: 'Community Management',
    description: 'Gestion et animation de vos réseaux sociaux. Stratégie de contenu, création de posts engageants et interaction avec votre communauté.',
    color: '#A2D9FF',
    features: ['Stratégie de contenu', 'Création de posts', 'Gestion des commentaires', 'Rapports d\'analyse'],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Publicité en Ligne',
    description: 'Campagnes Meta Ads optimisées pour maximiser votre retour sur investissement. Ciblage précis et suivi des performances en temps réel.',
    color: '#FF7F00',
    features: ['Meta Ads (Facebook & Instagram)', 'Ciblage audience', 'Optimisation ROAS', 'Reporting détaillé'],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Montage Vidéo',
    description: 'Production et montage de vidéos professionnelles pour vos réseaux sociaux, présentations d\'entreprise et contenus publicitaires.',
    color: '#00BCD4',
    features: ['Vidéos promotionnelles', 'Contenu réseaux sociaux', 'Motion design', 'Sous-titrage'],
  },
];

export function Services({ setCursorType }: ServicesProps) {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1A2238] to-[#0D1B2A]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">Nos Expertises</span>
          </div>
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat">
            <span className="text-white">Des solutions </span>
            <span className="gradient-text">sur mesure</span>
          </h2>
          <p className="reveal mt-6 text-lg text-white/50 max-w-2xl mx-auto font-dm">
            Nous offrons une gamme complète de services pour propulser votre présence digitale
            et renforcer votre image de marque.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal-scale group relative rounded-3xl glass card-hover p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-[color:var(--accent)]"
              style={{
                '--accent': service.color,
                transitionDelay: `${index * 0.1}s`,
              } as React.CSSProperties}
              data-cursor="hover"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                  boxShadow: `0 0 0 rgba(${service.color === '#F8BA08' ? '248,186,8' : service.color === '#A2D9FF' ? '162,217,255' : service.color === '#FF7F00' ? '255,127,0' : '0,188,212'}, 0)`,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 font-montserrat group-hover:text-[color:var(--accent)] transition-colors duration-300" style={{ '--accent': service.color } as React.CSSProperties}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 mb-6 leading-relaxed font-dm">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent)]"
                    style={{
                      borderColor: 'rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.4)',
                      '--accent': service.color,
                    } as React.CSSProperties}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                style={{ background: `${service.color}15`, color: service.color }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-16">
          <p className="text-white/40 mb-4 font-dm">Besoin d'un service personnalisé ?</p>
          <a
            href="#contact"
            data-cursor="cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            Parlons de votre projet
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
