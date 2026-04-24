import { useState } from 'react';

interface ContactProps {
  setCursorType: (type: string) => void;
}

export function Contact({ setCursorType }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Adresse',
      value: 'Antsirabe, Madagascar',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: 'contact@ankinomg.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: 'Téléphone',
      value: '034 30 164 52',
      href: 'tel:+261343016452',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '034 30 164 52',
      href: 'https://wa.me/261343016452',
    },
  ];

  const services = [
    'Design Graphique',
    'Community Management',
    'Publicité en Ligne (Meta Ads)',
    'Montage Vidéo',
    'Voix Off',
    'Autre',
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1A2238] to-[#0D1B2A]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/20 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#F8BA08]/3 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#00BCD4]/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-[#F8BA08] text-xs font-semibold tracking-wider uppercase font-montserrat">Contact</span>
          </div>
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat">
            <span className="text-white">Démarrons </span>
            <span className="gradient-text">ensemble</span>
          </h2>
          <p className="reveal mt-6 text-lg text-white/50 max-w-2xl mx-auto font-dm">
            Vous avez un projet en tête ? Nous sommes impatients d'en discuter.
            Contactez-nous dès maintenant.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info: any, index) => (
                <div key={index} className="reveal-left flex items-start gap-4 group" data-cursor="hover">
                  <div className="w-12 h-12 rounded-xl bg-[#F8BA08]/10 flex items-center justify-center text-[#F8BA08] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#F8BA08]/20 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-dm">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-white font-medium font-montserrat hover:text-[#F8BA08] transition-colors duration-300">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium font-montserrat">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal-left pt-4">
              <p className="text-white/40 text-sm mb-4 font-montserrat">Suivez-nous</p>
              <div className="flex gap-3">
                {[
                  <svg key="fb" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
                  <svg key="ig" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
                  <svg key="li" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    data-cursor="hover"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/40 hover:text-[#F8BA08] hover:bg-[#F8BA08]/10 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="reveal-right glass rounded-3xl p-8 lg:p-10 space-y-6">
              {/* Success message */}
              {submitted && (
                <div className="p-4 rounded-xl bg-[#9EE6CF]/10 border border-[#9EE6CF]/20 text-[#9EE6CF] text-sm font-dm flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Message envoyé avec succès ! Nous vous répondrons très bientôt.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-white/40 text-sm mb-2 font-montserrat">Nom complet</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-cursor="text"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 font-dm text-sm focus:outline-none focus:border-[#F8BA08]/50 focus:ring-1 focus:ring-[#F8BA08]/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/40 text-sm mb-2 font-montserrat">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-cursor="text"
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 font-dm text-sm focus:outline-none focus:border-[#F8BA08]/50 focus:ring-1 focus:ring-[#F8BA08]/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-white/40 text-sm mb-2 font-montserrat">Service souhaité</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  data-cursor="hover"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-dm text-sm focus:outline-none focus:border-[#F8BA08]/50 focus:ring-1 focus:ring-[#F8BA08]/20 transition-all duration-300 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                >
                  <option value="" className="bg-[#1A2238]">Choisir un service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-[#1A2238]">{service}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/40 text-sm mb-2 font-montserrat">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-cursor="text"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 font-dm text-sm focus:outline-none focus:border-[#F8BA08]/50 focus:ring-1 focus:ring-[#F8BA08]/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-cursor="cta"
                className="btn-primary w-full flex items-center justify-center gap-2 !py-4"
              >
                Envoyer le message
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
