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

  // Observe all sections efficiently with IntersectionObserver
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
        threshold: 0.15,
      }
    );

    sections.forEach((sectionName) => {
      const element = document.getElementById(sectionName);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

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
      {/* Background 0 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 0 ? 0.85 : 0,
          transition: 'opacity 0.6s ease-out',
          willChange: 'opacity',
        }}
      />

      {/* Background 1 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 1 ? 0.85 : 0,
          transition: 'opacity 0.6s ease-out',
          willChange: 'opacity',
        }}
      />

      {/* Background 2 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[2]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: activeIndex === 2 ? 0.85 : 0,
          transition: 'opacity 0.6s ease-out',
          willChange: 'opacity',
        }}
      />

      {/* Static Vignette Overlay */}
      <div
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(4,4,6,0.65) 0%, rgba(4,4,6,0.45) 50%, rgba(4,4,6,0.8) 100%)',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default CinematicBackground;
