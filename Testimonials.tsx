import { useState, useEffect, useRef } from 'react';

interface TestimonialsProps {
  setCursorType: (type: string) => void;
}

const testimonials = [
  {
    name: 'Rija Rakotondrazaka',
    role: 'Directeur, TechMada',
    content: 'Ankino MG a transformé notre présence digitale. Leur approche créative et leur compréhension de nos besoins ont dépassé toutes nos attentes. Un partenaire de confiance.',
    rating: 5,
  },
  {
    name: 'Hanta Rasoamanarivo',
    role: 'Fondatrice, BioNature MG',
    content: 'Le community management d\'Ankino MG a fait exploser notre engagement sur les réseaux sociaux. Notre communauté a doublé en seulement 3 mois. Exceptionnel !',
    rating: 5,
  },
  {
    name: 'Toky Andrianarivelo',
    role: 'CEO, StartupHub Antsirabe',
    content: 'Le design de notre identité visuelle est absolument remarquable. L\'équipe est réactive, professionnelle et vraiment à l\'écoute. Je recommande vivement.',
    rating: 5,
  },
  {
    name: 'Nomena Razafindrabe',
    role: 'Marketing Manager, TravelMG',
    content: 'Les campagnes Meta Ads gérées par Ankino MG ont généré un retour sur investissement exceptionnel. Leur expertise technique et créative est un vrai atout.',
    rating: 5,
  },
  {
    name: 'Fetra Ramaroson',
    role: 'Gérant, CaféArt Antsirabe',
    content: 'Du logo au packaging, Ankino MG a su capturer l\'essence de notre marque. Le résultat est fidèle à notre vision et nos clients adorent le nouveau design.',
    rating: 5,
  },
];

export function Testimonials({ setCursorType }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section id="temoignages" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1A2238] to-[#0D1B2A]" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F8BA08]/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">Témoignages</span>
          </div>
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat">
            <span className="text-white">Ce que disent </span>
            <span className="gradient-text">nos clients</span>
          </h2>
          <p className="reveal mt-6 text-lg text-white/50 max-w-2xl mx-auto font-dm">
            La satisfaction de nos clients est notre plus grande fierté.
            Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0 scale-100'
                    : index < activeIndex
                    ? 'opacity-0 -translate-y-8 scale-95'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="glass rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
                  {/* Quote decoration */}
                  <div className="absolute top-6 left-8 opacity-10">
                    <svg className="w-16 h-16 text-[#F8BA08]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1.5 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#F8BA08]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 font-dm italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div>
                    <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold font-montserrat"
                      style={{ background: 'linear-gradient(135deg, #F8BA08, #FF7F00)', color: '#0D1B2A' }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <h4 className="text-white font-bold text-lg font-montserrat">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm font-dm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                data-cursor="hover"
                className={`transition-all duration-400 rounded-full ${
                  index === activeIndex
                    ? 'w-10 h-3 bg-gradient-to-r from-[#F8BA08] to-[#FF7F00]'
                    : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => handleDotClick((activeIndex - 1 + testimonials.length) % testimonials.length)}
              data-cursor="hover"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#F8BA08] hover:border-[#F8BA08]/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleDotClick((activeIndex + 1) % testimonials.length)}
              data-cursor="hover"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#F8BA08] hover:border-[#F8BA08]/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
