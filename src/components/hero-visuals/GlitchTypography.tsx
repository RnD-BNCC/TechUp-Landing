import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const WORDS = ["[ NEURAL ]", "[ LOGIC ]", "[ SYSTEM ]", "[ SYNAPSE ]"];

export function GlitchTypography() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % WORDS.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden relative">
      <div className="relative text-7xl sm:text-9xl font-black italic tracking-tighter uppercase text-center flex flex-col items-center justify-center space-y-4">

        <motion.div
          key={currentWord + "-shadow"}
          className="absolute inset-0 text-accent-blue opacity-50 select-none mix-blend-screen"
          initial={{ x: -20, y: 10, clipPath: 'inset(10% 0 80% 0)' }}
          animate={{ x: [20, -10, 5, 0], y: [-5, 15, -10, 0], clipPath: ['inset(20% 0 60% 0)', 'inset(80% 0 10% 0)', 'inset(50% 0 50% 0)', 'inset(0% 0 0% 0)'] }}
          transition={{ duration: 0.2, times: [0, 0.3, 0.6, 1] }}
        >
          {WORDS[currentWord]}
        </motion.div>


        <motion.div
          key={currentWord}
          className="relative z-10 text-metallic select-none drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
        >
          {WORDS[currentWord]}
        </motion.div>


        <motion.div
          key={currentWord + "-top"}
          className="absolute inset-0 text-white select-none z-20"
          style={{ clipPath: 'inset(0 0 70% 0)' }}
          initial={{ x: 10 }}
          animate={{ x: [-15, 10, -5, 0] }}
          transition={{ duration: 0.15, delay: 0.05 }}
        >
          {WORDS[currentWord]}
        </motion.div>


        <motion.div
          key={currentWord + "-bottom"}
          className="absolute inset-0 text-white select-none z-20"
          style={{ clipPath: 'inset(70% 0 0 0)' }}
          initial={{ x: -10 }}
          animate={{ x: [15, -10, 5, 0] }}
          transition={{ duration: 0.15, delay: 0.1 }}
        >
          {WORDS[currentWord]}
        </motion.div>
      </div>

      <div className="absolute top-8 left-8 border-l-4 border-t-4 border-accent-blue w-16 h-16" />
      <div className="absolute bottom-8 right-8 border-r-4 border-b-4 border-accent-blue w-16 h-16" />
    </div>
  );
}