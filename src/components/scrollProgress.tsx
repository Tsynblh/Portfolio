"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-70 h-0.5 origin-left bg-[#FFD369] shadow-[0_0_12px_rgba(255,211,105,.45)]"
      style={{ scaleX }}
    />
  );
}
