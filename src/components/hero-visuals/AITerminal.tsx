import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LOG_LINES = [
  "INITIALIZING MODEL WEIGHTS...",
  "EPOCH 0/100: LOSS=0.8762",
  "EPOCH 10/100: LOSS=0.6121",
  "TENSOR ALLOCATION: OK [3.2GB]",
  "OPTIMIZING GRADIENT DESCENT...",
  "EPOCH 42/100: LOSS=0.2104",
  "> FETCHING TRAINING DATA...",
  "> ALIGNING NEURAL PATHWAYS",
  "WARNING: OVERFIT DETECTED. APPLYING DROPOUT(0.3)",
  "EPOCH 80/100: LOSS=0.0891",
  "TRAINING COMPLETE. SAVING PARAMS.",
];

export function AITerminal() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs((prevLogs) => {
        const nextLogs = [...prevLogs, LOG_LINES[index % LOG_LINES.length]];
        return nextLogs.length > 8 ? nextLogs.slice(1) : nextLogs;
      });
      index++;
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] flex flex-col border-4 border-border-dark bg-[#010613] shadow-brutal p-3 relative">
        <div className="flex border-b-2 border-border-dark pb-2 mb-2 items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-[10px] font-bold text-accent-ice ml-2">root@techup_ai:~#</span>
        </div>
        <div className="flex-1 overflow-hidden font-mono text-[10px] sm:text-xs text-accent-blue space-y-1">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
            >
              {log}
            </motion.div>
          ))}
          <motion.div
            className="w-2 h-3 bg-accent-ice mt-1 inline-block"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          />
        </div>

        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none mix-blend-screen" />
      </div>
    </div>
  );
}