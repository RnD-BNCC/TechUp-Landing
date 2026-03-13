import { motion } from 'framer-motion';

export function NeuralLattice() {
  const nodes = Array.from({ length: 16 });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-bg-surface opacity-50" />
      <div className="relative z-10 w-full max-w-[200px] sm:max-w-[240px] aspect-square grid grid-cols-4 gap-3 p-4 border-4 border-border-dark bg-bg-base shadow-brutal">

        <motion.div
          className="absolute top-1/2 left-0 right-0 h-[2px] bg-accent-blue z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "linear", delay: 0.5 }}
        />
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent-blue z-0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "linear", delay: 0.6 }}
        />

        {nodes.map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full border-2 border-border-light bg-bg-base z-10 relative flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: i * 0.05,
              type: "spring",
              stiffness: 400,
            }}
          >
            <motion.div
              className="w-1/2 h-1/2 bg-accent-blue"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          </motion.div>
        ))}
      </div>
      <motion.p
        className="mt-4 text-xs font-bold tracking-widest text-accent-ice uppercase z-10"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        [ LATTICE_ACTIVE ]
      </motion.p>
    </div>
  );
}