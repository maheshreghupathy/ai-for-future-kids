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
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-1.5 mb-2">
              <Leaf className="w-3.5 h-3.5 text-primary" />
              <span className="font-semibold text-xs text-foreground">SustainableAIforKids</span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">Empowering the next generation to understand AI and sustainability.</p>
          </div>
          {Object.entries(links).map(([key, items]) => (
            <div key={key}>
              <h4 className="font-semibold text-xs mb-2 capitalize">{key}</h4>
              <ul className="space-y-1.5">
                {items.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                      {link.name}
                      {link.href.startsWith("mailto") && <ExternalLink className="w-2.5 h-2.5" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-border">
          <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} Sustainable AI for Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
