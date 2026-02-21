import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle2 } from "lucide-react";

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
    <section id="newsletter" className="py-20 md:py-28 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles, resources, and updates about sustainable AI—delivered to your inbox. Perfect for kids, parents, and teachers.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
                required
              />
              <Button type="submit" className="flex-shrink-0 gap-2">
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          ) : (
            <div className="border border-border rounded-xl p-8 max-w-md mx-auto bg-card">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">You're In!</h3>
              <p className="text-muted-foreground text-sm">
                Thanks for subscribing. We'll keep you updated with the latest content.
              </p>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
