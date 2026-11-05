import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    // Check if device is low-power or mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // Native smooth scroll is much faster on mobile devices

    const lenis = new Lenis({
      duration: 0.8, // Snappier response (down from 1.2s lag)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};
