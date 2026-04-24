import { useState } from 'react';

interface RealisationsProps {
  setCursorType: (type: string) => void;
}

const categories = ['Tous', 'Branding', 'Social Media', 'Publicité', 'Vidéo'];

const projects = [
  {
    title: 'Identité Visuelle - Restaurant',
    category: 'Branding',
    description: 'Création complète d\'une identité visuelle pour un restaurant gastronomique local.',
    color: '#F8BA08',
    tags: ['Logo', 'Charte graphique', 'Menus'],
    gradient: 'from-[#F8BA08]/20 to-[#FF7F00]/20',
  },
  {
    title: 'Campagne Réseaux Sociaux',
    category: 'Social Media',
    description: 'Stratégie et gestion de contenu pour une marque de cosmétiques naturels.',
    color: '#A2D9FF',
    tags: ['Instagram', 'Facebook', 'Contenu'],
    gradient: 'from-[#A2D9FF]/20 to-[#00BCD4]/20',
  },
  {
    title: 'Publicité Meta Ads',
    category: 'Publicité',
    description: 'Campagne publicitaire ciblée pour le lancement d\'un nouveau produit tech.',
    color: '#FF7F00',
    tags: ['Facebook Ads', 'Instagram Ads', 'Analytics'],
    gradient: 'from-[#FF7F00]/20 to-[#FF6F61]/20',
  },
  {
    title: 'Packaging Produit',
    category: 'Branding',
    description: 'Design d\'emballage pour une marque de café artisanal malgache.',
    color: '#D2B48C',
    tags: ['Packaging', 'Print', 'Branding'],
    gradient: 'from-[#D2B48C]/20 to-[#8D5524]/20',
  },
  {
    title: 'Vidéo Promotionnelle',
    category: 'Vidéo',
    description: 'Production vidéo corporate pour une entreprise de tourisme à Madagascar.',
    color: '#00BCD4',
    tags: ['Montage', 'Motion', 'Production'],
    gradient: 'from-[#00BCD4]/20 to-[#9EE6CF]/20',
  },
  {
    title: 'Gestion Instagram',
    category: 'Social Media',
    description: 'Animation et croissance de la communauté Instagram pour un studio de fitness.',
    color: '#9EE6CF',
    tags: ['Community', 'Stories', 'Reels'],
    gradient: 'from-[#9EE6CF]/20 to-[#A2D9FF]/20',
  },
];

export function Realisations({ setCursorType }: RealisationsProps) {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredProjects = activeFilter === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="realisations" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1B2A]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(248,186,8,0.03) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0,188,212,0.03) 0%, transparent 50%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
            </svg>
            <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">Portfolio</span>
          </div>
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat">
            <span className="text-white">Nos </span>
            <span className="gradient-text">réalisations</span>
          </h2>
          <p className="reveal mt-6 text-lg text-white/50 max-w-2xl mx-auto font-dm">
            Découvrez une sélection de nos projets les plus marquants,
            reflet de notre créativité et de notre savoir-faire.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              data-cursor="hover"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 font-montserrat ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#F8BA08] to-[#FF7F00] text-[#0D1B2A] shadow-lg shadow-[#F8BA08]/20'
                  : 'glass text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              className="group relative rounded-3xl overflow-hidden glass card-hover"
              data-cursor="hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project visual */}
              <div className={`aspect-[4/3] relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Geometric patterns */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div
                      className="absolute inset-0 rounded-2xl border-2 rotate-45 transition-transform duration-700 group-hover:rotate-[90deg]"
                      style={{ borderColor: `${project.color}40` }}
                    />
                    <div
                      className="absolute inset-4 rounded-xl border-2 -rotate-12 transition-transform duration-700 group-hover:rotate-[30deg]"
                      style={{ borderColor: `${project.color}30` }}
                    />
                    <div
                      className="absolute inset-8 rounded-lg transition-transform duration-700 group-hover:scale-125"
                      style={{ background: `${project.color}20` }}
                    />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-semibold"
                  style={{ color: project.color }}>
                  {project.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 font-montserrat group-hover:text-[color:var(--accent)] transition-colors duration-300"
                  style={{ '--accent': project.color } as React.CSSProperties}>
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-4 leading-relaxed font-dm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-white/40 font-montserrat">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
