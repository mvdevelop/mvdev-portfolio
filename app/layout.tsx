import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Unbounded } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import LenisScroll from "@/components/Lenis";
import { LanguageProvider } from "@/lib/LanguageContext";

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

export const metadata: Metadata = {
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
        url: "/images/mvdevelop.jpeg",
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
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/images/icon.ico",
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${unbounded.variable}`}
      >
        <LanguageProvider>
          <LenisScroll />
          <Nav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
