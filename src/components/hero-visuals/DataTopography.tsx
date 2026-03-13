import { motion } from 'framer-motion';

export function DataTopography() {
  const cols = 8;
  const rows = 8;

  const cells = Array.from({ length: cols * rows });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-[200px] sm:max-w-[240px] aspect-square grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {cells.map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);

          return (
            <motion.div
              key={i}
              className="w-full h-full border border-border-dark bg-bg-surface flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: (col + row) * 0.05,
              }}
            >
              <motion.div
                className="w-2/3 h-2/3 bg-border-dark"
                animate={{
                  backgroundColor: ['#03112b', '#2B7DF4', '#03112b'],
                  scale: [1, 0.5, 1],
                  borderRadius: ['0%', '50%', '0%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: (col * row) * 0.05,
                }}
              />
            </motion.div>
          );
        })}
      </div>
      <motion.div 
        className="absolute bottom-4 right-4 text-accent-ice font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-border-dark bg-bg-surface p-2 shadow-brutal-sm"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.8 }}
      >
        [ DATA_MATRIX ]
      </motion.div>
    </div>
  );
}