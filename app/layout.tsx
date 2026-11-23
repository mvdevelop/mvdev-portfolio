import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Unbounded } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import LenisScroll from "@/components/Lenis";
import { LanguageProvider } from "@/lib/LanguageContext";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const englishMetadata: Metadata = {
  metadataBase: new URL("https://www.mvdevelop.com.br"),
  title: {
    default: "MvDev | Full Stack Developer · Backend Engineering",
    template: "%s | MvDev Portfolio",
  },
  description:
    "Full Stack Developer specializing in C#, .NET, TypeScript, React and Next.js. Building scalable backend systems and modern web applications.",
  keywords: [
    "full stack developer",
    "backend engineer",
    "C#",
    ".NET",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Vinicius Dilly",
    "MVDevelop",
  ],
  authors: [{ name: "Vinicius Dilly" }],
  creator: "Vinicius Dilly",
  publisher: "MvDev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      pt: "/pt",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "MvDev | Full Stack Developer · Backend Engineering",
    description:
      "Full Stack Developer specializing in C#, .NET, TypeScript, React and Next.js. Building scalable backend systems and modern web applications.",
    siteName: "MvDev Portfolio",
    images: [
      {
        url: "/images/macaw-social-media-banner.png",
        width: 1200,
        height: 630,
        alt: "MvDev Portfolio - Full Stack Developer",
        type: "image/png",
      },
      {
        url: "/images/mvdevelop-newphoto-02.png",
        width: 320,
        height: 320,
        alt: "Vinicius Dilly - Full Stack Developer",
      },
    ],
    locale: "en_US",
    countryName: "Brazil",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mvdevelop",
    creator: "@mvdevelop",
    title: "MvDev | Full Stack Developer · Backend Engineering",
    description:
      "Full Stack Developer specializing in C#, .NET, TypeScript, React and Next.js.",
    images: ["/images/macaw-social-media-banner.png"],
  },
  icons: {
    icon: [
      { url: "/images/icon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.svg",
  },
  verification: {
    google: "your-google-site-verification",
  },
};

const portugueseMetadata: Metadata = {
  ...englishMetadata,
  title: {
    default: "MvDev | Desenvolvedor Full Stack · Engenharia de Backend",
    template: "%s | MvDev Portfolio",
  },
  description:
    "Desenvolvedor Full Stack especializado em C#, .NET, TypeScript, React e Next.js. Construindo sistemas backend escaláveis e aplicações web modernas.",
  keywords: [
    "desenvolvedor full stack",
    "engenheiro backend",
    "C#",
    ".NET",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Portfólio",
    "Vinicius Dilly",
    "MVDevelop",
  ],
  openGraph: {
    ...englishMetadata.openGraph!,
    locale: "pt_BR",
    title: "MvDev | Desenvolvedor Full Stack · Engenharia de Backend",
    description:
      "Desenvolvedor Full Stack especializado em C#, .NET, TypeScript, React e Next.js. Construindo sistemas backend escaláveis e aplicações web modernas.",
  },
  twitter: {
    ...englishMetadata.twitter!,
    title: "MvDev | Desenvolvedor Full Stack · Engenharia de Backend",
    description:
      "Full Stack Developer specializing in C#, .NET, TypeScript, React and Next.js.",
  },
};

// Dynamic metadata based on language detected from request headers
export async function generateMetadata({ searchParams }: { searchParams?: Promise<Record<string, string>> }): Promise<Metadata> {
  if (searchParams) {
    const params = await searchParams;
    if (params.lang === 'pt') return portugueseMetadata;
  }
  return englishMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${unbounded.variable}`}
      >
        {/* Skip to main content for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[var(--color-primary)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
          aria-label="Pular para o conteúdo principal"
        >
          Pular para o conteúdo principal
        </a>
        {/* Analytics - Plausible (privacy-friendly) */}
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "mvdevelop.com.br"}
          src="https://plausible.io/js/script.outbound-links.js"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <LenisScroll />
          <Nav />
          <main id="main-content">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}

// JSON-LD Structured Data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MvDev Portfolio",
  url: siteConfig.websiteUrl,
  description: "Full Stack Developer specializing in C#, .NET, TypeScript, React and Next.js",
  author: {
    "@type": "Person",
    name: "Vinicius Dilly",
    jobTitle: "Full Stack Developer",
    url: siteConfig.socialLinks.linkedin,
  },
  sameAs: [
    siteConfig.socialLinks.github,
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.instagram,
  ],
};

export const dynamic = 'force-static';
