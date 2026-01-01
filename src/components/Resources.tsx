import { ExternalLink, BookOpen, Video, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      type: "Article",
      icon: Newspaper,
      title: "How AI Can Help Fight Climate Change",
      source: "National Geographic Kids",
      description:
        "Discover how smart computers are helping scientists track endangered animals and predict weather patterns.",
      url: "https://kids.nationalgeographic.com",
      category: "Environment",
    },
    {
      type: "Guide",
      icon: BookOpen,
      title: "What is Artificial Intelligence?",
      source: "NASA Climate Kids",
      description:
        "A kid-friendly explanation of AI and how it learns, thinks, and helps solve problems.",
      url: "https://climatekids.nasa.gov",
      category: "Learning",
    },
    {
      type: "Video",
      icon: Video,
      title: "Green Technology for Tomorrow",
      source: "PBS Kids",
      description:
        "Watch how renewable energy and smart technology work together to protect our planet.",
      url: "https://pbskids.org",
      category: "Technology",
    },
    {
      type: "Article",
      icon: Newspaper,
      title: "Kids and Screen Time: A Balanced Approach",
      source: "Common Sense Media",
      description:
        "Learn about healthy ways to use technology and why balance matters for your brain.",
      url: "https://commonsensemedia.org",
      category: "Wellbeing",
    },
    {
      type: "Guide",
      icon: BookOpen,
      title: "The Future of Clean Energy",
      source: "Energy Kids (EIA)",
      description:
        "Explore how wind, solar, and other clean energy sources are powering our future.",
      url: "https://eia.gov/kids",
      category: "Environment",
    },
    {
      type: "Article",
      icon: Newspaper,
      title: "AI in Everyday Life",
      source: "Science News for Students",
      description:
        "From voice assistants to video games—see how AI is already part of your daily routine.",
      url: "https://sciencenewsforstudents.org",
      category: "Technology",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environment":
        return "bg-accent/10 text-accent";
      case "Learning":
        return "bg-primary/10 text-primary";
      case "Technology":
        return "bg-secondary/10 text-secondary";
      case "Wellbeing":
        return "bg-purple-500/10 text-purple-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="resources" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Curated Resources
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Learn From <span className="text-gradient">Trusted Sources</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of kid-friendly articles, videos, and guides about AI and sustainability—all from reputable sources.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <article
              key={index}
              className="glass-card p-6 flex flex-col group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <resource.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {resource.type}
                  </span>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(resource.category)}`}>
                  {resource.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {resource.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Source: <span className="font-medium">{resource.source}</span>
                </span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Resources
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
