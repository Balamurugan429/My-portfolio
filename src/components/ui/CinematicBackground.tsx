import React, { useEffect, useState, useRef } from 'react';

const bgImages = [
  '/bg-hydro-rain.png',
  '/bg-neural-amber.png',
  '/bg-silk-waves.png',
];

const sectionMap: Record<string, number> = {
  hero: 0,
  about: 0,
  research: 1,
  projects: 2,
  skills: 2,
  journey: 0,
  contact: 0,
};

const transitionClass = 'transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]';

export const CinematicBackground: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Section reference for IntersectionObserver
  const sectionRefs = useRef<Map<string, Element | null>>(new Map());

  // Observe all sections
  useEffect(() => {
    const sections = ['hero', 'about', 'research', 'projects', 'skills', 'journey', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        let newestIndex = 0;

        entries.forEach((entry, index) => {
          const sectionName = sections[index];
          if (entry.isIntersecting) {
            newestIndex = sectionMap[sectionName] ?? 0;
          }
        });

        if (newestIndex !== activeIndex) {
          setActiveIndex(newestIndex);
        }
      },
      {
        rootMargin: '-20% 0%',
      }
    );

    // Observe all sections
    sections.forEach((sectionName) => {
      const element = sectionRefs.current.get(sectionName);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  // Ken Burns effect animation
  const [kenBurns, setKenBurns] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
  });

  // Continuous Ken Burns animation loop
  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.016;
      setKenBurns({
        scale: 1 + Math.sin(t * 0.3) * 0.02,
        translateX: Math.cos(t * 0.5) * 1,
        translateY: Math.sin(t * 0.7) * 1,
      });
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => {};
  }, []);

  // Generate overlay gradient CSS
  const overlayStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(4,4,6,0.9) 0%, rgba(4,4,6,0.6) 50%, rgba(4,4,6,0.95) 100%)',
  };

  // Generate noise SVG pattern
  const noiseSVG = `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="black"/>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="4" result="turbulence"/>
        <feComposite in="SourceGraphic" in2="turbulence" operator="arithmetic"/>
      </filter>
      <rect width="100%" height="100%" fill="white" filter="url(#noise)"/>
    </svg>
  `;

  // Map active index to background image
  const bgImage = bgImages[activeIndex];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Layer 1: All 3 backgrounds cross-fading */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 0 ? 1 : 0,
          scale: activeIndex === 0 ? 1.05 : 1,
          transition: transitionClass,
          willChange: 'opacity, transform',
        }}
        className="absolute inset-0"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 1 ? 1 : 0,
          scale: activeIndex === 1 ? 1.05 : 1,
          transition: transitionClass,
          willChange: 'opacity, transform',
        }}
        className="absolute inset-0"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[2]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 2 ? 1 : 0,
          scale: activeIndex === 2 ? 1.05 : 1,
          transition: transitionClass,
          willChange: 'opacity, transform',
        }}
        className="absolute inset-0"
      />

      {/* Layer 2: Dark vignette overlay for text readability */}
      <div
        style={{
          ...overlayStyle,
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Layer 3: Ken Burns effect subtlety */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'transparent',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 2,
          transform: `scale(${kenBurns.scale}) translate(${kenBurns.translateX}px, ${kenBurns.translateY}px)`,
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Layer 4: Subtle noise texture for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml;base64,' + btoa(noiseSVG) + '")',
          pointerEvents: 'none',
          zIndex: 3,
          opacity: 0.02,
        }}
      />
    </div>
  );
};

export default CinematicBackground;