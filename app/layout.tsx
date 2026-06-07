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
  title: "MvDev | Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and .NET. Building modern and scalable web applications.",
  icons: {
    icon: "/images/icon.ico",
    shortcut: "/images/icon.ico",
    apple: "/images/icon.ico",
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
