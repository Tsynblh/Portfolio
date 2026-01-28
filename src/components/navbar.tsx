"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "./utils";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function navbar() {
  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: "-15% 0px -65% 0px" }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur supports-backdrop-filter:bg-black/20",
        scrolled ? "border-b border-white/10" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("about")} className="font-semibold">
          Tsynblh
        </button>

        <nav className="flex items-center gap-2">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-3 py-2 text-sm rounded-full transition",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-sky-400" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
