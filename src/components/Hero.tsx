import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import houseImage from "@/assets/house-image.png";

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
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-8">
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-secondary">BSell</span>
            <span className="text-primary"> Real Estate Agents</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Presented by FastExpert</p>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Find Top Selling
              <br />
              Real Estate Agents
            </h1>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter Your Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="pl-11 h-14 text-base bg-background border-2 focus:border-primary"
                    maxLength={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-14 px-10 text-base font-semibold whitespace-nowrap"
                >
                  Continue
                </Button>
              </div>
            </form>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Fast & Easy</h3>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Get connected to agents in less than 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    We'll send multiple top performing agents for you to choose from.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in lg:animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={houseImage}
                alt="Beautiful red house with green lawn"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
