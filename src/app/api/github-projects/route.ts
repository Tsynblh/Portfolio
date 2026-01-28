import { NextResponse } from "next/server";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  private: boolean;
  stargazers_count: number;
  updated_at: string;
  language: string | null;
  owner?: { login: string };
};

export const revalidate = 300; // cache 5 menit

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;
  const topic = process.env.GITHUB_TOPIC || "portfolio";

  if (!token || !username) {
    return NextResponse.json(
      { error: "Missing env: GITHUB_TOKEN / GITHUB_USERNAME" },
      { status: 500 }
    );
  }

  // Ambil repo (public + private) yang bisa diakses token
  const url = "https://api.github.com/user/repos?per_page=100&sort=updated";

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json(
      { error: "GitHub API error", detail },
      { status: res.status }
    );
  }

  const repos = (await res.json()) as GitHubRepo[];

  // Filter repo yang owner-nya username kamu
  const owned = repos.filter(
    (r) => (r.owner?.login || "").toLowerCase() === username.toLowerCase()
  );

  // Filter repo yang punya topic portfolio
  const filtered = owned.filter((r) => (r.topics || []).includes(topic));

  // Sort terbaru
  filtered.sort(
    (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  // Kembalikan data yang kamu butuhkan saja + image lokal
  const result = filtered.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    html_url: r.html_url,
    homepage: r.homepage,
    topics: r.topics || [],
    private: r.private,
    language: r.language,
    updated_at: r.updated_at,
    stargazers_count: r.stargazers_count,
    image: `/projects/${r.name}.png`, // <- sesuai permintaan kamu
  }));

  return NextResponse.json({ repos: result });
}
