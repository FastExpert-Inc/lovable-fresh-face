import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
