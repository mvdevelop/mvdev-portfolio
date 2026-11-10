import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResumeSection from "@/components/ResumeSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.brand,
            url: siteConfig.websiteUrl,
            email: siteConfig.email,
            jobTitle: "Full Stack Developer",
            sameAs: Object.values(siteConfig.socialLinks),
          }),
        }}
      />
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
