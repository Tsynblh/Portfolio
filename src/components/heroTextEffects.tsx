"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroHeading() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.p
        className="mt-8 text-[0.72rem] font-bold leading-none tracking-[0.16em] text-[#FFD369] uppercase"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.4, ease: EASE }}
      >
        Hello, I&apos;m
      </motion.p>

      <motion.h1
        className="mt-3 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-[#EEEEEE] sm:text-6xl lg:text-7xl"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
      >
        Tasya Nabila <span className="text-[#FFD369]">Hasanuddin</span>
      </motion.h1>
    </>
  );
}

export function HeroRole({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-block"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.75, ease: EASE }}
    >
      {text}
    </motion.span>
  );
}

export function HeroBio({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-block"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
    >
      {text}
    </motion.span>
  );
}
