export type Project = {
  slug: string;
  id: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  href: string;
  repo: string;
};

/**
 * Single source of truth for project data.
 * Kept minimal — detailed case-study fields will be added per-project once confirmed.
 */
export const projects: Project[] = [
  {
    slug: "macaw-english-school",
    id: "01",
    title: "Macaw English School",
    description: "English School Platform",
    tech: ["TypeScript", "React", ".NET", "Vite"],
    img: "/images/macaw-landing.png",
    href: "https://macaw-english-course.vercel.app/",
    repo: "https://github.com/mvdevelop/macaw-english-school",
  },
  {
    slug: "macaw-social-media",
    id: "02",
    title: "Macaw",
    description: "Social Media",
    tech: ["TypeScript", "Next.js", "Supabase"],
    img: "/images/new-macaw-banner.png",
    href: "https://macaw-social-media.vercel.app/",
    repo: "https://github.com/mvdevelop/macaw-social-media",
  },
  {
    slug: "snake-game",
    id: "03",
    title: "Snake's",
    description: "Snake Mini-Game",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    img: "/images/new-snakegame-banner.png",
    href: "https://snake-game-inky-pi.vercel.app/",
    repo: "https://github.com/mvdevelop/snake-game",
  },
  {
    slug: "blushify",
    id: "04",
    title: "Blushify",
    description: "Cosmetics E-Commerce Store",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    img: "/images/new-blushify-banner.png",
    href: "https://ecommerce-beauty-ashy.vercel.app/",
    repo: "https://github.com/mvdevelop/ecommerce-beauty",
  },
];

export const featuredProjectCount = projects.length;

export type SkillId =
  | "typescript"
  | "react"
  | "tailwind"
  | "nodejs"
  | "csharp"
  | "dotnet"
  | "mongodb"
  | "sql"
  | "docker"
  | "linux"
  | "cloud"
  | "blazor";

export type SkillCategory = "backend" | "frontend" | "data" | "devops" | "practices";

export type Skill = {
  id: SkillId;
  name: string;
  category: SkillCategory;
};

/**
 * Flat skill list for the badge/tag presentation in the Work section.
 * Mirrors the grouped skills in lib/i18n/resume.ts.
 */
export const skills: Skill[] = [
  { id: "csharp", name: "C#", category: "backend" },
  { id: "dotnet", name: ".NET", category: "backend" },
  { id: "nodejs", name: "Node.js", category: "backend" },
  { id: "typescript", name: "TypeScript", category: "frontend" },
  { id: "react", name: "React", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
  { id: "blazor", name: "Blazor", category: "frontend" },
  { id: "sql", name: "SQL Server", category: "data" },
  { id: "mongodb", name: "MongoDB", category: "data" },
  { id: "docker", name: "Docker", category: "devops" },
  { id: "linux", name: "Linux", category: "devops" },
  { id: "cloud", name: "Cloud", category: "devops" },
];
