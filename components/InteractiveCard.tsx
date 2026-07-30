"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

type InteractiveCardProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
};

type InteractiveCardStyle = React.CSSProperties & {
  [key: `--${string}`]: string;
};

export default function InteractiveCard({
  children,
  className = "",
  style,
  onMouseMove,
  onMouseLeave,
  ...props
}: InteractiveCardProps) {
  const [cursorStyle, setCursorStyle] = useState<InteractiveCardStyle>({
    "--card-tilt-x": "0deg",
    "--card-tilt-y": "0deg",
    "--card-bg-x": "50%",
    "--card-bg-y": "50%",
  });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const tiltX = Number((y * -6).toFixed(2));
    const tiltY = Number((x * 6).toFixed(2));
    const bgX = `${50 + x * 14}%`;
    const bgY = `${50 + y * 14}%`;

    setCursorStyle({
      "--card-tilt-x": `${tiltX}deg`,
      "--card-tilt-y": `${tiltY}deg`,
      "--card-bg-x": bgX,
      "--card-bg-y": bgY,
    });

    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    setCursorStyle({
      "--card-tilt-x": "0deg",
      "--card-tilt-y": "0deg",
      "--card-bg-x": "50%",
      "--card-bg-y": "50%",
    });

    onMouseLeave?.(event);
  };

  return (
    <motion.article
      className={`interactive-card ${className}`}
      style={{ ...cursorStyle, ...style }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 240, damping: 20, duration: 0.32 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.article>
  );
}
