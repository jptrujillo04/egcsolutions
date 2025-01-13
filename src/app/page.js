import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <main
        style={{
          textAlign: "center",
          padding: "4rem 1rem",
          backgroundColor: "#f8f9fa",
        }}
      >
        <HeroSection />
      </main>
    </div>
  );
}
