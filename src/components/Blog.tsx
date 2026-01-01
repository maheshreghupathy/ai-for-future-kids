import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Why Should Kids Care About AI and the Environment?",
      excerpt:
        "An introduction to how artificial intelligence affects our planet—and why understanding it early matters for your future.",
      date: "Dec 28, 2024",
      readTime: "4 min read",
      category: "Introduction",
      featured: true,
    },
    {
      title: "5 Ways AI Helps Scientists Protect Wildlife",
      excerpt:
        "From tracking whales to counting penguins, discover how smart technology is saving endangered species around the world.",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      category: "Wildlife",
      featured: false,
    },
    {
      title: "Screen Time and Your Brain: What the Science Says",
      excerpt:
        "Learn about how technology affects your mind and body, plus tips for staying healthy while enjoying your favorite apps.",
      date: "Dec 15, 2024",
      readTime: "6 min read",
      category: "Wellbeing",
      featured: false,
    },
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Original Content
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            From My <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Original articles and insights about AI, sustainability, and technology—written to inspire curious young minds.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-5xl mx-auto">
          {/* Featured Post */}
          <article className="glass-card p-8 md:p-10 mb-8 group hover:scale-[1.01] transition-all duration-300 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="gradient-accent text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {posts[0].category}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </span>
                </div>
              </div>
              <div className="flex items-end">
                <Button variant="hero" className="group/btn">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </article>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(1).map((post, index) => (
              <article
                key={index}
                className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
              >
                <span className="inline-block text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
