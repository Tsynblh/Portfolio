import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import ProjectCard from "@/components/projectCard";
import Section from "@/components/section";
import TechChips from "@/components/techChips";
import Reveal from "@/components/reveal";
import { HeroBio, HeroHeading, HeroRole } from "@/components/heroTextEffects";
import { getPortfolioRepos, type GithubRepo } from "@/components/github";

const fallbackProjects: GithubRepo[] = [
  {
    id: 1,
    name: "MOOP",
    full_name: "Tsynblh/MOOP",
    html_url: "https://github.com/Tsynblh/MOOP",
    homepage: "https://moop-bice.vercel.app",
    description: "Movie Recommendation Web Application",
    topics: ["nextjs", "typescript", "supabase"],
    language: "TypeScript",
    updated_at: "2026-07-11",
  },
  {
    id: 2,
    name: "e-dapeg",
    full_name: "Tsynblh/e-dapeg",
    html_url: "https://github.com/Tsynblh/e-dapeg",
    homepage: null,
    description:
      "Internal employee information system used by 68 employees, with role-based access and a three-level approval workflow.",
    topics: ["php", "mysql", "bootstrap"],
    language: "PHP",
    updated_at: "2024-08-01",
  },
  {
    id: 3,
    name: "smart-parking",
    full_name: "Tsynblh/smart-parking",
    html_url: "https://github.com/Tsynblh/smart-parking",
    homepage: null,
    description:
      "Microservices-based parking system for vehicle detection, license plate OCR, and REST versus gRPC performance research.",
    topics: ["microservices", "grpc", "jmeter"],
    language: "Python",
    updated_at: "2026-02-01",
  },
  {
    id: 4,
    name: "onexam",
    full_name: "Tsynblh/onexam",
    html_url: "https://github.com/Tsynblh/onexam",
    homepage: null,
    description:
      "Web exam platform featuring authentication, timers, auto-submit, question management, auto-grading, and result storage.",
    topics: ["react", "firestore", "frontend"],
    language: "JavaScript",
    updated_at: "2024-01-01",
  },
  {
    id: 5,
    name: "elixir",
    full_name: "Tsynblh/elixir",
    html_url: "https://github.com/Tsynblh/elixir",
    homepage: "https://elixir-perfume.vercel.app",
    description:
      "Responsive e-commerce web experience with reusable components, a shopping cart, and a payment simulation flow.",
    topics: ["e-commerce", "responsive", "ui"],
    language: "TypeScript",
    updated_at: "2023-12-01",
  },
  {
    id: 6,
    name: "roseavenue",
    full_name: "Tsynblh/roseavenue",
    html_url: "https://github.com/Tsynblh/roseavenue",
    homepage: "https://roseavenue.vercel.app/",
    description:
      "A clean, responsive one-page landing page built from scratch with a focus on visual consistency and layout.",
    topics: ["landing-page", "responsive", "ui-ux"],
    language: "HTML",
    updated_at: "2023-11-01",
  },
];

const journey = [
  {
    period: "Aug 2021 — Feb 2026",
    title: "Informatics Engineering",
    place: "Hasanuddin University",
    description:
      "Completed a microservices-based Smart Parking thesis, benchmarking REST and gRPC under multiple concurrent-user and video configurations.",
    icon: GraduationCap,
  },
  {
    period: "Feb 2024 — Jul 2024",
    title: "Cloud Computing Learning Path",
    place: "Bangkit Academy by Google, GoTo & Traveloka",
    description:
      "Completed 965 hours of cloud, backend, and professional development training, including a 200-hour capstone project on Google Cloud.",
    icon: GraduationCap,
  },
  {
    period: "May 2024 — Aug 2024",
    title: "Fullstack Web Developer Intern",
    place: "PT PLN Indonesia Power — UBP Tello",
    description:
      "Built E-DAPEG with PHP and MySQL in a two-person team, replacing manual Excel workflows for 68 employees.",
    icon: BriefcaseBusiness,
  },
];

const certificates = [
  "Application Development with Cloud Run",
  "Build Infrastructure with Terraform on Google Cloud",
  "Logging and Monitoring in Google Cloud",
  "Getting Started with Google Kubernetes Engine",
  "Menjadi Google Cloud Engineer",
];

export default async function Page() {
  const githubProjects = await getPortfolioRepos();
  const projects = githubProjects.length > 0 ? githubProjects : fallbackProjects;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(700px_420px_at_8%_4%,rgba(255,211,105,.09),transparent_65%),radial-gradient(700px_520px_at_95%_38%,rgba(238,238,238,.035),transparent_70%),linear-gradient(180deg,#20262e_0%,#222831_45%,#20262e_100%)] pt-4 max-md:pb-26 max-md:pt-2.5">
      <section id="home" className="relative z-1 mx-auto w-[min(1180px,calc(100%-2rem))] scroll-mt-8 pb-16 pt-4 max-[480px]:w-[min(1180px,calc(100%-1.25rem))]">
        <div className="relative grid min-h-[min(720px,calc(100vh-116px))] place-items-center overflow-hidden rounded-[32px] border border-[#EEEEEE]/10 bg-[#393E46]/45 px-6 py-20 shadow-[0_30px_90px_rgba(0,0,0,.2)] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(238,238,238,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(238,238,238,.025)_1px,transparent_1px)] before:bg-size-[48px_48px] max-md:min-h-0 max-md:rounded-3xl max-md:py-16 max-sm:px-4 max-sm:py-12">
          <div className="pointer-events-none absolute -top-30 -right-15 h-95 w-95 rounded-full bg-[#FFD369]/8 blur-xl" />
          <div className="pointer-events-none absolute -bottom-45 -left-22.5 h-115 w-115 rounded-full border border-[#FFD369]/15 blur-xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <Reveal delay={0.05}>
              <div className="h-38 w-38 overflow-hidden rounded-full border border-[#FFD369]/70 bg-[#393E46] p-1.25 shadow-[0_0_0_9px_rgba(255,211,105,.05),0_0_45px_rgba(255,211,105,.12)] max-sm:h-32 max-sm:w-32">
                <Image
                  src="/profile.jpg"
                  alt="Tasya Nabila Hasanuddin"
                  width={168}
                  height={168}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <HeroHeading />
            <p className="mt-5 text-base font-medium text-[#FFD369] sm:text-xl">
              <HeroRole text="Fullstack Developer · Backend · Cloud" />
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#EEEEEE]/65 sm:mt-6 sm:text-base sm:leading-7">
              <HeroBio text="Informatics Engineering graduate and Bangkit Academy alumna focused on building reliable web applications, backend services, and cloud solutions." />
            </p>
            <Reveal delay={1.1} className="mt-4">
              <p className="flex items-center gap-2 text-sm text-[#EEEEEE]/55">
                <MapPin className="h-4 w-4 text-[#FFD369]" /> Makassar, Indonesia
              </p>
            </Reveal>

            <Reveal delay={1.25} className="mt-9 max-sm:w-full">
              <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col">
                <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD369] px-5 py-3.5 text-xs font-bold text-[#222831] transition hover:-translate-y-0.5 max-sm:w-full" href="#projects">
                  View my work <ArrowDownRight className="h-4 w-4" />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#EEEEEE]/15 bg-[#EEEEEE]/4 px-5 py-3.5 text-xs font-bold text-[#EEEEEE] transition hover:-translate-y-0.5 hover:border-[#FFD369]/45 max-sm:w-full" href="/tasya-nabila-hasanuddin-cv.pdf" download>
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={1.4} className="mt-7">
              <div className="flex items-center gap-3">
                <a className="grid h-10.5 w-10.5 place-items-center rounded-full border border-[#EEEEEE]/10 bg-[#222831]/70 text-[#EEEEEE]/70 transition hover:-translate-y-0.5 hover:border-[#FFD369]/45 hover:text-[#FFD369]" href="https://github.com/Tsynblh" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a className="grid h-10.5 w-10.5 place-items-center rounded-full border border-[#EEEEEE]/10 bg-[#222831]/70 text-[#EEEEEE]/70 transition hover:-translate-y-0.5 hover:border-[#FFD369]/45 hover:text-[#FFD369]" href="https://www.linkedin.com/in/tsynblh" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a className="grid h-10.5 w-10.5 place-items-center rounded-full border border-[#EEEEEE]/10 bg-[#222831]/70 text-[#EEEEEE]/70 transition hover:-translate-y-0.5 hover:border-[#FFD369]/45 hover:text-[#FFD369]" href="mailto:tsynblh03@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section
        id="journey"
        number="01"
        title="My Journey"
        subtitle="Education, learning, and professional experience that shaped how I build products."
      >
        <Reveal className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <div className="overflow-hidden rounded-3xl border border-[#EEEEEE]/9 bg-[#393E46]/45 p-5 shadow-[0_20px_55px_rgba(0,0,0,.09)] sm:p-8">
            <div className="relative before:absolute before:top-3.5 before:bottom-3.5 before:left-5 before:w-px before:bg-[#FFD369]/20">
              {journey.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={`${item.title}-${item.period}`} className="relative min-h-37.5 pb-10 pl-17 last:pb-0 max-[480px]:pl-14">
                    <div className="absolute top-0 left-0 grid h-10 w-10 place-items-center rounded-xl border border-[#FFD369]/25 bg-[#222831] text-[#FFD369]"><Icon className="h-5 w-5" /></div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FFD369]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#EEEEEE]">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[#EEEEEE]/75">{item.place}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EEEEEE]/55">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="h-fit overflow-hidden rounded-3xl border border-[#EEEEEE]/9 bg-[#393E46]/45 p-5 shadow-[0_20px_55px_rgba(0,0,0,.09)] sm:p-8">
            <p className="text-[0.72rem] font-bold leading-none tracking-[0.16em] text-[#FFD369] uppercase">Selected certifications</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#EEEEEE]">Cloud credentials</h3>
            <div className="mt-6 divide-y divide-[#EEEEEE]/8">
              {certificates.map((certificate, index) => (
                <div key={certificate} className="flex gap-4 py-4 first:pt-0">
                  <span className="text-xs font-semibold text-[#FFD369]">0{index + 1}</span>
                  <p className="text-sm leading-6 text-[#EEEEEE]/65">{certificate}</p>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>
      </Section>

      <Section
        id="projects"
        number="02"
        title="Selected Projects"
        subtitle="Projects where I turned technical ideas into practical, measurable outcomes."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} featured={index === 0} index={index} />
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        number="03"
        title="Skills & Tools"
        subtitle="A practical toolkit spanning product interfaces, backend systems, databases, and cloud infrastructure."
      >
        <Reveal>
          <TechChips />
        </Reveal>
        <Reveal className="mt-5 grid gap-5 sm:grid-cols-2" delay={0.08}>
          <div className="overflow-hidden rounded-3xl border border-[#EEEEEE]/9 bg-[#393E46]/45 p-6 shadow-[0_20px_55px_rgba(0,0,0,.09)]">
            <p className="text-[0.72rem] font-bold leading-none tracking-[0.16em] text-[#FFD369] uppercase">Languages</p>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#EEEEEE]/8 pb-4">
                <span className="text-[#EEEEEE]">Indonesian</span><span className="text-sm text-[#FFD369]">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#EEEEEE]">English</span><span className="text-sm text-[#FFD369]">Professional</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#EEEEEE]/9 bg-[#393E46]/45 p-6 shadow-[0_20px_55px_rgba(0,0,0,.09)]">
            <p className="text-[0.72rem] font-bold leading-none tracking-[0.16em] text-[#FFD369] uppercase">How I work</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Analytical thinking", "Problem-solving", "Collaboration", "Adaptability", "Attention to detail"].map((skill) => (
                <span className="inline-flex rounded-full border border-[#EEEEEE]/9 bg-[#222831]/50 px-3 py-2.5 text-[0.72rem] text-[#EEEEEE]/60 transition duration-200 hover:-translate-y-px hover:border-[#FFD369] hover:bg-[#FFD369] hover:text-[#222831] hover:shadow-[0_0_18px_rgba(255,211,105,.28)] active:border-[#FFD369] active:bg-[#FFD369] active:text-[#222831] focus-visible:border-[#FFD369] focus-visible:bg-[#FFD369] focus-visible:text-[#222831]" key={skill} tabIndex={0}>{skill}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="contact"
        number="04"
        title="Let's Work Together"
        subtitle="Have an opportunity, project, or idea in mind? I would love to hear about it."
      >
        <Reveal className="flex items-center justify-between gap-12 rounded-[28px] border border-[#FFD369]/20 bg-[radial-gradient(500px_220px_at_100%_0%,rgba(255,211,105,.1),transparent_70%)] bg-[#393E46]/45 p-[clamp(2rem,6vw,5rem)] max-md:flex-col max-md:items-start max-md:gap-8 max-sm:rounded-3xl">
          <div>
            <p className="text-[0.72rem] font-bold leading-none tracking-[0.16em] text-[#FFD369] uppercase">Available for opportunities</p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[#EEEEEE] sm:text-5xl">
              Let&apos;s build something useful together.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#EEEEEE]/60">
              I&apos;m open to fullstack development, backend, cloud, and web development roles or collaborations.
            </p>
          </div>
          <a className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFD369] px-5 py-3.5 text-xs font-bold text-[#222831] transition hover:-translate-y-0.5 max-sm:w-full" href="mailto:tsynblh03@gmail.com">
            Send an email <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Section>

      <footer className="relative z-1 mx-auto flex w-[min(1180px,calc(100%-2rem))] items-center justify-center border-t border-[#EEEEEE]/8 py-8 text-center text-xs text-[#EEEEEE]/40 max-[480px]:w-[min(1180px,calc(100%-1.25rem))]">
        <p>© {new Date().getFullYear()} Tasya Nabila Hasanuddin</p>

      </footer>
    </main>
  );
}
