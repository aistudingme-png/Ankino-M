interface CTABannerProps {
  setCursorType: (type: string) => void;
}

export function CTABanner({ setCursorType }: CTABannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient" style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1A2238 25%, #212E44 50%, #1A2238 75%, #0D1B2A 100%)',
        backgroundSize: '400% 400%',
      }} />

      {/* Gold accent orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#F8BA08]/5 blur-3xl animate-morph" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-[#FF7F00]/5 blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />

      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8BA08]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          {/* Decorative icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F8BA08]/10 mb-8 animate-pulse-glow">
            <svg className="w-8 h-8 text-[#F8BA08]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat mb-6">
            <span className="text-white">Pret a propulser </span>
            <span className="gradient-text">votre marque ?</span>
          </h2>

          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto font-dm leading-relaxed">
            Chaque grand projet commence par une conversation. Contactez-nous
            aujourd'hui et donnons vie a votre vision digitale ensemble.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              data-cursor="cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center gap-2 text-lg !px-10 !py-4"
            >
              Demarrer maintenant
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/261343016452?text=Bonjour%20Ankino%20MG%20!%20Je%20souhaite%20discuter%20d%27un%20projet."
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="btn-secondary inline-flex items-center gap-2 text-lg !px-10 !py-4 !border-[#25D366]/40 !text-[#25D366] hover:!bg-[#25D366]/10 hover:!border-[#25D366]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
