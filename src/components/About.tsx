import { Target, Users, Lightbulb, GraduationCap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To educate children ages 6-12 about how AI can be used responsibly to protect our environment and create a sustainable future.",
    },
    {
      icon: Users,
      title: "Who We Are",
      description:
        "Created by a high school freshman passionate about technology, sustainability, and helping the next generation thrive.",
    },
    {
      icon: Lightbulb,
      title: "Why It Matters",
      description:
        "AI is shaping our future. Teaching kids about eco-friendly AI practices now empowers them to be responsible digital citizens.",
    },
    {
      icon: GraduationCap,
      title: "Learn & Grow",
      description:
        "Through curated resources, original content, and fun activities, we make complex topics accessible and engaging for young minds.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            About This Project
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Building a Bridge Between{" "}
            <span className="text-gradient">AI & Sustainability</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            This platform combines my passion for technology and my dream of becoming a pediatrician—focusing on the wellbeing of children in an AI-powered world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10 text-center border-2 border-primary/20">
            <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-4">
              "I believe that by understanding how AI impacts our planet and our health, kids can grow up to be thoughtful innovators who use technology for good."
            </blockquote>
            <p className="text-muted-foreground font-medium">
              — Founder, Sustainable AI for Kids
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
