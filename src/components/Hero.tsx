import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe2, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />

      {/* Floating Icons */}
      <div className="absolute top-32 right-1/4 animate-float">
        <div className="glass-card p-4 rounded-2xl">
          <Sparkles className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="glass-card p-4 rounded-2xl">
          <Globe2 className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/2 right-20 animate-float hidden lg:block" style={{ animationDelay: "3s" }}>
        <div className="glass-card p-4 rounded-2xl">
          <Heart className="w-8 h-8 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Empowering the next generation
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Teaching Kids About{" "}
            <span className="text-gradient">Sustainable AI</span>
            <br />
            for a Better Future
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover how artificial intelligence can help protect our planet while keeping children safe, informed, and inspired about technology's role in sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              Explore Resources
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "50+", label: "Resources" },
              { value: "6-12", label: "Age Group" },
              { value: "100%", label: "Free Access" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
