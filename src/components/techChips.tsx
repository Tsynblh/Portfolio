import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const techStack: TechItem[] = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },

  { name: "GCP", icon: <SiGooglecloud className="text-sky-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400" /> },

  { name: "Git", icon: <SiGit className="text-orange-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
];

export default function TechChips() {
  return (
    <div className="techGridWrapper grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="
            techItemCard
            flex flex-col items-center justify-center gap-3
            rounded-xl
            border border-white/10
            bg-white/5
            px-4 py-6
            transition
            hover:bg-white/10
            hover:-translate-y-1
          "
        >
          <div className="techIcon text-3xl">
            {tech.icon}
          </div>

          <span className="techLabel text-sm text-white/70">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
