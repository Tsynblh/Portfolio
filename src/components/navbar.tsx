"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  PiFolderSimpleStarDuotone,
  PiHouseLineDuotone,
  PiMagicWandDuotone,
  PiPaperPlaneTiltDuotone,
  PiRocketLaunchDuotone,
} from "react-icons/pi";
import { cn } from "./utils";

const NAV = [
  { id: "home", label: "Home", icon: PiHouseLineDuotone },
  { id: "journey", label: "Journey", icon: PiRocketLaunchDuotone },
  { id: "projects", label: "Projects", icon: PiFolderSimpleStarDuotone },
  { id: "skills", label: "Skills", icon: PiMagicWandDuotone },
  { id: "contact", label: "Contact", icon: PiPaperPlaneTiltDuotone },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + window.innerHeight * 0.38;
        let current = NAV[0].id;

        for (const item of NAV) {
          const section = document.getElementById(item.id);
          if (section && section.offsetTop <= marker) current = item.id;
        }

        const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        setActive(atPageEnd ? NAV[NAV.length - 1].id : current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed top-1/2 left-5 z-60 flex w-17 -translate-y-1/2 flex-col items-center gap-3 rounded-3xl border border-[#EEEEEE]/10 bg-[#222831]/90 p-2.5 shadow-[0_24px_60px_rgba(0,0,0,.3)] backdrop-blur-xl max-md:top-auto max-md:right-0 max-md:bottom-3 max-md:left-0 max-md:mx-auto max-md:h-14.5 max-md:w-[min(420px,calc(100%-1.25rem))] max-md:translate-y-0 max-md:flex-row max-md:justify-around max-md:gap-0 max-md:rounded-[18px] max-md:px-1.5 max-md:py-0.5 max-[480px]:w-[calc(100%-0.75rem)]"
      aria-label="Main navigation"
    >
      <div className="flex flex-col gap-1.5 max-md:w-full max-md:flex-row max-md:justify-around max-md:gap-0">
        {NAV.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "group relative grid h-11 w-11 place-items-center rounded-[15px] border border-transparent text-[#EEEEEE]/40 transition hover:-translate-y-px hover:border-[#FFD369]/15 hover:text-[#FFD369] max-md:flex max-md:h-11.5 max-md:w-14.5 max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-1 max-md:p-0 max-md:rounded-xl max-[480px]:w-12.5",
                active === item.id && "border-[#FFD369]/25 text-[#FFD369]"
              )}
              aria-label={item.label}
              title={item.label}
            >
              {active === item.id && (
                <motion.span
                  layoutId="active-navigation"
                  className="absolute inset-0 -z-1 rounded-[inherit] bg-[#FFD369]/10 shadow-[inset_0_0_0_1px_rgba(255,211,105,.04),0_8px_24px_rgba(0,0,0,.12)]"
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="relative z-1 h-5.5 w-5.5 shrink-0" />
              <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] z-2 -translate-x-1 rounded-lg border border-[#EEEEEE]/10 bg-[#222831]/95 px-2.5 py-2 text-[0.68rem] font-bold text-[#EEEEEE] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 max-md:static max-md:translate-x-0 max-md:border-0 max-md:bg-transparent max-md:p-0 max-md:text-[0.54rem] max-md:leading-none max-md:text-current max-md:opacity-100 max-[480px]:text-[0.52rem]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
