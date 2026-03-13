import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeuralLattice } from './NeuralLattice';
import { AITerminal } from './AITerminal';
import { DataTopography } from './DataTopography';
import { TechUpLogo } from './TechUpLogo';

const VISUALS = [
  <NeuralLattice key="lattice" />,
  <AITerminal key="terminal" />,
  <DataTopography key="topography" />,
  <TechUpLogo key="techuplogo" />,
];

export function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VISUALS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const variants = {
    initial: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      opacity: 0,
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
      transition: { duration: 0.3, ease: 'linear' as const },
    },
    exit: {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      opacity: 0,
      transition: { duration: 0.2, ease: 'linear' as const },
    },
  };

  return (
    <div className="relative w-full max-w-[400px] h-[300px] sm:h-[350px] border-4 border-border-dark bg-bg-surface overflow-hidden shadow-brutal flex items-center justify-center">
      <div className="absolute top-0 right-0 p-1 sm:p-2 z-50 flex space-x-2 bg-border-dark text-accent-ice font-bold text-[10px] tracking-widest border-b-2 border-l-2 border-bg-base">
        <span>SEQ_{String(currentIndex + 1).padStart(2, '0')}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {VISUALS[currentIndex]}
        </motion.div>
      </AnimatePresence>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay opacity-30 z-40" />
    </div>
  );
}