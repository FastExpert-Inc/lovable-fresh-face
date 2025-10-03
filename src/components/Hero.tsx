import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode.trim()) {
      toast({
        title: "Zip code required",
        description: "Please enter your zip code to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{5}$/.test(zipCode)) {
      toast({
        title: "Invalid zip code",
        description: "Please enter a valid 5-digit zip code.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Searching...",
      description: `Finding top agents in ${zipCode}`,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Beautiful neighborhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h2 className="text-lg font-medium opacity-90">BSell Real Estate Agents</h2>
            <p className="text-sm opacity-75">Presented by FastExpert</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Top Selling
            <br />
            <span className="bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
              Real Estate Agents
            </span>
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mt-12 mb-12 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter Your Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="pl-10 h-14 text-lg bg-white/95 backdrop-blur-sm border-white/20 focus:border-white shadow-lg"
                  maxLength={5}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                variant="secondary"
                className="h-14 px-8 text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Continue
              </Button>
            </div>
          </form>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all animate-scale-in">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast & Easy</h3>
              <p className="text-sm opacity-90">Quick and simple process to find the perfect agent</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">24 Hour Response</h3>
              <p className="text-sm opacity-90">Get connected to agents in less than 24 hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Multiple Agents</h3>
              <p className="text-sm opacity-90">We'll send multiple top performing agents for you to choose from</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
