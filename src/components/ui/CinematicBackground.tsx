import React, { useEffect, useState } from 'react';

const base = import.meta.env.BASE_URL || '/';
const bgImages = [
  `${base}bg-hydro-rain.png`,
  `${base}bg-neural-amber.png`,
  `${base}bg-silk-waves.png`,
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


export const CinematicBackground: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Observe all sections
  useEffect(() => {
    const sections = ['hero', 'about', 'research', 'projects', 'skills', 'journey', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id;
            const newIndex = sectionMap[sectionName] ?? 0;
            setActiveIndex(newIndex);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    // Observe all sections by element ID
    sections.forEach((sectionName) => {
      const element = document.getElementById(sectionName);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

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

  // Generate dark vignette overlay CSS for text readability while keeping background vivid
  const overlayStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(4,4,6,0.6) 0%, rgba(4,4,6,0.4) 50%, rgba(4,4,6,0.75) 100%)',
  };

  // Generate subtle noise SVG pattern for depth
  const noiseSVG = `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="black"/>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="turbulence"/>
        <feComposite in="SourceGraphic" in2="turbulence" operator="arithmetic"/>
      </filter>
      <rect width="100%" height="100%" fill="white" filter="url(#noise)"/>
    </svg>
  `;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#040406',
      }}
    >
      {/* Layer 1: All 3 backgrounds cross-fading smoothly */}
      <div
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: `url(${bgImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 0 ? 0.9 : 0,
          transform: `scale(${activeIndex === 0 ? kenBurns.scale : 1}) translate(${activeIndex === 0 ? kenBurns.translateX : 0}px, ${activeIndex === 0 ? kenBurns.translateY : 0}px)`,
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'opacity, transform',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: `url(${bgImages[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 1 ? 0.9 : 0,
          transform: `scale(${activeIndex === 1 ? kenBurns.scale : 1}) translate(${activeIndex === 1 ? kenBurns.translateX : 0}px, ${activeIndex === 1 ? kenBurns.translateY : 0}px)`,
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'opacity, transform',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: `url(${bgImages[2]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 2 ? 0.9 : 0,
          transform: `scale(${activeIndex === 2 ? kenBurns.scale : 1}) translate(${activeIndex === 2 ? kenBurns.translateX : 0}px, ${activeIndex === 2 ? kenBurns.translateY : 0}px)`,
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'opacity, transform',
        }}
      />

      {/* Layer 2: Vignette overlay for text readability */}
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
          opacity: 0.03,
        }}
      />
    </div>
  );
};

export default CinematicBackground;