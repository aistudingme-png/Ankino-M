import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  texts: string[];
  className?: string;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?';

export function TextScramble({ texts, className = '' }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const frameRef = useRef<number>(null);
  const queueRef = useRef<number[]>([]);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const targetText = texts[currentIndex];
    const chars_count = Math.max(targetText.length, displayText.length);

    // Build queue of random frames per character
    queueRef.current = Array.from({ length: chars_count }, () =>
      Math.floor(Math.random() * 20) + 5
    );
    frameCountRef.current = 0;

    const animate = () => {
      frameCountRef.current++;
      let output = '';
      let complete = 0;

      for (let i = 0; i < chars_count; i++) {
        const frames = queueRef.current[i];
        if (frameCountRef.current > frames) {
          complete++;
          output += i < targetText.length ? targetText[i] : '';
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(output);

      if (complete < chars_count) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Wait then switch to next text
        const timer = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [currentIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-[1em] bg-[#F8BA08] ml-1 animate-pulse align-middle" />
    </span>
  );
}
