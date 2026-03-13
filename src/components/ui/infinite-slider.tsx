import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useAnimationControls } from "motion/react";
import { cn } from "../../lib/cn";

interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  gap?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export function InfiniteSlider({
  children,
  speed = 30,
  gap = 40,
  direction = "left",
  className,
  pauseOnHover = true,
}: InfiniteSliderProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isPaused = useRef(false);

  const childArray = Children.toArray(children);

  const measureContent = useCallback(() => {
    if (contentRef.current) {
      const firstSet = contentRef.current.querySelector("[data-slider-set]");
      if (firstSet) {
        setContentWidth(firstSet.scrollWidth);
      }
    }
  }, []);

  useEffect(() => {
    measureContent();
    window.addEventListener("resize", measureContent);
    return () => window.removeEventListener("resize", measureContent);
  }, [measureContent]);

  useEffect(() => {
    if (contentWidth === 0) return;

    const distance = contentWidth + gap;
    const duration = distance / speed;
    const startX = direction === "left" ? 0 : -distance;
    const endX = direction === "left" ? -distance : 0;

    controls.start({
      x: [startX, endX],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [contentWidth, gap, speed, direction, controls]);

  const handleHoverStart = () => {
    if (pauseOnHover && !isPaused.current) {
      isPaused.current = true;
      controls.stop();
    }
  };

  const handleHoverEnd = () => {
    if (pauseOnHover && isPaused.current) {
      isPaused.current = false;
      if (contentWidth === 0) return;
      const distance = contentWidth + gap;
      const duration = distance / speed;
      const startX = direction === "left" ? 0 : -distance;
      const endX = direction === "left" ? -distance : 0;
      controls.start({
        x: [startX, endX],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        },
      });
    }
  };

  const renderChildren = () =>
    childArray.map((child, i) =>
      isValidElement(child)
        ? cloneElement(child as React.ReactElement, {
            key: i,
            style: { marginRight: `${gap}px` },
          } as React.HTMLAttributes<HTMLElement>)
        : child
    );

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        ref={contentRef}
        className="flex w-max"
        animate={controls}
      >
        <div data-slider-set className="flex shrink-0">
          {renderChildren()}
        </div>
        <div className="flex shrink-0">{renderChildren()}</div>
      </motion.div>
    </div>
  );
}
