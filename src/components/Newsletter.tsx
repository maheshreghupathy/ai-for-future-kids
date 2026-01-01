import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle2, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 pattern-grid" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-hero rounded-2xl mb-8 glow-effect">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Header */}
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Stay <span className="text-gradient">Updated</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Get the latest articles, resources, and updates about sustainable AI—delivered to your inbox. Perfect for kids, parents, and teachers!
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-5 bg-card border-border focus:border-primary text-base"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="flex-shrink-0">
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="glass-card p-8 max-w-md mx-auto animate-scale-in">
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">
                You're In!
              </h3>
              <p className="text-muted-foreground">
                Thanks for subscribing. We'll keep you updated with the latest content!
              </p>
            </div>
          )}

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-6">
            📧 No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
