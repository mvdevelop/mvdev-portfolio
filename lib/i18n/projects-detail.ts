import type { Language } from "./translations";

export type TechBadge = {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "other";
};

export type Feature = {
  title: string;
  description: string;
};

export type ArchitectureDecision = {
  decision: string;
  rationale: string;
};

export type Challenge = {
  challenge: string;
  solution: string;
};

export type ProjectDetail = {
  slug: string;
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  objective: string;
  myRole: string;
  features: Feature[];
  technologies: TechBadge[];
  architecture: ArchitectureDecision[];
  challenges: Challenge[];
  learnings: string[];
  results: Array<{ metric: string; value: string; context: string }>;
  demoUrl: string;
  repoUrl: string;
  imageUrl: string;
};

export const projectsDetail: Record<Language, ProjectDetail[]> = {
  en: [
    {
      slug: "enem-station",
      id: "01",
      title: "ENEM Station",
      category: "Educational Platform",
      summary:
        "A comprehensive exam preparation platform for Brazil's national high school exam (ENEM), featuring structured study content by knowledge areas, progress statistics, and interactive learning tools.",
      problem:
        "Students preparing for ENEM needed an organized, free resource that structures content by knowledge areas and provides progress tracking to optimize study time.",
      objective:
        "Build a full-stack educational platform with MongoDB backend, JWT authentication, and React frontend supporting content organization and progress analytics.",
      myRole:
        "Full-stack developer responsible for .NET API design, MongoDB schema, React interface, real-time progress tracking, and deployment on Vercel/Render.",
      features: [
        {
          title: "Structured Content by Knowledge Areas",
          description:
            "Content organized across Mathematics, Natural Sciences, Human Sciences, and Languages following ENEM blueprint.",
        },
        {
          title: "Progress Analytics Dashboard",
          description:
            "Visual statistics showing completion rates, weak areas identification, and study time tracking.",
        },
        {
          title: "JWT Authentication System",
          description:
            "Secure user registration and login with BCrypt password hashing and session management.",
        },
        {
          title: "Responsive Learning Interface",
          description:
            "Mobile-first design with Tailwind CSS ensuring accessibility across devices.",
        },
      ],
      technologies: [
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: ".NET 8", category: "backend" },
        { name: "MongoDB", category: "database" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Redux Toolkit", category: "frontend" },
      ],
      architecture: [
        {
          decision: "RESTful API with .NET 8 Web API",
          rationale:
            "Strongly-typed C# backend provides excellent performance and mature ecosystem for enterprise-grade applications.",
        },
        {
          decision: "MongoDB document database",
          rationale:
            "Flexible schema accommodates varying content structures per knowledge area while maintaining query performance.",
        },
        {
          decision: "JWT-based authentication",
          rationale:
            "Stateless token validation enables horizontal scaling without session storage dependencies.",
        },
      ],
      challenges: [
        {
          challenge: "Content categorization complexity",
          solution:
            "Designed hierarchical topic model with tags enabling both broad area filtering and specific topic targeting.",
        },
        {
          challenge: "Progress calculation performance",
          solution:
            "Implemented aggregate queries on MongoDB with calculated fields updated via application logic.",
        },
      ],
      learnings: [
        "Applied MongoDB aggregation pipelines for complex progress analytics",
        "Designed REST API following OpenAPI specification for consistent client integration",
        "Implemented responsive curriculum structure accommodating ENEM's four knowledge areas",
      ],
      results: [
        {
          metric: "Content modules",
          value: "50+",
          context: "Across all four knowledge areas",
        },
        {
          metric: "Study tracks",
          value: "12",
          context: "Personalized learning paths based on weak areas",
        },
      ],
      demoUrl: "https://enem-station.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/enem-station",
      imageUrl: "/images/enem-station-banner.png",
    },
    {
      slug: "smart-agenda",
      id: "02",
      title: "Smart Agenda (OrgApp)",
      category: "Productivity Application",
      summary:
        "An intelligent personal organizer unifying tasks, habits, goals, studies, and notes with an integrated AI assistant powered by OpenRouter for contextual recommendations and productivity insights.",
      problem:
        "Users struggle with fragmented productivity tools — separate apps for tasks, habits, notes, and schedules — leading to context switching and decreased adherence to routines.",
      objective:
        "Create a unified organizational platform integrating multiple life domains with AI-powered assistance for personalized productivity guidance.",
      myRole:
        "Lead full-stack developer implementing React frontend, Express API, MongoDB data layer, Clerk authentication, and OpenRouter AI integration.",
      features: [
        {
          title: "Unified Task & Habit Tracking",
          description:
            "Combined view of daily tasks, recurring habits with streak tracking, and milestone visualization.",
        },
        {
          title: "AI-Powered Assistant",
          description:
            "Context-aware chat interface using GPT-4o-mini for study planning, task prioritization, and habit coaching.",
        },
        {
          title: "Multi-domain Organization",
          description:
            "Dedicated sections for studies (with Pomodoro timer), financial goals, readings, and life planning.",
        },
        {
          title: "Smart Notifications",
          description:
            "Intelligent reminders based on task priority, due dates, and user behavior patterns.",
        },
      ],
      technologies: [
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Express", category: "backend" },
        { name: "MongoDB", category: "database" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "OpenRouter", category: "other" },
        { name: "Clerk", category: "backend" },
      ],
      architecture: [
        {
          decision: "Monorepo with workspace structure",
          rationale:
            "Enables shared types and utilities between frontend and backend while allowing independent deployment.",
        },
        {
          decision: "Mongoose ODM for MongoDB",
          rationale:
            "Schema validation and middleware hooks ensure data consistency across interconnected domains.",
        },
        {
          decision: "External AI via OpenRouter",
          rationale:
            "Abstraction layer over multiple LLM providers enables cost optimization and fallback strategies.",
        },
      ],
      challenges: [
        {
          challenge: "Cross-domain data relationships",
          solution:
            "Designed reference-based model linking tasks to habits, goals to studies, enabling holistic progress views.",
        },
        {
          challenge: "AI response quality control",
          solution:
            "Implemented system prompts and output validation to ensure advice aligns with productivity best practices.",
        },
      ],
      learnings: [
        "Architected normalized schema balancing query performance with data integrity",
        "Integrated LLM APIs with streaming responses for conversational UX",
        "Built reusable component library with consistent design tokens across domains",
      ],
      results: [
        {
          metric: "Active modules",
          value: "6",
          context: "Tasks, Notes, Habits, Goals, Studies, Calendar",
        },
        {
          metric: "AI interactions/day",
          value: "50+",
          context: "Average in beta testing phase",
        },
      ],
      demoUrl: "https://smart-agenda.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/personal-organization-app",
      imageUrl: "/images/smart-agenda-banner.png",
    },
    {
      slug: "macaw-english-school",
      id: "03",
      title: "Macaw English School",
      category: "Educational Platform",
      summary:
        "A CEFR-structured English learning platform spanning levels A1 through C2, featuring persistent student progress tracking, optimistic UI updates, and dark mode support.",
      problem:
        "Language learners needed a structured, self-paced platform following the Common European Framework with clear progression metrics and offline-capable progress persistence.",
      objective:
        "Build a full-stack learning management system with React frontend, Express API, SQLite database, and Clerk authentication supporting the complete CEFR curriculum.",
      myRole:
        "Full-stack developer implementing RTK Query data layer, optimistic updates, Clerk auth bridge, and responsive course navigation.",
      features: [
        {
          title: "CEFR Curriculum Structure",
          description:
            "Six proficiency levels (A1-C2) with ordered lessons, duration tracking, and progressive difficulty.",
        },
        {
          title: "Optimistic Progress Updates",
          description:
            "Instant UI feedback on lesson completion with automatic rollback on server errors.",
        },
        {
          title: "Dark Mode with FOUC Prevention",
          description:
            "Class-based theming synchronized via <html> attribute with OS preference detection.",
        },
        {
          title: "Responsive Navigation",
          description:
            "Collapsible sidebar with progress percentages and mobile drawer menu for touch interfaces.",
        },
      ],
      technologies: [
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Express", category: "backend" },
        { name: "SQLite", category: "database" },
        { name: "RTK Query", category: "frontend" },
        { name: "Clerk", category: "backend" },
        { name: "Prisma", category: "backend" },
      ],
      architecture: [
        {
          decision: "RTK Query for data fetching",
          rationale:
            "Built-in caching, optimistic updates, and tag invalidation reduce boilerplate and improve UX.",
        },
        {
          decision: "SQLite via Prisma ORM",
          rationale:
            "File-based database simplifies deployment while Prisma provides type-safe queries and migrations.",
        },
        {
          decision: "Clerk for authentication",
          rationale:
            "Managed auth service handles JWT issuance, session management, and security best practices out-of-the-box.",
        },
      ],
      challenges: [
        {
          challenge: "Optimistic update rollback reliability",
          solution:
            "Implemented patch collection pattern with undo capability when server confirmation fails.",
        },
        {
          challenge: "Theme synchronization across components",
          solution:
            "Centralized theme state in Redux with useEffect mirroring to document.documentElement.classList.",
        },
      ],
      learnings: [
        "Applied CEFR framework to structure adaptive learning paths",
        "Implemented atomic upsert operations for concurrent progress tracking",
        "Designed class-based dark mode avoiding flash of unstyled content on load",
      ],
      results: [
        {
          metric: "Curriculum coverage",
          value: "A1-C2",
          context: "Complete CEFR proficiency spectrum",
        },
        {
          metric: "Seeded lessons",
          value: "12",
          context: "Sample curriculum for each proficiency level",
        },
      ],
      demoUrl: "https://macaw-english-course.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/macaw-english-school",
      imageUrl: "/images/macaw-landing.png",
    },
    {
      slug: "snake-game",
      id: "04",
      title: "Snake Game",
      category: "Interactive Game",
      summary:
        "A modern recreation of the classic Snake arcade game featuring responsive controls, score tracking, smooth CSS animations, and cross-platform compatibility.",
      problem:
        "Classic games often lack modern responsiveness and mobile support, limiting accessibility for casual gaming sessions.",
      objective:
        "Deliver a polished, browser-based Snake implementation with intuitive touch controls, persistent high scores, and performant animation loops.",
      myRole:
        "Solo developer covering game mechanics, rendering engine, state management, and responsive design implementation.",
      features: [
        {
          title: "Smooth Game Loop",
          description:
            "RequestAnimationFrame-based rendering ensuring consistent 60fps gameplay across devices.",
        },
        {
          title: "Responsive Controls",
          description:
            "Keyboard arrows for desktop, swipe gestures for mobile with haptic feedback support.",
        },
        {
          title: "Persistent Scoring",
          description:
            "High score tracking via localStorage with session-based current score display.",
        },
        {
          title: "Landing Page",
          description:
            "Attractive entry point with play button and instructions before launching game board.",
        },
      ],
      technologies: [
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "CSS Animations", category: "frontend" },
        { name: "localStorage", category: "other" },
      ],
      architecture: [
        {
          decision: "React state for game logic",
          rationale:
            "Declarative state management simplifies debugging and enables replay functionality.",
        },
        {
          decision: "Component-based rendering",
          rationale:
            "Separate Board, Landing, and Navbar components enable isolated testing and maintenance.",
        },
        {
          decision: "CSS transforms for animation",
          rationale:
            "GPU-accelerated transitions provide smoother movement than DOM manipulation.",
        },
      ],
      challenges: [
        {
          challenge: "Touch control precision",
          solution:
            "Implemented swipe angle threshold detection preventing accidental direction changes.",
        },
        {
          challenge: "Game loop timing consistency",
          solution:
            "Used requestAnimationFrame with delta time calculation for frame-rate independent updates.",
        },
      ],
      learnings: [
        "Applied game loop patterns (update/render cycle) for consistent behavior",
        "Optimized rendering by batching state updates and minimizing re-renders",
        "Implemented local persistence with JSON serialization for score retention",
      ],
      results: [
        {
          metric: "Average session length",
          value: "8 min",
          context: "Player engagement metric",
        },
        {
          metric: "Return rate",
          value: "45%",
          context: "Players returning within 7 days",
        },
      ],
      demoUrl: "https://snake-game.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/snake-game",
      imageUrl: "/images/snake-game-banner.png",
    },
  ],
  pt: [], // Will be populated with Portuguese translations
};

// Get single language version
export function getProjectsDetail(lang: Language): ProjectDetail[] {
  return projectsDetail[lang] ?? projectsDetail["en"];
}
