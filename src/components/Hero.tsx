import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Zap, Clock, Users } from "lucide-react";
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
      <nav className="container mx-auto px-4 py-8 lg:py-10">
        <div className="animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-display font-bold">
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">
              BSell
            </span>
            <span className="text-foreground"> Real Estate Agents</span>
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground mt-1.5 font-medium">
            Presented by FastExpert
          </p>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] tracking-tight">
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
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    type="text"
                    placeholder="Enter Your Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="pl-12 h-14 text-base bg-background/60 backdrop-blur-sm border-2 border-border hover:border-primary/30 focus:border-primary transition-all shadow-lg shadow-primary/5"
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
            <div className="space-y-6 pt-4">
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
