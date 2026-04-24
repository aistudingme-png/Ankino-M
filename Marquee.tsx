import { ReactNode } from 'react';

interface MarqueeProps {
  setCursorType: (type: string) => void;
}

const items = [
  { text: 'Design Graphique', icon: 'design' },
  { text: 'Community Management', icon: 'social' },
  { text: 'Meta Ads', icon: 'ads' },
  { text: 'Montage Video', icon: 'video' },
  { text: 'Identite Visuelle', icon: 'brand' },
  { text: 'Voix Off', icon: 'voice' },
  { text: 'Antsirabe', icon: 'location' },
  { text: 'Madagascar', icon: 'location' },
];

const iconMap: Record<string, ReactNode> = {
  design: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2.5" /><path d="M3 3h18v18H3z" />
    </svg>
  ),
  social: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  ),
  ads: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  video: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  brand: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  voice: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export function Marquee({ setCursorType }: MarqueeProps) {
  // Double items for infinite loop
  const doubledItems = [...items, ...items];

  return (
    <div className="relative py-8 overflow-hidden border-y border-white/5">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D1B2A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D1B2A] to-transparent z-10" />

      <div className="marquee-track">
        {doubledItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-8 flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8BA08]/40 flex-shrink-0" />
            <span className="text-[#F8BA08]/60 flex-shrink-0">
              {iconMap[item.icon]}
            </span>
            <span className="text-white/20 text-sm font-semibold tracking-wider uppercase whitespace-nowrap font-montserrat">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
