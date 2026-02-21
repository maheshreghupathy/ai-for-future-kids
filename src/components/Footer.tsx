import { Leaf, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = {
    explore: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Resources", href: "#resources" },
      { name: "Blog", href: "#blog" },
    ],
    resources: [
      { name: "For Kids", href: "#resources" },
      { name: "For Parents", href: "#resources" },
      { name: "For Teachers", href: "#resources" },
    ],
    connect: [
      { name: "Newsletter", href: "#newsletter" },
      { name: "Contact", href: "mailto:hello@sustainableaiforkids.org" },
    ],
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm text-foreground">
                SustainableAIforKids
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation to understand AI and sustainability.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Explore</h4>
            <ul className="space-y-2">
              {links.explore.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Connect</h4>
            <ul className="space-y-2">
              {links.connect.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    {link.href.startsWith("mailto") && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sustainable AI for Kids. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
