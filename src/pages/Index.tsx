import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <GettingStarted />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
