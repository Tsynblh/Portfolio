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
        <div className="heroHeaderWrapper flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT: TEXT */}
          <div className="heroTextWrapper max-w-2xl">
            <p className="heroLocation text-white/60">Makassar, Indonesia</p>

            <h1 className="heroName mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              Tasya Nabila Hasanuddin
            </h1>
            <p className="heroRole mt-3 text-lg text-white/70 md:text-xl">
              Software Engineer | Cloud | Web Developer
            </p>

            <p className="heroBio mt-6 text-sm leading-relaxed text-white/70 md:text-base">
              Informatics Engineering fresh graduate from Hasanuddin University and Bangkit Academy with 
              expertise in Fullstack Development, Backend Engineering, and Cloud Computing. 
              Experienced in building web-based applications using React and Next.js, developing RESTful APIs, 
              implementing authentication and authorization systems, managing MySQL/PostgreSQL databases, 
              and deploying backend services on Google Cloud Platform.
            </p>

            <div className="heroLinks mt-6 flex gap-6 text-sm">
              <a className="heroLink underline underline-offset-4 hover:text-white" href="https://github.com/Tsynblh" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="heroLink underline underline-offset-4 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="heroLink underline underline-offset-4 hover:text-white" href="mailto:tsynblh03@gmail.com">
                Email
              </a>
            </div>
          </div>

          {/* RIGHT: BIG PHOTO CARD */}
          <div className="heroPhotoCardWrapper w-full max-w-md lg:max-w-lg">
            <div className="heroPhotoCard relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 shadow-[0_0_40px_rgba(56,189,248,0.08)]">
              <img
                src="/profile.jpg"
                alt="Tasya Nabila Hasanuddin"
                className="heroPhotoBig h-65 w-full rounded-xl object-cover md:h-92.5"
              />
            </div>
          </div>
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
