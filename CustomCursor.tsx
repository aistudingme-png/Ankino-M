import { useEffect, useRef } from 'react';

interface CustomCursorProps {
  setCursorType: (type: string) => void;
}

export function CustomCursor({ setCursorType }: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Dot follows cursor directly
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.2;

      // Ring follows with delay
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.08;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="cta"]')) {
        setCursorType('cta');
      } else if (target.closest('a, button, [data-cursor="hover"]')) {
        setCursorType('hover');
      } else if (target.closest('input, textarea, [data-cursor="text"]')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, [setCursorType]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
