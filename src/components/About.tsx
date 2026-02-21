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
    <section id="about" className="py-14 md:py-18 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
            About This Project
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
            Building a Bridge Between AI & Sustainability
          </h2>
          <p className="text-sm text-muted-foreground">
            This platform combines my passion for technology and my dream of becoming a pediatrician—focusing on the wellbeing of children in an AI-powered world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="hextra-feature-card flex items-start gap-4 !p-5"
            >
              <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="border border-border rounded-xl p-6 text-center bg-secondary/30">
            <blockquote className="text-sm italic text-foreground/90 mb-2 leading-relaxed">
              "I believe that by understanding how AI impacts our planet and our health, kids can grow up to be thoughtful innovators who use technology for good."
            </blockquote>
            <p className="text-muted-foreground text-xs font-medium">
              — Founder, Sustainable AI for Kids
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
