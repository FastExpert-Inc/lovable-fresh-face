import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Zap, Clock, Users, Home } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import aerialNeighborhood from "@/assets/aerial-neighborhood.jpg";
import redHouse from "@/assets/red-house.jpg";

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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Aerial Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aerialNeighborhood}
          alt="Aerial view of neighborhood"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 lg:py-6">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
              <Home className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-display font-bold tracking-tight">
                <span className="text-foreground">BSell</span>
                <span className="text-muted-foreground font-normal"> Real Estate Agents</span>
              </h2>
              <p className="text-xs lg:text-sm text-muted-foreground font-medium">
                Presented by FastExpert
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-4 lg:py-8 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Find Top Selling</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Real Estate Agents
                </span>
              </h1>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg opacity-100 pointer-events-none z-10 text-muted-foreground" style={{ filter: 'none', transform: 'translateY(-50%) translateZ(0)' }}>📍</span>
                  <Input
                    type="text"
                    placeholder="Enter Your Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="relative z-0 pl-12 h-14 text-base bg-background/60 backdrop-blur-sm border-2 border-border hover:border-primary/30 focus:border-primary transition-all shadow-lg shadow-primary/5"
                    maxLength={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-14 px-10 text-base font-semibold whitespace-nowrap bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
                >
                  Continue
                </Button>
              </div>
            </form>

            {/* Features List */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-bold text-lg mb-1 text-foreground">Fast & Easy</h3>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Get connected to agents in less than 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div className="pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    We'll send multiple top performing agents for you to choose from.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - House in foreground with aerial background */}
          <div className="relative animate-scale-in lg:order-last order-first">
            {/* Container with aerial background */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border bg-gradient-to-br from-primary/5 to-accent/5">
              {/* Aerial neighborhood as background within the card */}
              <div className="absolute inset-0">
                <img
                  src={aerialNeighborhood}
                  alt="Aerial neighborhood view"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              </div>
              
              {/* Red house as foreground */}
              <div className="relative z-10 p-8 lg:p-12">
                <img
                  src={redHouse}
                  alt="Beautiful red house"
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-20 animate-fade-in">
                <div className="bg-background/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-border">
                  <p className="text-sm font-semibold text-foreground">
                    Top Rated Agents
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-secondary fill-secondary"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full blur-2xl opacity-30 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 -z-10" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
