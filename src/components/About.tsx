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
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-header">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            About This Project
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Building a Bridge Between AI & Sustainability
          </h2>
          <p className="text-lg text-muted-foreground">
            This platform combines my passion for technology and my dream of becoming a pediatrician—focusing on the wellbeing of children in an AI-powered world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="hextra-feature-card flex items-start gap-5"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="border border-border rounded-xl p-8 md:p-10 text-center bg-secondary/30">
            <blockquote className="text-lg italic text-foreground/90 mb-4 leading-relaxed">
              "I believe that by understanding how AI impacts our planet and our health, kids can grow up to be thoughtful innovators who use technology for good."
            </blockquote>
            <p className="text-muted-foreground text-sm font-medium">
              — Founder, Sustainable AI for Kids
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
