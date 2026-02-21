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
    <section id="newsletter" className="py-14 md:py-18 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Stay Updated</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Get the latest articles, resources, and updates about sustainable AI—delivered to your inbox.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-9 text-sm" required />
              <Button type="submit" size="sm" className="flex-shrink-0 gap-1.5">
                Subscribe <Send className="w-3 h-3" />
              </Button>
            </form>
          ) : (
            <div className="border border-border rounded-xl p-6 bg-card">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">You're In!</h3>
              <p className="text-muted-foreground text-xs">Thanks for subscribing. We'll keep you updated.</p>
            </div>
          )}

          <p className="text-[10px] text-muted-foreground mt-3">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
