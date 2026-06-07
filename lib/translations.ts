export const translations = {
  en: {
    nav: {
      links: [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "Resume", href: "#resume" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
      ],
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hello I'm",
      name: "Vinicius Dilly",
      descParts: [
        "Developing ",
        "solutions",
        " for each type of problem for ",
        "all people",
        ".",
      ],
      downloadCV: "Download CV",
      stats: {
        experience: "+ Years of\nExperience",
        completed: "Completed\nProjects",
        technologies: "Technologies\nMastered",
        commits: "Code\nCommits",
      },
    },
    services: {
      label: "What I Do",
      title: "My Services",
      subtitle:
        "Specialized in C#, .NET & Blazor on the backend, TypeScript & React on the frontend — building full stack solutions end to end.",
      items: [
        {
          id: "01",
          title: "C# / .NET & Blazor",
          description:
            "Building robust APIs and interactive web applications with C#, .NET Core, and Blazor Server/WASM — focusing on clean architecture, performance, and maintainability.",
        },
        {
          id: "02",
          title: "TypeScript & React",
          description:
            "Crafting modern, responsive user interfaces with TypeScript, React, and Next.js. Leveraging component-driven design to deliver seamless user experiences.",
        },
        {
          id: "03",
          title: "Full Stack Integration",
          description:
            "Connecting .NET backends with React frontends through RESTful APIs — ensuring smooth data flow, authentication, and end-to-end feature delivery.",
        },
        {
          id: "04",
          title: "DevOps & Deployment",
          description:
            "Managing CI/CD pipelines, Docker containerization, and cloud deployments (AWS, GCP) to streamline development workflows and ensure reliable releases.",
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
        "I am a dedicated and skilled developer with a passion for creating innovative solutions.",
      experiences: [
        { date: "2025 - Present", role: "Full Stack Developer", company: "19SL Inc." },
        { date: "2025 - 2025", role: "Full Stack Developer", company: "Brs Inc." },
        { date: "2024 - 2024", role: "Frontend Developer", company: "Brs Inc." },
        { date: "2023 - 2023", role: "Frontend Developer", company: "19SL Inc." },
      ],
      educations: [
        { year: "2022 - 2026", degree: "Computer Science", institute: "Unif" },
        { year: "2024 - 2025", degree: "DevOps Engineering", institute: "Fiap" },
        { year: "2021 - 2023", degree: "English Proficiency C1", institute: "IBL" },
        { year: "2021 - 2022", degree: "CS50's Int. to Computer Sci.", institute: "HUIT" },
      ],
      aboutParts: [
        "Hello! I'm a ",
        "Full Stack Developer",
        " specialized in ",
        "C#",
        ", ",
        ".NET",
        " & ",
        "Blazor",
        " on the backend, and ",
        "TypeScript",
        " & ",
        "React",
        " on the frontend — building complete, end-to-end solutions from database to user interface.\n\nOn the ",
        "backend",
        ", I architect clean, scalable APIs with .NET Core, Entity Framework, and SQL/NoSQL databases, applying clean architecture and dependency injection principles. I also build interactive web UIs with Blazor Server and WASM, extending C# directly to the browser without writing a single line of JavaScript.\n\nOn the ",
        "frontend",
        ", I craft modern, responsive interfaces with React, Next.js, and Tailwind CSS — always prioritizing performance, accessibility, and pixel-perfect user experiences. TypeScript keeps the codebase type-safe, scalable, and a pleasure to maintain.\n\nIn ",
        "DevOps",
        ", I manage CI/CD pipelines, Docker containerization, and cloud deployments on AWS and GCP to ensure reliable, automated releases. I'm experienced with Git workflows, Linux servers, container orchestration, and infrastructure as code.\n\nI'm always exploring emerging technologies and refining best practices to deliver impactful, real-world digital products.",
      ],
    },
    work: {
      label: "My Portfolio",
      title: "Featured Work",
      subtitle:
        "A collection of projects that showcase my expertise across different domains.",
      projects: [
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
      serviceOptions: ["Frontend", "Backend", "Mobile", "DevOps"],
      info: [
        { icon: "phone", label: "Phone", value: "(+55) 21 99050-6596" },
        { icon: "email", label: "E-mail", value: "marcosvmdilly@gmail.com" },
        {
          icon: "map",
          label: "Address",
          value: "Rio de Janeiro, RJ - Brazil",
        },
        {
          icon: "time",
          label: "Working Hours",
          value: "Mon - Fri: 08:00 - 18:00 / Sat - Sun: 08:00 - 14:00",
        },
        {
          icon: "message",
          label: "WhatsApp",
          value: "(+55) 21 99050-6596",
        },
        { icon: "globe", label: "Website", value: "www.mvdevelop.com.br" },
      ],
    },
    footer: {
      description:
        "Full Stack Developer passionate about creating modern, scalable, and impactful digital solutions.",
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
      ],
    },
    hero: {
      role: "Desenvolvedor Full Stack",
      greeting: "Olá, eu sou",
      name: "Vinicius Dilly",
      descParts: [
        "Desenvolvendo ",
        "soluções",
        " para cada tipo de problema para ",
        "todas as pessoas",
        ".",
      ],
      downloadCV: "Baixar Currículo",
      stats: {
        experience: "+ Anos de\nExperiência",
        completed: "Projetos\nConcluídos",
        technologies: "Tecnologias\nDominadas",
        commits: "Commits de\nCódigo",
      },
    },
    services: {
      label: "O Que Eu Faço",
      title: "Meus Serviços",
      subtitle:
        "Especializado em C#, .NET & Blazor no backend, TypeScript & React no frontend — construindo soluções full stack de ponta a ponta.",
      items: [
        {
          id: "01",
          title: "C# / .NET & Blazor",
          description:
            "Construindo APIs robustas e aplicações web interativas com C#, .NET Core e Blazor Server/WASM — foco em arquitetura limpa, performance e manutenibilidade.",
        },
        {
          id: "02",
          title: "TypeScript & React",
          description:
            "Criando interfaces modernas e responsivas com TypeScript, React e Next.js. Utilizando design orientado a componentes para entregar experiências de usuário excepcionais.",
        },
        {
          id: "03",
          title: "Integração Full Stack",
          description:
            "Conectando backends .NET com frontends React através de APIs RESTful — garantindo fluxo de dados, autenticação e entrega de funcionalidades de ponta a ponta.",
        },
        {
          id: "04",
          title: "DevOps & Deploy",
          description:
            "Gerenciando pipelines CI/CD, conteinerização com Docker e deploys em nuvem (AWS, GCP) para otimizar fluxos de desenvolvimento e garantir entregas confiáveis.",
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
        "Sou um desenvolvedor dedicado e habilidoso, apaixonado por criar soluções inovadoras.",
      experiences: [
        { date: "2025 - Presente", role: "Desenvolvedor Full Stack", company: "19SL Inc." },
        { date: "2025 - 2025", role: "Desenvolvedor Full Stack", company: "Brs Inc." },
        { date: "2024 - 2024", role: "Desenvolvedor Frontend", company: "Brs Inc." },
        { date: "2023 - 2023", role: "Desenvolvedor Frontend", company: "19SL Inc." },
      ],
      educations: [
        { year: "2022 - 2026", degree: "Ciência da Computação", institute: "Unif" },
        { year: "2024 - 2025", degree: "Engenharia DevOps", institute: "Fiap" },
        { year: "2021 - 2023", degree: "Proficiência em Inglês C1", institute: "IBL" },
        { year: "2021 - 2022", degree: "CS50's Introdução à CC", institute: "HUIT" },
      ],
      aboutParts: [
        "Olá! Sou ",
        "Desenvolvedor Full Stack",
        " especializado em ",
        "C#",
        ", ",
        ".NET",
        " & ",
        "Blazor",
        " no backend, e ",
        "TypeScript",
        " & ",
        "React",
        " no frontend — construindo soluções completas de ponta a ponta, do banco de dados à interface do usuário.\n\nNo ",
        "backend",
        ", arquiteto APIs limpas e escaláveis com .NET Core, Entity Framework e bancos SQL/NoSQL, aplicando clean architecture e injeção de dependência. Também construo interfaces web interativas com Blazor Server e WASM, levando o C# diretamente ao navegador sem precisar escrever JavaScript.\n\nNo ",
        "frontend",
        ", crio interfaces modernas e responsivas com React, Next.js e Tailwind CSS — sempre priorizando performance, acessibilidade e experiências de usuário refinadas. TypeScript mantém a base de código type-safe, escalável e prazerosa de manter.\n\nEm ",
        "DevOps",
        ", gerencio pipelines CI/CD, conteinerização com Docker e deploys em nuvem (AWS e GCP) para garantir entregas automatizadas e confiáveis. Tenho experiência com Git workflows, servidores Linux, orquestração de containers e infraestrutura como código.\n\nEstou sempre explorando novas tecnologias e refinando melhores práticas para entregar produtos digitais impactantes e prontos para o mundo real.",
      ],
    },
    work: {
      label: "Meu Portfólio",
      title: "Trabalhos em Destaque",
      subtitle:
        "Uma coleção de projetos que mostram minha expertise em diferentes domínios.",
      projects: [
        {
          id: "01",
          title: "Macaw English School",
          description: "Plataforma de Escola de Inglês",
          tech: ["TS", "React Vite", ".Net"],
          img: "/images/macaw-landing.png",
          href: "https://macaw-english-course.vercel.app/",
          repo: "https://github.com/mvdevelop/macaw-english-school",
        },
        {
          id: "02",
          title: "Macaw",
          description: "Rede Social",
          tech: ["TS", "NextJs", "Supabase"],
          img: "/images/new-macaw-banner.png",
          href: "https://macaw-social-media.vercel.app/",
          repo: "https://github.com/mvdevelop/macaw-social-media",
        },
        {
          id: "03",
          title: "Snake's",
          description: "Mini-Jogo Snake",
          tech: ["JS", "React", "Tailwindcss"],
          img: "/images/new-snakegame-banner.png",
          href: "https://snake-game-inky-pi.vercel.app/",
          repo: "https://github.com/mvdevelop/snake-game",
        },
        {
          id: "04",
          title: "Blushify",
          description: "Loja de Cosméticos",
          tech: ["JS", "React", "Tailwindcss"],
          img: "/images/new-blushify-banner.png",
          href: "https://ecommerce-beauty-ashy.vercel.app/",
          repo: "https://github.com/mvdevelop/ecommerce-beauty",
        },
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
      serviceOptions: ["Frontend", "Backend", "Mobile", "DevOps"],
      info: [
        { icon: "phone", label: "Telefone", value: "(+55) 21 99050-6596" },
        { icon: "email", label: "E-mail", value: "marcosvmdilly@gmail.com" },
        {
          icon: "map",
          label: "Endereço",
          value: "Rio de Janeiro, RJ - Brasil",
        },
        {
          icon: "time",
          label: "Horário de Trabalho",
          value: "Seg - Sex: 08:00 - 18:00 / Sáb - Dom: 08:00 - 14:00",
        },
        {
          icon: "message",
          label: "WhatsApp",
          value: "(+55) 21 99050-6596",
        },
        { icon: "globe", label: "Website", value: "www.mvdevelop.com.br" },
      ],
    },
    footer: {
      description:
        "Desenvolvedor Full Stack apaixonado por criar soluções digitais modernas, escaláveis e impactantes.",
      quickLinks: "Links Rápidos",
      connect: "Redes Sociais",
      copyright: "Todos os direitos reservados.",
      builtWith: "Projetado & Construído com",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];
