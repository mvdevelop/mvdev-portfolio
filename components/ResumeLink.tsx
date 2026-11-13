"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { siteConfig } from "@/lib/site-config";

type ResumeLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ResumeLink({ className = "", children }: ResumeLinkProps) {
  const { language } = useLanguage();
  const resumePath = language === "pt" ? siteConfig.resume.pt : siteConfig.resume.en;

  return (
    <Link
      href={resumePath}
      download
      className={`inline-flex items-center ${className}`}
      aria-label={`Download CV in ${language === "pt" ? "Portuguese" : "English"}`}
    >
      {children}
    </Link>
  );
}
