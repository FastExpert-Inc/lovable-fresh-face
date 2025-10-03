import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, CheckCircle, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!location.trim()) {
      toast({
        title: "Location required",
        description: "Please enter your location to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Searching...",
      description: `Finding top realtors in ${location}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
          <Shield className="w-4 h-4 mr-2" />
          Verified Network
        </Badge>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Top Selling Realtors
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                of 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Connect with Award-Winning Real Estate Experts
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Get matched with top-performing realtors in your area who have proven track records of successful sales and satisfied clients.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm font-medium text-foreground uppercase tracking-wide">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-6 border border-accent/20 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24hr</div>
              <div className="text-sm font-medium text-foreground uppercase tracking-wide">Response Time</div>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 border border-secondary/20 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5000+</div>
              <div className="text-sm font-medium text-foreground uppercase tracking-wide">Happy Clients</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-bold">Find Your Perfect Realtor Match</h2>
            <p className="text-muted-foreground">Enter your location to see top-rated agents near you</p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Enter your location (city or zip code)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 h-14 text-lg bg-background border-2 focus:border-primary shadow-sm"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-14 px-8 text-lg font-semibold group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
                >
                  Find My Top Realtors Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">100% Free Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-medium">Verified Credentials</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-5 h-5 text-secondary" />
                <span className="font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
