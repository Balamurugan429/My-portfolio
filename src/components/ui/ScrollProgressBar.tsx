import React from 'react';
import { motion } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      initial={{ width: '0%' }}
      animate={{ width: [`${progress}%`, `${progress}%`] }}
      exit={{ width: '0%' }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric-cyan via-electric-accent to-electric-purple z-50 origin-left overflow-hidden"
    />
  );
};