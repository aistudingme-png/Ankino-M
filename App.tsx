import { useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { OrbitHero } from './components/OrbitHero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { StatsCounter } from './components/StatsCounter';
import { Realisations } from './components/Realisations';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { Particles } from './components/Particles';
import { Loader } from './components/Loader';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    if (loading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  // Card mouse tracking for spotlight effect
  useEffect(() => {
    if (loading) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-hover');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`cursor-${cursorType}`}>
      <CustomCursor setCursorType={setCursorType} />
      <ScrollProgress />
      <Particles />
      <Navbar setCursorType={setCursorType} />
      <main>
        <OrbitHero setCursorType={setCursorType} />
        <Marquee setCursorType={setCursorType} />
        <Services setCursorType={setCursorType} />
        <StatsCounter setCursorType={setCursorType} />
        <Realisations setCursorType={setCursorType} />
        <ProcessSection setCursorType={setCursorType} />
        <Testimonials setCursorType={setCursorType} />
        <CTABanner setCursorType={setCursorType} />
        <About setCursorType={setCursorType} />
        <Contact setCursorType={setCursorType} />
      </main>
      <Footer setCursorType={setCursorType} />
      <WhatsAppButton />
    </div>
  );
}
