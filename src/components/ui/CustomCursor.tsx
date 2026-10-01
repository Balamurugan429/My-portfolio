import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          background: 'radial-gradient(circle, rgba(0,245,212,0.8), rgba(123,44,191,0.4))',
        }}
      />
      
      {/* Trailing glow */}
      <div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998] mix-blend-screen transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,245,212,0.2), transparent)',
          filter: 'blur(8px)',
        }}
      />
    </>
  );
};
