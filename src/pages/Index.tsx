import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Problem from "@/components/Problem";
import Variants from "@/components/Variants";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Problem />
      <Variants />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
