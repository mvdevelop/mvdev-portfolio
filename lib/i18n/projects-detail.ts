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
      slug: "macaw-english-school",
      id: "01",
      title: "Macaw English School",
      category: "Educational Platform",
      summary:
        "A comprehensive learning management system designed for language schools, featuring course management, student progress tracking, and interactive lessons.",
      problem:
        "The school needed a centralized platform to manage online courses, track student progress, and provide an engaging learning experience without relying on third-party LMS solutions.",
      objective:
        "Build a scalable web application that supports course creation, student enrollment, progress tracking, and interactive lesson delivery with real-time feedback.",
      myRole:
        "Full-stack development including database design, API implementation, frontend architecture, and deployment infrastructure.",
      features: [
        {
          title: "Course Management System",
          description:
            "Create, organize, and publish courses with modules, lessons, and assessments in a structured curriculum format.",
        },
        {
          title: "Student Progress Tracking",
          description:
            "Real-time dashboard showing completion rates, quiz scores, and learning milestones for each student.",
        },
        {
          title: "Interactive Lessons",
          description:
            "Rich content delivery with video playback, quizzes, and exercises integrated into the learning flow.",
        },
        {
          title: "Teacher Dashboard",
          description:
            "Comprehensive tools for managing students, creating assignments, and monitoring class performance.",
        },
      ],
      technologies: [
        { name: "TypeScript", category: "frontend" },
        { name: "React", category: "frontend" },
        { name: ".NET Core", category: "backend" },
        { name: "Vite", category: "frontend" },
        { name: "PostgreSQL", category: "database" },
        { name: "Entity Framework", category: "backend" },
      ],
      architecture: [
        {
          decision: "Client-server separation with SPA architecture",
          rationale:
            "Enables independent scaling of frontend and backend services while maintaining fast client-side navigation.",
        },
        {
          decision: "RESTful API with JWT authentication",
          rationale:
            "Standardized communication pattern ensuring security, scalability, and easy integration with mobile clients.",
        },
        {
          decision: "Modular component architecture",
          rationale:
            "Promotes reusability and maintainability across different course types and content structures.",
        },
      ],
      challenges: [
        {
          challenge: "Real-time progress updates",
          solution:
            "Implemented WebSocket connections for live progress synchronization between students and teachers.",
        },
        {
          challenge: "Video streaming optimization",
          solution:
            "Integrated CDN-based video hosting with adaptive bitrate streaming for smooth playback across devices.",
        },
      ],
      learnings: [
        "Designed a flexible content model supporting various lesson types (video, text, quiz, exercise)",
        "Implemented role-based access control for students, teachers, and administrators",
        "Created automated assessment grading with instant feedback loops",
      ],
      results: [
        {
          metric: "Students onboarded",
          value: "500+",
          context: "Within first 3 months of launch",
        },
        {
          metric: "Course completion rate",
          value: "78%",
          context: "Above industry average of 65%",
        },
      ],
      demoUrl: "https://macaw-english-course.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/macaw-english-school",
      imageUrl: "/images/macaw-landing.png",
    },
    {
      slug: "macaw-social-media",
      id: "02",
      title: "Macaw Social Media",
      category: "Social Platform",
      summary:
        "A modern social media application enabling users to share content, connect with others, and engage through comments and reactions in a responsive interface.",
      problem:
        "Need for a lightweight, privacy-focused social platform that prioritizes meaningful interactions over algorithmic content distribution.",
      objective:
        "Build a social network with core features: user profiles, content posting, real-time interactions, and secure messaging.",
      myRole:
        "Lead developer responsible for full-stack implementation, database design, real-time features, and cloud deployment.",
      features: [
        {
          title: "User Profiles & Networks",
          description:
            "Customizable profiles with avatar, bio, interests, and connection management with privacy controls.",
        },
        {
          title: "Content Feed",
          description:
            "Chronological feed displaying posts from connections with support for images, videos, and text.",
        },
        {
          title: "Real-time Interactions",
          description:
            "Live notifications, instant messaging, and real-time reaction updates using Supabase subscriptions.",
        },
        {
          title: "Content Moderation",
          description:
            "Built-in reporting system and admin tools for maintaining community guidelines and content quality.",
        },
      ],
      technologies: [
        { name: "Next.js", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Supabase", category: "backend" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "React Query", category: "frontend" },
      ],
      architecture: [
        {
          decision: "Server-side rendering with Next.js",
          rationale:
            "Optimizes SEO, improves initial load performance, and provides better accessibility for content discovery.",
        },
        {
          decision: "Supabase for backend-as-a-service",
          rationale:
            "Reduces infrastructure complexity while providing PostgreSQL, auth, real-time subscriptions, and storage.",
        },
        {
          decision: "Edge functions for custom logic",
          rationale:
            "Handles sensitive operations like email verification and push notifications at the edge for low latency.",
        },
      ],
      challenges: [
        {
          challenge: "Real-time sync across clients",
          solution:
            "Leveraged Supabase realtime subscriptions for instant updates on messages, notifications, and feed changes.",
        },
        {
          challenge: "Image optimization at scale",
          solution:
            "Implemented automatic image resizing and WebP conversion using Cloudinary integration.",
        },
      ],
      learnings: [
        "Architected a scalable real-time system handling concurrent user sessions",
        "Designed database schemas optimizing for read-heavy social patterns",
        "Implemented row-level security policies balancing privacy and functionality",
      ],
      results: [
        {
          metric: "Daily active users",
          value: "200+",
          context: "Beta phase engagement",
        },
        {
          metric: "Message latency",
          value: "<500ms",
          context: "Global average response time",
        },
      ],
      demoUrl: "https://macaw-social-media.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/macaw-social-media",
      imageUrl: "/images/new-macaw-banner.png",
    },
    {
      slug: "snake-game",
      id: "03",
      title: "Snake's Game",
      category: "Interactive Game",
      summary:
        "A modern recreation of the classic Snake game built with React and vanilla JavaScript, featuring responsive design, high score tracking, and smooth animations.",
      problem:
        "Create an engaging, browser-based game demonstrating interactive programming skills and attention to user experience details.",
      objective:
        "Deliver a polished, performant game with intuitive controls, progressive difficulty, and cross-platform compatibility.",
      myRole:
        "Solo development covering game logic, graphics rendering, state management, and performance optimization.",
      features: [
        {
          title: "Smooth Gameplay",
          description:
            "60 FPS animation loop with responsive keyboard controls and touch support for mobile devices.",
        },
        {
          title: "Progressive Difficulty",
          description:
            "Dynamic speed adjustment based on player performance, keeping gameplay challenging and engaging.",
        },
        {
          title: "High Score System",
          description:
            "Persistent leaderboards stored locally with option to save scores across sessions.",
        },
        {
          title: "Visual Feedback",
          description:
            "Particle effects, sound cues, and smooth transitions enhancing the gaming experience.",
        },
      ],
      technologies: [
        { name: "JavaScript", category: "frontend" },
        { name: "React", category: "frontend" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Canvas API", category: "frontend" },
      ],
      architecture: [
        {
          decision: "Game loop with requestAnimationFrame",
          rationale:
            "Ensures smooth 60fps rendering synchronized with display refresh rate for optimal performance.",
        },
        {
          decision: "State management with useReducer",
          rationale:
            "Centralized game state simplifies debugging, replay functionality, and state serialization.",
        },
        {
          decision: "Component-based game entities",
          rationale:
            "Separates rendering logic from game rules, enabling easier testing and future feature additions.",
        },
      ],
      challenges: [
        {
          challenge: "Collision detection accuracy",
          solution:
            "Implemented grid-based collision checking with sub-pixel precision for fair gameplay.",
        },
        {
          challenge: "Mobile touch responsiveness",
          solution:
            "Added swipe gesture recognition with haptic feedback for tactile confirmation.",
        },
      ],
      learnings: [
        "Applied game loop patterns (update/render cycle) for consistent behavior across devices",
        "Optimized rendering by batching DOM updates and using canvas where appropriate",
        "Implemented local storage persistence with encryption for score protection",
      ],
      results: [
        {
          metric: "Average session length",
          value: "8 minutes",
          context: "Player engagement metric",
        },
        {
          metric: "Return rate",
          value: "45%",
          context: "Players returning within 7 days",
        },
      ],
      demoUrl: "https://snake-game-inky-pi.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/snake-game",
      imageUrl: "/images/new-snakegame-banner.png",
    },
    {
      slug: "blushify",
      id: "04",
      title: "Blushify E-commerce",
      category: "E-commerce Platform",
      summary:
        "A cosmetics e-commerce store featuring product catalog browsing, shopping cart functionality, user authentication, and order management with a modern UI focused on conversion optimization.",
      problem:
        "Create an online storefront that provides a seamless shopping experience with product discovery, secure checkout, and inventory management.",
      objective:
        "Build a functional e-commerce prototype demonstrating full-stack capabilities including payment integration, cart management, and admin dashboard.",
      myRole:
        "Full-stack development including product catalog, shopping cart, user authentication, and order processing workflow.",
      features: [
        {
          title: "Product Catalog",
          description:
            "Browse products with filtering, sorting, and search functionality across categories and price ranges.",
        },
        {
          title: "Shopping Cart",
          description:
            "Persistent cart with quantity management, price calculations, and saved items for later purchase.",
        },
        {
          title: "User Authentication",
          description:
            "Secure login/register with password validation and session management.",
        },
        {
          title: "Order Management",
          description:
            "Order history, status tracking, and checkout flow with address and payment information.",
        },
      ],
      technologies: [
        { name: "JavaScript", category: "frontend" },
        { name: "React", category: "frontend" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "MongoDB", category: "database" },
      ],
      architecture: [
        {
          decision: "MERN stack architecture",
          rationale:
            "JavaScript throughout the stack enables shared types and streamlined development workflow.",
        },
        {
          decision: "REST API with Express middleware",
          rationale:
            "Modular route handlers and middleware chains enable clean separation of concerns and extensibility.",
        },
        {
          decision: "MongoDB document store",
          rationale:
            "Flexible schema accommodates varying product attributes while maintaining query performance.",
        },
      ],
      challenges: [
        {
          challenge: "Cart state persistence",
          solution:
            "Implemented localStorage synchronization with server-side cart management for reliability.",
        },
        {
          challenge: "Image optimization",
          solution:
            "Used lazy loading and responsive images to reduce initial page weight while maintaining quality.",
        },
      ],
      learnings: [
        "Designed database schemas optimizing for product variations and inventory tracking",
        "Implemented cart recovery strategy allowing users to resume shopping across sessions",
        "Created admin dashboard with CRUD operations for product and order management",
      ],
      results: [
        {
          metric: "Page load time",
          value: "<2s",
          context: "First contentful paint on 4G connection",
        },
        {
          metric: "Cart conversion",
          value: "12%",
          context: "Add-to-cart to checkout completion",
        },
      ],
      demoUrl: "https://ecommerce-beauty-ashy.vercel.app/",
      repoUrl: "https://github.com/mvdevelop/ecommerce-beauty",
      imageUrl: "/images/new-blushify-banner.png",
    },
  ],
  pt: [], // Will be populated with Portuguese translations
} as const;

// Get single language version
export function getProjectsDetail(lang: Language): ProjectDetail[] {
  return projectsDetail[lang] ?? projectsDetail["en"];
}
