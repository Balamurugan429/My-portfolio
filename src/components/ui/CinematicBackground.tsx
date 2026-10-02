import React from 'react';

const bgImages = [
  '/bg-hydro-rain.png',
  '/bg-neural-amber.png',
  '/bg-silk-waves.png'
];

const sectionMap: Record<string, number> = {
  about: 0,
  research: 1,
  projects: 2,
  skills: 2,
  timeline: 2,
  contact: 2,
  hero: 0,
};

export const CinematicBackground: React.FC = () => {
  const [currentBg, setCurrentBg] = React.useState(0);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const rafRef: React.MutableRefObject<number | null> = React.useRef(null);

  // Track mouse position
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate background drift/zoom loop
  React.useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.016;
      // Continuous smooth zoom & pan loop
      const scale = 1 + Math.sin(t * 0.5) * 0.02;
      const panX = Math.cos(t * 0.3) * 0.5;
      const panY = Math.sin(t * 0.37) * 0.5;

      // Apply to all background images via CSS custom properties
      const root = document.documentElement;
      root.style.setProperty('--bg-scale', scale.toString());
      root.style.setProperty('--bg-pan-x', panX.toString());
      root.style.setProperty('--bg-pan-y', panY.toString());

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Section-based background cross-fade
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY;

      let newBg = 0; // default to hydro-rain

      for (let i = 0; i < sections.length - 1; i++) {
        const sectionTop = document.getElementById(sections[i])?.offsetTop ?? 0;
        const sectionBottom = document.getElementById(sections[i + 1])?.offsetTop ?? 0;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          newBg = sectionMap[sections[i]] ?? 0;
          break;
        }
      }

      if (currentBg !== newBg) {
        setCurrentBg(newBg);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentBg]);

  // Auto-cycle backgrounds every 30 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundImage: `url(${bgImages[currentBg]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Layer 1: Animated Background Drift via CSS Variables */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'bgDrift 20s ease-in-out infinite',
          transform: `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`,
          willChange: 'transform, background-position'
        }}
        className="absolute inset-0"
      />

      {/* Layer 2: Ambient Obsidian Overlay & Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to bottom, rgba(4,4,6,0.9) 0%, rgba(4,4,6,0.65) 50%, rgba(4,4,6,0.95) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Layer 3: Section Cross-Fade handled by CSS animate below */}
      {/* The background image already changes via currentBg state above */}

      {/* Layer 4: Subtle grid pattern for depth (optional) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,245,212,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
    </div>
  );
};