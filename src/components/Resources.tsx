import { ExternalLink, BookOpen, Video, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    { type: "Article", icon: Newspaper, title: "How AI Can Help Fight Climate Change", source: "National Geographic Kids", description: "Discover how smart computers are helping scientists track endangered animals and predict weather patterns.", url: "https://kids.nationalgeographic.com", category: "Environment" },
    { type: "Guide", icon: BookOpen, title: "What is Artificial Intelligence?", source: "NASA Climate Kids", description: "A kid-friendly explanation of AI and how it learns, thinks, and helps solve problems.", url: "https://climatekids.nasa.gov", category: "Learning" },
    { type: "Video", icon: Video, title: "Green Technology for Tomorrow", source: "PBS Kids", description: "Watch how renewable energy and smart technology work together to protect our planet.", url: "https://pbskids.org", category: "Technology" },
    { type: "Article", icon: Newspaper, title: "Kids and Screen Time: A Balanced Approach", source: "Common Sense Media", description: "Learn about healthy ways to use technology and why balance matters for your brain.", url: "https://commonsensemedia.org", category: "Wellbeing" },
    { type: "Guide", icon: BookOpen, title: "The Future of Clean Energy", source: "Energy Kids (EIA)", description: "Explore how wind, solar, and other clean energy sources are powering our future.", url: "https://eia.gov/kids", category: "Environment" },
    { type: "Article", icon: Newspaper, title: "AI in Everyday Life", source: "Science News for Students", description: "From voice assistants to video games—see how AI is already part of your daily routine.", url: "https://sciencenewsforstudents.org", category: "Technology" },
  ];

  return (
    <section id="resources" className="py-14 md:py-18 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Curated Resources</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Learn From Trusted Sources</h2>
          <p className="text-sm text-muted-foreground">A collection of kid-friendly articles, videos, and guides about AI and sustainability—all from reputable sources.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="hextra-card group flex flex-col !p-4">
              <div className="flex items-center gap-2 mb-2">
                <resource.icon className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{resource.type}</span>
                <span className="ml-auto text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5">{resource.category}</span>
              </div>
              <h3 className="text-sm font-semibold mb-1.5 tracking-tight group-hover:text-primary transition-colors">{resource.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-grow">{resource.description}</p>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-[10px] text-muted-foreground">{resource.source}</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="sm" className="gap-2">
            View All Resources
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
