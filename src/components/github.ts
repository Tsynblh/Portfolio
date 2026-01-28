const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
const TOPIC = process.env.PROJECT_TOPIC ?? "portfolio";

// ⚠️ Jangan pernah pakai NEXT_PUBLIC untuk token.
// Token ini hanya untuk server (aman di Next.js server component).
const TOKEN = process.env.GITHUB_TOKEN;

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  topics?: string[];
  language: string | null;
  updated_at: string;
  private?: boolean;
  owner?: { login: string };
};

export async function getPortfolioRepos(): Promise<GithubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  let url = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;

  // ✅ Kalau ada TOKEN → pakai /user/repos supaya repo private ikut kebaca
  if (TOKEN) {
    headers.Authorization = `Bearer ${TOKEN}`;
    url =
      "https://api.github.com/user/repos" +
      "?per_page=100" +
      "&sort=updated" +
      "&direction=desc" +
      "&visibility=all" +
      "&affiliation=owner";
  }

  const res = await fetch(url, { headers, next: { revalidate: 300 } });
  if (!res.ok) return [];

  const data: GithubRepo[] = await res.json();

  return data
    // kalau pakai /user/repos, bisa aja repo lain ikut kebawa (org/collab). kita pastikan owner kamu.
    .filter((r) => (r.owner?.login ?? USERNAME) === USERNAME)
    .filter((r) => (r.topics ?? []).includes(TOPIC))
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
}

export function repoOgImage(fullName: string) {
  return `https://opengraph.githubassets.com/1/${fullName}`;
}
