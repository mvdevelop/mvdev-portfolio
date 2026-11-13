import type { Language } from "./translations";

export type ResumeExperience = {
  date: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
};

export type ResumeEducation = {
  year: string;
  degree: string;
  institute: string;
  type: "academic" | "course" | "language";
  free?: boolean;
};

export type ResumeSkill = {
  name: string;
  description: string;
};

export type ResumeSkillGroup = {
  category: string;
  items: ResumeSkill[];
};

export type ResumeContent = {
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
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
        description:
          "Full Stack development in a professional environment, building web applications and system integrations using the Microsoft ecosystem.",
        technologies: ["C#", ".NET", "REST APIs", "TypeScript", "React", "Git"],
      },
    ],
    education: [
      { year: "2022 — 2026", degree: "Computer Science", institute: "Unif", type: "academic" },
      { year: "2024 — 2025", degree: "DevOps Engineering", institute: "FIAP", type: "course" },
      { year: "2021 — 2023", degree: "English Proficiency C1", institute: "IBL", type: "language" },
      { year: "2021 — 2022", degree: "CS50's Introduction to Computer Science", institute: "Harvard University", type: "course", free: true },
    ],
    skills: [
      {
        category: "Backend",
        items: [
          { name: "C#", description: "Business logic, APIs, and server-side applications." },
          { name: ".NET / ASP.NET Core", description: "Web APIs, MVC, and server-rendered applications." },
          { name: "Node.js", description: "Server-side JavaScript/TypeScript projects." },
          { name: "Java / Spring Boot", description: "Backend API development in the Java ecosystem." },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "TypeScript", description: "Type-safe, maintainable client-side code." },
          { name: "React", description: "Component-based UIs with hooks and state management." },
          { name: "Next.js", description: "Server-rendered and static React applications." },
          { name: "Tailwind CSS", description: "Utility-first styling for rapid, consistent UIs." },
          { name: "Blazor", description: "C#-based web UIs running in the browser (Server & WASM)." },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "SQL Server", description: "Relational data modeling and complex queries." },
          { name: "MongoDB", description: "Document-based storage for flexible data models." },
        ],
      },
      {
        category: "DevOps & Cloud",
        items: [
          { name: "Docker", description: "Containerization for consistent development and deployment." },
          { name: "Git / GitHub", description: "Version control and collaborative workflows." },
          { name: "Cloud Platforms", description: "Deployment and hosting on AWS and Google Cloud." },
        ],
      },
      {
        category: "Engineering Practices",
        items: [
          { name: "Clean Architecture", description: "Layered, testable, and maintainable system design." },
          { name: "SOLID Principles", description: "Foundations for scalable object-oriented code." },
          { name: "REST API Design", description: "Structured, predictable, and documented endpoints." },
          { name: "Scrum / Agile", description: "Iterative delivery and team collaboration." },
        ],
      },
    ],
    about: [
      "I'm a Full Stack Developer with a focus on backend engineering, currently studying Computer Science and working professionally in the Microsoft ecosystem.",
      "",
      "On the backend, I develop RESTful APIs and business logic using C#, .NET Core, and Entity Framework. I work with both relational databases (SQL Server) and NoSQL stores (MongoDB), applying clean architecture and dependency injection to keep systems maintainable.",
      "",
      "On the frontend, I build responsive interfaces with React, Next.js, and TypeScript — always prioritizing performance and accessibility. I also have experience extending C# to the browser with Blazor Server/WASM.",
      "",
      "Beyond coding, I manage deployments with Docker, follow Git workflows in Agile teams, and am comfortable working across Linux environments.",
      "",
      "I'm currently looking for Full Stack or Backend opportunities where I can contribute to well-structured systems and continue growing as an engineer.",
    ],
  },
  pt: {
    experience: [
      {
        date: "Setembro de 2023 — Presente",
        role: "Desenvolvedor Full Stack",
        company: "19SL",
        location: "Remoto · Rio de Janeiro, Brasil",
        description:
          "Desenvolvimento Full Stack em ambiente profissional, construindo aplicações web e integrações de sistemas utilizando o ecossistema Microsoft.",
        technologies: ["C#", ".NET", "APIs REST", "TypeScript", "React", "Git"],
      },
    ],
    education: [
      { year: "2022 — 2026", degree: "Ciência da Computação", institute: "Unif", type: "academic" },
      { year: "2024 — 2025", degree: "Engenharia DevOps", institute: "FIAP", type: "course" },
      { year: "2021 — 2023", degree: "Proficiência em Inglês C1", institute: "IBL", type: "language" },
      { year: "2021 — 2022", degree: "CS50's Introdução à Ciência da Computação", institute: "Harvard University", type: "course", free: true },
    ],
    skills: [
      {
        category: "Backend",
        items: [
          { name: "C#", description: "Regras de negócio, APIs e aplicações server-side." },
          { name: ".NET / ASP.NET Core", description: "Web APIs, MVC e aplicações server-rendered." },
          { name: "Node.js", description: "Projetos server-side com JavaScript/TypeScript." },
          { name: "Java / Spring Boot", description: "Desenvolvimento de APIs no ecossistema Java." },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "TypeScript", description: "Código cliente type-safe e manutenível." },
          { name: "React", description: "UIs baseadas em componentes com hooks e state management." },
          { name: "Next.js", description: "Aplicações React renderizadas no servidor e estáticas." },
          { name: "Tailwind CSS", description: "Styling utility-first para UIs rápidas e consistentes." },
          { name: "Blazor", description: "UIs web em C# rodando no navegador (Server & WASM)." },
        ],
      },
      {
        category: "Bancos de Dados",
        items: [
          { name: "SQL Server", description: "Modelagem de dados relacionais e consultas complexas." },
          { name: "MongoDB", description: "Armazenamento document-based para modelos flexíveis." },
        ],
      },
      {
        category: "DevOps & Cloud",
        items: [
          { name: "Docker", description: "Containerização para ambientes consistentes de dev e deploy." },
          { name: "Git / GitHub", description: "Controle de versão e fluxos colaborativos." },
          { name: "Cloud Platforms", description: "Deploy e hospedagem em AWS e Google Cloud." },
        ],
      },
      {
        category: "Práticas de Engenharia",
        items: [
          { name: "Clean Architecture", description: "Design de sistemas em camadas, testáveis e mantenáveis." },
          { name: "SOLID", description: "Fundamentos para código Orientado a Objetos escalável." },
          { name: "REST API Design", description: "Endpoints estruturados, previsíveis e documentados." },
          { name: "Scrum / Agile", description: "Entrega iterativa e colaboração em equipe." },
        ],
      },
    ],
    about: [
      "Sou Desenvolvedor Full Stack com foco em engenharia de backend, atualmente cursando Ciência da Computação e atuando profissionalmente no ecossistema Microsoft.",
      "",
      "No backend, desenvolvo APIs REST e regras de negócio usando C#, .NET Core e Entity Framework. Trabalho com bancos relacionais (SQL Server) e NoSQL (MongoDB), aplicando clean architecture e injeção de dependência para manter os sistemas sustentáveis.",
      "",
      "No frontend, construo interfaces responsivas com React, Next.js e TypeScript — sempre priorizando performance e acessibilidade. Também tenho experiência estendendo C# para o navegador com Blazor Server/WASM.",
      "",
      "Além de codar, gerencio deploys com Docker, sigo fluxos de Git em times Ágeis e me sinto confortável trabalhando em ambientes Linux.",
      "",
      "Estou em busca de oportunidades Full Stack ou Backend onde possa contribuir com sistemas bem estruturados e continuar crescendo como engenheiro.",
    ],
  },
};
