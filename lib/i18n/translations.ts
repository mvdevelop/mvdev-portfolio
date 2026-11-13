// ─── Types (defined before data to avoid circular references) ────────────────

export type Language = "en" | "pt";

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

export type SkillsData = {
  en: ResumeSkillGroup[];
  pt: ResumeSkillGroup[];
};

export type ProjectsData = Array<{
  slug: string;
  id: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  href: string;
  repo: string;
}>;

export type NavLinks = Array<{ name: string; href: string }>;

export type Translations = {
  nav: { links: NavLinks };
  hero: {
    role: string;
    greeting: string;
    name: string;
    descParts: string[];
    downloadCV: string;
    viewProjects: string;
    contactCta: string;
    stats: {
      experience: string;
      completed: string;
      technologies: string;
      commits: string;
    };
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ id: string; title: string; description: string }>;
  };
  resume: {
    label: string;
    title: string;
    subtitle: string;
    tabs: string[];
    whyHire: string;
    whyHireDesc: string;
    experiences: Array<{ date: string; role: string; company: string }>;
    educations: Array<{ year: string; degree: string; institute: string }>;
    aboutParts: string[];
  };
  work: {
    label: string;
    title: string;
    subtitle: string;
    projects: Array<{ id: string; title: string; description: string }>;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    selectService: string;
    message: string;
    send: string;
    sending: string;
    validation: {
      firstNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
    };
    mailtoNotice: string;
    serviceOptions: string[];
    info: Array<{ icon: string; label: string; value: string }>;
  };
  footer: {
    description: string;
    quickLinks: string;
    connect: string;
    copyright: string;
    builtWith: string;
  };
};

// ─── Data ──────────────────────────────────────────────────────────────────────

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      links: [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "Resume", href: "#resume" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
        { name: "Projects", href: "/projects" },
      ],
    },
    hero: {
      role: "Full Stack Developer · Backend Engineering",
      greeting: "Hello, I'm",
      name: "Vinicius Dilly",
      descParts: [
        "I build ",
        "backend systems and REST APIs",
        " with ",
        "C# and .NET",
        ", then connect them to modern frontends using ",
        "TypeScript and React",
        ". I care about clean architecture, readable code, and solutions that scale — from first commit to production deployment.",
      ],
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      contactCta: "Let's Talk",
      stats: {
        experience: "+ Years of\nExperience",
        completed: "Completed\nProjects",
        technologies: "Technologies\nUsed",
        commits: "Code\nCommits",
      },
    },
    services: {
      label: "What I Do",
      title: "My Services",
      subtitle:
        "Backend-first Full Stack development — from API design to polished user interfaces.",
      items: [
        {
          id: "01",
          title: "C# / .NET & Blazor",
          description:
            "Building robust APIs and server-side applications with C#, .NET Core, and Entity Framework. Also crafting interactive web UIs with Blazor Server/WASM, bringing C# directly to the browser.",
        },
        {
          id: "02",
          title: "TypeScript & React",
          description:
            "Crafting modern, responsive user interfaces with TypeScript, React, and Next.js. Leveraging component-driven design and type safety for maintainable, performant experiences.",
        },
        {
          id: "03",
          title: "Full Stack Integration",
          description:
            "Connecting .NET backends with React frontends through well-designed RESTful APIs — ensuring smooth data flow, authentication, and end-to-end feature delivery.",
        },
        {
          id: "04",
          title: "DevOps & Deployment",
          description:
            "Setting up Docker containers, CI/CD basics, and cloud deployments on AWS and GCP to support reliable release workflows and consistent environments.",
        },
      ],
    },
    resume: {
      label: "My Background",
      title: "Resume",
      subtitle:
        "A journey of continuous learning and building impactful solutions.",
      tabs: ["Experience", "Education", "Skills", "About me"],
      whyHire: "Why hire me?",
      whyHireDesc:
        "I combine backend engineering discipline with frontend versatility — delivering complete, well-structured solutions rather than isolated pieces.",
      experiences: [
        { date: "Sep 2023 — Present", role: "Full Stack Developer", company: "19SL" },
      ],
      educations: [
        { year: "2022 — 2026", degree: "Computer Science", institute: "Unif" },
        { year: "2024 — 2025", degree: "DevOps Engineering", institute: "FIAP" },
        { year: "2021 — 2023", degree: "English Proficiency C1", institute: "IBL" },
        { year: "2021 — 2022", degree: "CS50's Introduction to Computer Science", institute: "Harvard University" },
      ],
      aboutParts: [
        "I'm a Full Stack Developer with a focus on backend engineering, currently studying Computer Science and working professionally in the Microsoft ecosystem.\n\nOn the backend, I develop RESTful APIs and business logic using C#, .NET Core, and Entity Framework. I work with both relational databases (SQL Server) and NoSQL stores (MongoDB), applying clean architecture and dependency injection to keep systems maintainable.\n\nOn the frontend, I build responsive interfaces with React, Next.js, and TypeScript — always prioritizing performance and accessibility. I also have experience extending C# to the browser with Blazor Server/WASM.\n\nBeyond coding, I manage deployments with Docker, follow Git workflows in Agile teams, and am comfortable working across Linux environments.\n\nI'm currently looking for Full Stack or Backend opportunities where I can contribute to well-structured systems and continue growing as an engineer.",
      ],
    },
    work: {
      label: "My Portfolio",
      title: "Featured Work",
      subtitle:
        "A collection of projects showcasing my expertise across different domains.",
      projects: [
        { id: "01", title: "Macaw English School", description: "English School Platform" },
        { id: "02", title: "Macaw", description: "Social Media" },
        { id: "03", title: "Snake's", description: "Snake Mini-Game" },
        { id: "04", title: "Blushify", description: "Cosmetics E-Commerce Store" },
      ],
    },
    contact: {
      label: "Get in Touch",
      title: "Contact Me",
      subtitle:
        "Have a project in mind? Let's work together to bring your ideas to life.",
      formTitle: "Let's Work Together",
      firstName: "First Name",
      lastName: "Last Name",
      email: "E-mail Address",
      phone: "Phone Number",
      selectService: "Select a service",
      message: "Send a Message",
      send: "Send Message",
      sending: "Opening your email client...",
      validation: {
        firstNameRequired: "Please enter your first name.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Please enter a message.",
      },
      mailtoNotice: "Your email client should open with the message ready to send.",
      serviceOptions: ["Frontend", "Backend", "Mobile", "DevOps"],
      info: [
        { icon: "phone", label: "Phone", value: "(+55) 21 99050-6596" },
        { icon: "email", label: "E-mail", value: "marcosvmdilly@gmail.com" },
        { icon: "map", label: "Address", value: "Rio de Janeiro, RJ - Brazil" },
        { icon: "time", label: "Working Hours", value: "Mon - Fri: 08:00 - 18:00 / Sat - Sun: 08:00 - 14:00" },
        { icon: "message", label: "WhatsApp", value: "(+55) 21 99050-6596" },
        { icon: "globe", label: "Website", value: "www.mvdevelop.com.br" },
      ],
    },
    footer: {
      description:
        "Full Stack Developer focused on backend engineering, passionate about creating modern, scalable, and impactful digital solutions.",
      quickLinks: "Quick Links",
      connect: "Connect",
      copyright: "All rights reserved.",
      builtWith: "Designed & Built with",
    },
  },

  pt: {
    nav: {
      links: [
        { name: "Início", href: "#hero" },
        { name: "Serviços", href: "#services" },
        { name: "Currículo", href: "#resume" },
        { name: "Projetos", href: "#work" },
        { name: "Contato", href: "#contact" },
        { name: "Projetos", href: "/projects" },
      ],
    },
    hero: {
      role: "Desenvolvedor Full Stack · Engenharia de Backend",
      greeting: "Olá, eu sou",
      name: "Vinicius Dilly",
      descParts: [
        "Construo sistemas backend e APIs REST com ",
        "C# e .NET",
        ", e conecto eles a frontends modernos usando ",
        "TypeScript e React",
        ". Prezo por arquitetura limpa, código legível e soluções que escalam — do primeiro commit até a produção.",
      ],
      downloadCV: "Baixar Currículo",
      viewProjects: "Ver Projetos",
      contactCta: "Vamos Conversar",
      stats: {
        experience: "+ Anos de\nExperiência",
        completed: "Projetos\nConcluídos",
        technologies: "Tecnologias\nUtilizadas",
        commits: "Commits de\nCódigo",
      },
    },
    services: {
      label: "O Que Eu Faço",
      title: "Meus Serviços",
      subtitle:
        "Desenvolvimento Full Stack com foco em backend — do design da API à interface do usuário.",
      items: [
        {
          id: "01",
          title: "C# / .NET & Blazor",
          description:
            "Construindo APIs robustas e aplicações server-side com C#, .NET Core e Entity Framework. Também desenvolvo interfaces web interativas com Blazor Server/WASM, levando C# diretamente ao navegador.",
        },
        {
          id: "02",
          title: "TypeScript & React",
          description:
            "Criando interfaces modernas e responsivas com TypeScript, React e Next.js. Utilizando design orientado a componentes e tipagem estática para experiências manuteníveis e performáticas.",
        },
        {
          id: "03",
          title: "Integração Full Stack",
          description:
            "Conectando backends .NET com frontends React através de APIs RESTful bem projetadas — garantindo fluxo de dados, autenticação e entrega de funcionalidades de ponta a ponta.",
        },
        {
          id: "04",
          title: "DevOps & Deploy",
          description:
            "Configurando containers Docker, CI/CD básico e deploys em nuvem (AWS e GCP) para suportar fluxos de-release confiáveis e ambientes consistentes.",
        },
      ],
    },
    resume: {
      label: "Meu Histórico",
      title: "Currículo",
      subtitle:
        "Uma jornada de aprendizado contínuo e construção de soluções impactantes.",
      tabs: ["Experiência", "Formação", "Habilidades", "Sobre mim"],
      whyHire: "Por que me contratar?",
      whyHireDesc:
        "Combino disciplina de engenharia de backend com versatilidade frontend — entrego soluções completas e bem estruturadas, não apenas partes isoladas.",
      experiences: [
        { date: "Set 2023 — Presente", role: "Desenvolvedor Full Stack", company: "19SL" },
      ],
      educations: [
        { year: "2022 — 2026", degree: "Ciência da Computação", institute: "Unif" },
        { year: "2024 — 2025", degree: "Engenharia DevOps", institute: "FIAP" },
        { year: "2021 — 2023", degree: "Proficiência em Inglês C1", institute: "IBL" },
        { year: "2021 — 2022", degree: "CS50's Introdução à Ciência da Computação", institute: "Harvard University" },
      ],
      aboutParts: [
        "Sou Desenvolvedor Full Stack com foco em engenharia de backend, atualmente cursando Ciência da Computação e atuando profissionalmente no ecossistema Microsoft.\n\nNo backend, desenvolvo APIs REST e regras de negócio usando C#, .NET Core e Entity Framework. Trabalho com bancos relacionais (SQL Server) e NoSQL (MongoDB), aplicando clean architecture e injeção de dependência para manter os sistemas sustentáveis.\n\nNo frontend, construo interfaces responsivas com React, Next.js e TypeScript — sempre priorizando performance e acessibilidade. Também tenho experiência estendendo C# para o navegador com Blazor Server/WASM.\n\nAlém de codar, gerencio deploys com Docker, sigo fluxos de Git em times Ágeis e me sinto confortável trabalhando em ambientes Linux.\n\nEstou em busca de oportunidades Full Stack ou Backend onde possa contribuir com sistemas bem estruturados e continuar crescendo como engenheiro.",
      ],
    },
    work: {
      label: "Meu Portfólio",
      title: "Trabalhos em Destaque",
      subtitle:
        "Uma coleção de projetos que demonstram minha expertise em diferentes áreas.",
      projects: [
        { id: "01", title: "Macaw English School", description: "Plataforma de Escola de Inglês" },
        { id: "02", title: "Macaw", description: "Rede Social" },
        { id: "03", title: "Snake's", description: "Mini-Jogo Snake" },
        { id: "04", title: "Blushify", description: "Loja de Cosméticos" },
      ],
    },
    contact: {
      label: "Entre em Contato",
      title: "Fale Comigo",
      subtitle:
        "Tem um projeto em mente? Vamos trabalhar juntos para transformar suas ideias em realidade.",
      formTitle: "Vamos Trabalhar Juntos",
      firstName: "Primeiro Nome",
      lastName: "Último Nome",
      email: "Endereço de E-mail",
      phone: "Número de Telefone",
      selectService: "Selecione um serviço",
      message: "Envie uma Mensagem",
      send: "Enviar Mensagem",
      sending: "Abrindo seu cliente de e-mail...",
      validation: {
        firstNameRequired: "Informe seu nome.",
        emailRequired: "Informe seu e-mail.",
        emailInvalid: "Informe um e-mail válido.",
        messageRequired: "Informe uma mensagem.",
      },
      mailtoNotice: "Seu cliente de e-mail deve abrir com a mensagem pronta para envio.",
      serviceOptions: ["Frontend", "Backend", "Mobile", "DevOps"],
      info: [
        { icon: "phone", label: "Telefone", value: "(+55) 21 99050-6596" },
        { icon: "email", label: "E-mail", value: "marcosvmdilly@gmail.com" },
        { icon: "map", label: "Endereço", value: "Rio de Janeiro, RJ - Brasil" },
        { icon: "time", label: "Horário de Trabalho", value: "Seg - Sex: 08:00 - 18:00 / Sáb - Dom: 08:00 - 14:00" },
        { icon: "message", label: "WhatsApp", value: "(+55) 21 99050-6596" },
        { icon: "globe", label: "Website", value: "www.mvdevelop.com.br" },
      ],
    },
    footer: {
      description:
        "Desenvolvedor Full Stack com foco em engenharia de backend, apaixonado por criar soluções digitais modernas, escaláveis e impactantes.",
      quickLinks: "Links Rápidos",
      connect: "Redes Sociais",
      copyright: "Todos os direitos reservados.",
      builtWith: "Projetado & Construído com",
    },
  },
} as const;
