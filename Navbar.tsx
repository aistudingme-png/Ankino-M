import { useState, useEffect } from 'react';

interface NavbarProps {
  setCursorType: (type: string) => void;
}

export function Navbar({ setCursorType }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['accueil', 'services', 'realisations', 'temoignages', 'apropos', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil', id: 'accueil' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#realisations', label: 'Réalisations', id: 'realisations' },
    { href: '#temoignages', label: 'Témoignages', id: 'temoignages' },
    { href: '#apropos', label: 'À propos', id: 'apropos' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark py-3 shadow-2xl shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => { e.preventDefault(); scrollToSection('#accueil'); }}
          className="flex items-center gap-3 group"
          data-cursor="hover"
        >
          <img
            src="https://ankinomg.wordpress.com/wp-content/uploads/2024/09/ankino-mg-export-online.png"
            alt="Ankino MG"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              data-cursor="hover"
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeSection === link.id
                  ? 'text-[#F8BA08]'
                  : 'text-white/70 hover:text-white'
                }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F8BA08]" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            data-cursor="cta"
            className="btn-primary ml-4 text-sm !py-2.5 !px-6"
          >
            Démarrer un projet
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          data-cursor="hover"
        >
          <div className={`w-6 flex flex-col gap-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45' : ''}`}>
            <span className={`block h-0.5 bg-[#F8BA08] transition-all duration-300 ${menuOpen ? 'translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[#F8BA08] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[#F8BA08] transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-90' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-dark transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              data-cursor="hover"
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                ${activeSection === link.id
                  ? 'text-[#F8BA08] bg-[#F8BA08]/10'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            data-cursor="cta"
            className="btn-primary text-center mt-3 text-sm !py-3"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </nav>
  );
}
