export type SkillCategory = "backend" | "frontend" | "data" | "devops";

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

export type Skill = {
  id: SkillId;
  name: string;
  category: SkillCategory;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  href: string;
  repo: string;
};

/**
 * Projects currently published in the portfolio. Keep URLs and assets aligned
 * with the validated project entries in the translation content.
 */
export const projects: Project[] = [
  {
    id: "01",
    title: "Macaw English School",
    description: "English School Platform",
    tech: ["TS", "React Vite", ".Net"],
    img: "/images/macaw-landing.png",
    href: "https://macaw-english-course.vercel.app/",
    repo: "https://github.com/mvdevelop/macaw-english-school",
  },
  {
    id: "02",
    title: "Macaw",
    description: "Social Media",
    tech: ["TS", "NextJs", "Supabase"],
    img: "/images/new-macaw-banner.png",
    href: "https://macaw-social-media.vercel.app/",
    repo: "https://github.com/mvdevelop/macaw-social-media",
  },
  {
    id: "03",
    title: "Snake's",
    description: "Snake Mini-Game",
    tech: ["JS", "React", "Tailwindcss"],
    img: "/images/new-snakegame-banner.png",
    href: "https://snake-game-inky-pi.vercel.app/",
    repo: "https://github.com/mvdevelop/snake-game",
  },
  {
    id: "04",
    title: "Blushify",
    description: "Cosmetics E-Commerce Store",
    tech: ["JS", "React", "Tailwindcss"],
    img: "/images/new-blushify-banner.png",
    href: "https://ecommerce-beauty-ashy.vercel.app/",
    repo: "https://github.com/mvdevelop/ecommerce-beauty",
  },
];

export const featuredProjectCount = projects.length;

/**
 * Skills currently presented by the portfolio. Keep this list limited to
 * technologies supported by the owner's confirmed content and projects.
 */
export const skills: Skill[] = [
  { id: "typescript", name: "TypeScript", category: "frontend" },
  { id: "react", name: "React", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
  { id: "nodejs", name: "Node.js", category: "backend" },
  { id: "csharp", name: "C#", category: "backend" },
  { id: "dotnet", name: ".NET", category: "backend" },
  { id: "mongodb", name: "MongoDB", category: "data" },
  { id: "sql", name: "SQL", category: "data" },
  { id: "docker", name: "Docker", category: "devops" },
  { id: "linux", name: "Linux", category: "devops" },
  { id: "cloud", name: "Cloud", category: "devops" },
  { id: "blazor", name: "Blazor", category: "frontend" },
];
