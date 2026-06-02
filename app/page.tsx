import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResumeSection from "@/components/ResumeSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
