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
    slug: "enem-station",
    id: "01",
    title: "ENEM Station",
    description: "Plataforma de Estudos para o ENEM",
    tech: ["React", "TypeScript", ".NET 8", "MongoDB"],
    img: "/images/enem-station-banner.png",
    href: "https://enem-station.vercel.app/",
    repo: "https://github.com/mvdevelop/enem-station",
  },
  {
    slug: "smart-agenda",
    id: "02",
    title: "Smart Agenda (OrgApp)",
    description: "Organizador Pessoal com Assistente IA",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    img: "/images/smart-agenda-banner.png",
    href: "https://smart-agenda.vercel.app/",
    repo: "https://github.com/mvdevelop/personal-organization-app",
  },
  {
    slug: "macaw-english-school",
    id: "03",
    title: "Macaw English School",
    description: "Plataforma de Ensino de Inglês (CEFR A1-C2)",
    tech: ["React", "TypeScript", "Express", "SQLite"],
    img: "/images/macaw-landing.png",
    href: "https://macaw-english-course.vercel.app/",
    repo: "https://github.com/mvdevelop/macaw-english-school",
  },
  {
    slug: "snake-game",
    id: "04",
    title: "Snake Game",
    description: "Jogo Clássico da Cobrinha",
    tech: ["React", "TypeScript", "CSS Animations"],
    img: "/images/snake-game-banner.png",
    href: "https://snake-game.vercel.app/",
    repo: "https://github.com/mvdevelop/snake-game",
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
