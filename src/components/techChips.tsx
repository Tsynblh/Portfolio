import { Braces, CloudCog, CodeXml, Database } from "lucide-react";

const groups = [
  { title: "Backend", icon: Braces, items: ["Python", "Django", "PHP", "REST API", "gRPC", "Microservices"] },
  { title: "Frontend", icon: CodeXml, items: ["HTML", "CSS", "Bootstrap", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Database", icon: Database, items: ["MySQL", "PostgreSQL", "Firestore"] },
  { title: "Cloud & Tools", icon: CloudCog, items: ["Google Cloud", "Git", "GitHub", "Postman", "JMeter", "Figma"] },
];

export default function TechChips() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <article key={group.title} className="overflow-hidden rounded-3xl border border-[#EEEEEE]/9 bg-[#393E46]/45 p-6 shadow-[0_20px_55px_rgba(0,0,0,.09)] sm:p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#FFD369]/25 bg-[#222831] text-[#FFD369]"><Icon className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-[#EEEEEE]">{group.title}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => <span className="inline-flex rounded-full border border-[#EEEEEE]/9 bg-[#222831]/50 px-3 py-2.5 text-[0.72rem] text-[#EEEEEE]/60 transition duration-200 hover:-translate-y-px hover:border-[#FFD369] hover:bg-[#FFD369] hover:text-[#222831] hover:shadow-[0_0_18px_rgba(255,211,105,.28)] active:border-[#FFD369] active:bg-[#FFD369] active:text-[#222831] focus-visible:border-[#FFD369] focus-visible:bg-[#FFD369] focus-visible:text-[#222831]" key={item} tabIndex={0}>{item}</span>)}
            </div>
          </article>
        );
      })}
    </div>
  );
}
