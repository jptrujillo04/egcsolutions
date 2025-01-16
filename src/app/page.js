import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Services from "@/components/Services/services";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Services />
      </main>
    </div>
  );
}
