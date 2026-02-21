import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-16 pb-12 md:pt-20 md:pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 mb-5 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Empowering the next generation
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            Sustainable AI{"\n"}
            <br />
            <span className="text-primary">for a Better Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Discover how artificial intelligence can help protect our planet while keeping children safe, informed, and inspired about technology's role in sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gap-2">
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Resources
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-sm mx-auto">
            {[
              { value: "50+", label: "Resources" },
              { value: "6-12", label: "Age Group" },
              { value: "100%", label: "Free Access" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
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
