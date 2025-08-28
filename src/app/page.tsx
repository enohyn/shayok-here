import Image from "next/image";
import SiteHeader from "../../components/Header/site-header";
import SiteFooter from "../../components/Footer/site-footer";
import HeroSection from "../../components/Hero/hero-section";

export default function Home() {
  return (
    <div className="bg-fixed bg-gradient-to-tr from-zinc-900 via-zinc-900 to-teal-900 w-screen">
      <SiteHeader />
      <HeroSection />
      <SiteFooter />
    </div>
  );
}
