import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Services from "@/components/Services/services";
import BrandsSection from "@/components/BrandSection/Brand";
import SectorsSection from "@/components/SectorSection/Sector";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Services />
        <BrandsSection />
        <SectorsSection />
      </main>
    </div>
  );
}
