import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    { title: "Why Should Kids Care About AI and the Environment?", excerpt: "An introduction to how artificial intelligence affects our planet—and why understanding it early matters for your future.", date: "Dec 28, 2024", readTime: "4 min read", category: "Introduction", featured: true },
    { title: "5 Ways AI Helps Scientists Protect Wildlife", excerpt: "From tracking whales to counting penguins, discover how smart technology is saving endangered species around the world.", date: "Dec 20, 2024", readTime: "5 min read", category: "Wildlife", featured: false },
    { title: "Screen Time and Your Brain: What the Science Says", excerpt: "Learn about how technology affects your mind and body, plus tips for staying healthy while enjoying your favorite apps.", date: "Dec 15, 2024", readTime: "6 min read", category: "Wellbeing", featured: false },
  ];

  return (
    <section id="blog" className="py-14 md:py-18 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Original Content</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">From the Blog</h2>
          <p className="text-sm text-muted-foreground">Original articles and insights about AI, sustainability, and technology—written to inspire curious young minds.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Featured Post */}
          <article className="border border-border rounded-xl p-6 mb-4 group hover:border-primary/30 transition-colors bg-card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">Featured</span>
                  <span className="text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5">{posts[0].category}</span>
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{posts[0].title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                </div>
              </div>
              <div className="flex items-end">
                <Button size="sm" className="gap-1.5">Read Article <ArrowRight className="w-3.5 h-3.5" /></Button>
              </div>
            </div>
          </article>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 gap-3">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="hextra-card group !p-4">
                <span className="inline-block text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5 mb-2">{post.category}</span>
                <h3 className="text-sm font-semibold tracking-tight mb-1.5 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="sm" className="gap-2">View All Posts <ArrowRight className="w-3.5 h-3.5" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
