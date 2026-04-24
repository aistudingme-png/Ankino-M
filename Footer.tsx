interface FooterProps {
  setCursorType: (type: string) => void;
}

export function Footer({ setCursorType }: FooterProps) {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1B2A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="https://ankinomg.wordpress.com/wp-content/uploads/2024/09/ankino-mg-export-online.png"
              alt="Ankino MG"
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed font-dm">
              Communication digitale et création visuelle à Antsirabe, Madagascar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 font-montserrat text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Services', href: '#services' },
                { label: 'Réalisations', href: '#realisations' },
                { label: 'Témoignages', href: '#temoignages' },
                { label: 'À propos', href: '#apropos' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    data-cursor="hover"
                    className="text-white/40 text-sm hover:text-[#F8BA08] transition-colors duration-300 font-dm hover-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 font-montserrat text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {['Design Graphique', 'Community Management', 'Meta Ads', 'Montage Vidéo', 'Voix Off'].map((service) => (
                <li key={service}>
                  <span className="text-white/40 text-sm font-dm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 font-montserrat text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/40 text-sm font-dm">Antsirabe, Madagascar</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-white/40 text-sm font-dm">contact@ankinomg.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+261343016452" className="text-white/40 text-sm font-dm hover:text-[#F8BA08] transition-colors">034 30 164 52</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F8BA08]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/261343016452" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm font-dm hover:text-[#F8BA08] transition-colors">WhatsApp : 034 30 164 52</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm font-dm">
              2024 Ankino MG. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" data-cursor="hover" className="text-white/30 text-sm hover:text-[#F8BA08] transition-colors font-dm">
                Mentions légales
              </a>
              <a href="#" data-cursor="hover" className="text-white/30 text-sm hover:text-[#F8BA08] transition-colors font-dm">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor="hover"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-[#F8BA08] hover:border-[#F8BA08]/30 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
