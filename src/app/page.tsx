import SiteHeader from "../../components/Header/site-header";
import SiteFooter from "../../components/Footer/site-footer";
import HeroSection from "../../components/Hero/hero-section";
import TechStack from "../../components/TechStack/tech-stack";
import ProjectExperience from "../../components/project-experience/project-experience";

export default function Home() {
  return (
    <div className="w-screen">
      <SiteHeader />
      <HeroSection />
      <TechStack />
      <ProjectExperience />
      <SiteFooter />
    </div>
  );
}
