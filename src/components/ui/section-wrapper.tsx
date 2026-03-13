import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative px-4 py-20 sm:px-6 lg:px-8", className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}
