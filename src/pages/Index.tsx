import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import OtherSection from "@/components/OtherSection";
import PageDecor from "@/components/PageDecor";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <PageDecor />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <OtherSection />
      </div>
    </div>
  );
};

export default Index;
