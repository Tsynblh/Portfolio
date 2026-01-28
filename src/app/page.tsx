import Section from "@/components/section";
import ProjectCard from "@/components/projectCard";
import TechChips from "@/components/techChips";
import { getPortfolioRepos } from "@/components/github";

export default async function Page() {
  const repos = await getPortfolioRepos();

  const techStack = [
    "REST API",
    "gRPC",
    "MySQL",
    "PostgreSQL",
    "GCP",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git/GitHub",
    "Figma",
    "Jmeter",
    "Postman",
  ];

  return (
    <main className="bg-mesh flex-col min-h-screen">
      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <p className="text-white/60">Makassar, Indonesia</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          Tasya Nabila Hasanuddin
        </h1>
        <p className="mt-3 text-lg md:text-xl text-white/70">
          Software Engineer | Cloud | Web Developer
        </p>
        <p className="mt-5 max-w-2xl text-white/70">
          Hi! I’m Tasya Nabila Hasanuddin, a fresh graduate in Informatics Engineering from Hasanuddin University. 
          I started with an interest in web development and have been expanding my focus toward backend engineering, 
          cloud computing, and data analysis.
        </p>

        <div className="mt-7 flex flex-wrap gap-4 text-sm">
          <a className="underline underline-offset-4 text-white/80 hover:text-white" href="https://github.com/Tsynblh" target="_blank">
            GitHub
          </a>
          <a className="underline underline-offset-4 text-white/80 hover:text-white" href="https://www.linkedin.com/in/tasya-nabila-hasanuddin-9730b22a8/" target="_blank">
            LinkedIn
          </a>
          <a className="underline underline-offset-4 text-white/80 hover:text-white" href="mailto:tsynblh03@gmail.com">
            Email
          </a>
        </div>
      </section>

      <div className="line" />

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projects"
        dot
        subtitle="Some projects that I have worked on."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {repos.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
              No projects found. Add topic <span className="text-white">portfolio</span> to your GitHub repos.
            </div>
          ) : (
            repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
          )}
        </div>
      </Section>

      <div className="line" />

      {/* TECH STACK */}
      <Section id="tech" title="Tech Stack" dot subtitle="Technologies I frequently use.">
        <TechChips />
        </Section>


      {/* CONTACT */}
      <Section id="contact" title="Contact" dot subtitle="Interested in collaboration? Feel free to reach out.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex gap-3">
          <a className="underline underline-offset-4 text-white/80 hover:text-white" href="mailto:tsynblh03@gmail.com">
            tsynblh03@gmail.com
          </a>
          <a className="underline underline-offset-4 text-white/80 hover:text-white" href="https://www.linkedin.com/in/tasya-nabila-hasanuddin-9730b22a8/" target="_blank">
            LinkedIn
          </a>
          <a className="underline underline-offset-4 text-white/80 hover:text-white" href="https://github.com/Tsynblh" target="_blank">
            GitHub
          </a>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-xs text-center text-white/50">
        © {new Date().getFullYear()} Tasya Nabila Hasanuddin
      </footer>
    </main>
  );
}
