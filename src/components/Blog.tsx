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
    <section id="blog" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-header">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Original Content
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            From the Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Original articles and insights about AI, sustainability, and technology—written to inspire curious young minds.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-5xl mx-auto">
          {/* Featured Post */}
          <article className="border border-border rounded-xl p-8 mb-6 group hover:border-primary/30 transition-colors bg-card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                    {posts[0].category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {posts[0].readTime}
                  </span>
                </div>
              </div>
              <div className="flex items-end">
                <Button className="gap-2">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </article>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 gap-4">
            {posts.slice(1).map((post, index) => (
              <article
                key={index}
                className="hextra-card group"
              >
                <span className="inline-block text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5 mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
            <Button variant="outline" size="lg" className="gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
