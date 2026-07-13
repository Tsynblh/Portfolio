"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { GithubRepo } from "./github";

const projectStacks: Record<string, string[]> = {
  moop: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  onexam: ["React", "TypeScript", "Ionic", "Firebase", "Material UI"],
  roseavenue: ["HTML", "CSS", "JavaScript"],
  elixir: ["Next.js", "TypeScript", "Firebase", "Material UI", "Tailwind CSS"],
  "e-dapeg": ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "JavaScript"],
  "smart-parking": ["Python", "gRPC", "REST API", "TypeScript", "Apache JMeter"],
};

export default function ProjectCard({ repo, featured = false, index = 0 }: { repo: GithubRepo; featured?: boolean; index?: number }) {
  const reduceMotion = useReducedMotion();
  const repoSlug = repo.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-_]/g, "");
  const screenshotSrc = `/projects/${repoSlug}.png`;
  const stack = projectStacks[repoSlug] ?? [repo.language ?? "Web Development"];

  return (
    <motion.article
      className={`group overflow-hidden rounded-3xl border border-[#EEEEEE]/9 bg-[#393E46]/45 shadow-[0_20px_55px_rgba(0,0,0,.09)] transition-colors hover:border-[#FFD369]/30 ${featured ? "md:col-span-2 xl:col-span-2" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.008 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, delay: Math.min(index * 0.14, 0.7), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-video md:aspect-[16/8]" : "aspect-video"}`}>
        <Image
          src={screenshotSrc}
          alt={`${repo.name} preview`}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#222831] via-transparent to-transparent opacity-70" />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold capitalize text-[#FFD369] sm:text-2xl">{repo.name.replaceAll("-", " ")}</h3>
          </div>
          <div className="flex shrink-0 gap-2">
            {repo.homepage && (
              <a className="grid h-10.5 w-10.5 place-items-center rounded-full border border-[#EEEEEE]/10 bg-[#222831]/70 text-[#EEEEEE]/70 transition hover:-translate-y-0.5 hover:border-[#FFD369]/45 hover:text-[#FFD369]" href={repo.homepage} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} live site`} title="Live site">
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <a className="grid h-10.5 w-10.5 place-items-center rounded-full border border-[#EEEEEE]/10 bg-[#222831]/70 text-[#EEEEEE]/70 transition hover:-translate-y-0.5 hover:border-[#FFD369]/45 hover:text-[#FFD369]" href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`} title="GitHub repository">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#EEEEEE]/55">{repo.description ?? "Project details coming soon."}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((technology) => <span key={technology} tabIndex={0} className="inline-flex rounded-full border border-[#EEEEEE]/9 bg-[#222831]/50 px-2.5 py-1.5 text-[0.72rem] text-[#EEEEEE]/60 transition duration-200 hover:-translate-y-px hover:border-[#FFD369] hover:bg-[#FFD369] hover:text-[#222831] hover:shadow-[0_0_18px_rgba(255,211,105,.28)] active:border-[#FFD369] active:bg-[#FFD369] active:text-[#222831] focus-visible:border-[#FFD369] focus-visible:bg-[#FFD369] focus-visible:text-[#222831]">{technology}</span>)}
        </div>
      </div>
    </motion.article>
  );
}
