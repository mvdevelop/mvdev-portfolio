import type { Language } from "./professional-content";

export type ResumeContent = {
  experience: {
    date: string;
    role: string;
    company: string;
    location: string;
    description: string;
    technologies: string[];
  }[];
  education: {
    year: string;
    degree: string;
    institute: string;
    type: "academic" | "course" | "language";
  }[];
  skills: {
    category: string;
    items: { name: string; description: string }[];
  }[];
  about: string[];
};

export const resumeContent: Record<Language, ResumeContent> = {
  en: {
    experience: [
      {
        date: "September 2023 — Present",
        role: "Full Stack Developer",
        company: "19SL",
        location: "Remote · Rio de Janeiro, Brazil",
        description: "Full Stack development experience in a professional environment.",
        technologies: ["C#", ".NET", "REST APIs", "TypeScript", "React", "Git"],
      },
    ],
    education: [
      { year: "2022 — 2026", degree: "Computer Science", institute: "Unif", type: "academic" },
      { year: "2024 — 2025", degree: "DevOps Engineering", institute: "Fiap", type: "course" },
      { year: "2021 — 2023", degree: "English Proficiency C1", institute: "IBL", type: "language" },
      { year: "2021 — 2022", degree: "CS50's Introduction to Computer Science", institute: "Harvard University", type: "course" },
    ],
    skills: [
      { category: "Backend", items: [
        { name: "C#", description: "Backend application development and business logic." },
        { name: ".NET", description: "Web applications and REST API development." },
        { name: "Node.js", description: "Backend projects with JavaScript and TypeScript." },
        { name: "Java / Spring Boot", description: "Backend API development in the Java ecosystem." },
      ]},
      { category: "Frontend", items: [
        { name: "TypeScript", description: "Predictable and maintainable frontend code." },
        { name: "React", description: "Component-based web interfaces." },
      ]},
      { category: "Databases", items: [
        { name: "SQL / SQL Server", description: "Relational data and application persistence." },
      ]},
      { category: "Engineering Tools", items: [
        { name: "Git / GitHub", description: "Source control and collaborative workflows." },
        { name: "Scrum", description: "Agile collaboration and delivery practices." },
      ]},
    ],
  },
  pt: {
    experience: [
      {
        date: "Setembro de 2023 — Presente",
        role: "Desenvolvedor Full Stack",
        company: "19SL",
        location: "Remoto · Rio de Janeiro, Brasil",
        description: "Experiência de desenvolvimento Full Stack em ambiente profissional.",
        technologies: ["C#", ".NET", "APIs REST", "TypeScript", "React", "Git"],
      },
    ],
    education: [
      { year: "2022 — 2026", degree: "Ciência da Computação", institute: "Unif", type: "academic" },
      { year: "2024 — 2025", degree: "Engenharia DevOps", institute: "Fiap", type: "course" },
      { year: "2021 — 2023", degree: "Proficiência em Inglês C1", institute: "IBL", type: "language" },
      { year: "2021 — 2022", degree: "CS50's Introduction to Computer Science", institute: "Harvard University", type: "course" },
    ],
    skills: [
      { category: "Backend", items: [
        { name: "C#", description: "Desenvolvimento de aplicações backend e regras de negócio." },
        { name: ".NET", description: "Desenvolvimento de aplicações web e APIs REST." },
        { name: "Node.js", description: "Projetos backend com JavaScript e TypeScript." },
        { name: "Java / Spring Boot", description: "Desenvolvimento de APIs no ecossistema Java." },
      ]},
      { category: "Frontend", items: [
        { name: "TypeScript", description: "Código frontend previsível e fácil de manter." },
        { name: "React", description: "Interfaces web baseadas em componentes." },
      ]},
      { category: "Bancos de dados", items: [
        { name: "SQL / SQL Server", description: "Dados relacionais e persistência de aplicações." },
      ]},
      { category: "Ferramentas de Engenharia", items: [
        { name: "Git / GitHub", description: "Controle de versão e fluxos colaborativos." },
        { name: "Scrum", description: "Colaboração ágil e práticas de entrega." },
      ]},
    ],
  },
};
