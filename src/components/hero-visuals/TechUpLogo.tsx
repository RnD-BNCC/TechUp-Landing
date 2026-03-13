import { motion } from 'framer-motion';

export function TechUpLogo() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden bg-bg-surface">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        

        <motion.div
          className="absolute w-32 h-32 bg-accent-blue rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />


        <motion.img
          src="/images/techup-logo.png"
          alt="TechUp Logo"
          className="h-16 sm:h-24 w-auto object-contain relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />

      </div>
    </div>
  );
}
