import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, Cpu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
    { name: "Get Involved", href: "#newsletter" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Leaf className="w-7 h-7 text-accent transition-transform group-hover:scale-110" />
              <Cpu className="w-4 h-4 text-primary absolute -bottom-1 -right-1" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-foreground">
              Sustainable<span className="text-gradient">AI</span>forKids
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" className="mt-2">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
