export type Language = "en" | "pt";

export type ProfessionalContent = {
  headline: string;
  heroDescription: string;
  professionalSummary: string[];
  location: string;
  availability: string;
  currentRole: string;
  currentCompany: string;
  currentPeriod: string;
};

export const professionalContent: Record<Language, ProfessionalContent> = {
  en: {
    headline: "Backend Developer | C# and .NET | TypeScript and React",
    heroDescription:
      "I am Vinicius Dilly, a Backend Developer focused on C# and .NET. I build RESTful APIs, web applications, and system integrations, combining backend development with TypeScript and React to deliver complete solutions.",
    professionalSummary: [
      "I am Vinicius Dilly, a Backend Developer focused on C# and .NET with Full Stack development experience.",
      "I work on web applications, RESTful APIs, and integrated solutions, using the Microsoft ecosystem on the backend and TypeScript and React on the frontend. I also have experience with Node.js, Java with Spring Boot, SQL, and SQL Server.",
      "My focus is on building modern, well-structured systems based on sound engineering practices, connecting business logic, data, APIs, and user interfaces.",
    ],
    location: "Teresópolis, Rio de Janeiro, Brazil",
    availability: "Open to backend and full stack opportunities",
    currentRole: "Full Stack Developer",
    currentCompany: "19SL",
    currentPeriod: "September 2023 — Present",
  },
  pt: {
    headline: "Desenvolvedor Backend | C# e .NET | TypeScript e React",
    heroDescription:
      "Sou Vinicius Dilly, Desenvolvedor Backend com foco em C# e .NET. Construo APIs RESTful, aplicações web e integrações entre sistemas, combinando desenvolvimento backend com TypeScript e React para entregar soluções completas.",
    professionalSummary: [
      "Sou Vinicius Dilly, Desenvolvedor Backend com foco em C# e .NET e experiência em desenvolvimento Full Stack.",
      "Trabalho na construção de aplicações web, APIs RESTful e soluções integradas, utilizando o ecossistema Microsoft no backend e TypeScript e React no frontend. Também possuo experiência com Node.js, Java com Spring Boot, SQL e SQL Server.",
      "Meu foco está em desenvolver sistemas modernos e bem estruturados, baseados em boas práticas de engenharia e conectando regras de negócio, dados, APIs e interfaces de usuário.",
    ],
    location: "Teresópolis, Rio de Janeiro, Brasil",
    availability: "Aberto a oportunidades backend e full stack",
    currentRole: "Desenvolvedor Full Stack",
    currentCompany: "19SL",
    currentPeriod: "Setembro de 2023 — Presente",
  },
};
