import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { GithubRepo } from "./github";

export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  // Nama file screenshot = nama repo
  // public/projects/roseavenue.png  ->  /projects/roseavenue.png
  const repoSlug = repo.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");

  const screenshotSrc = `/projects/${repoSlug}.png`;

  return (
    <div className="projectCardContainer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
      {/* IMAGE / PREVIEW */}
      <div className="projectImageWrapper relative aspect-video w-full">
        <Image
          src={screenshotSrc}
          alt={`${repo.name} preview`}
          fill
          className="projectImage object-cover"
        />
<div className="projectImageOverlay pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-black/0" />
      </div>

      {/* CONTENT */}
      <div className="contentWrapperClas p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="mt-2 text-sm text-white/70 line-clamp-3">
              {repo.description ?? "Project description coming soon."}
            </p>
          </div>

          <div className="projectActionIcons flex items-center gap-3 pt-1">
            {repo.homepage && (
              <a
                className="projectLiveLink"
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                title="Live Demo"
              >
                <ExternalLink className="h-5 w-5 text-white/70 transition hover:text-white" />
              </a>
            )}

            <a
              className="projectGithubLink"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-5 w-5 text-white/70 transition hover:text-white" />
            </a>
          </div>
        </div>

        {/* TAGS */}
        <div className="projectTagsRow mt-4 flex flex-wrap gap-2 text-xs text-white/60">
          {repo.language && (
            <span className="projectLangTag rounded-full bg-white/10 px-3 py-1">
              {repo.language}
            </span>
          )}

          {(repo.topics ?? []).slice(0, 4).map((t) => (
            <span
              key={t}
              className="projectTopicTag rounded-full border border-white/15 px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
