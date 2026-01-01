import { Leaf, Cpu, Heart, ExternalLink } from "lucide-react";
const Footer = () => {
  const links = {
    explore: [{
      name: "Home",
      href: "#home"
    }, {
      name: "About",
      href: "#about"
    }, {
      name: "Resources",
      href: "#resources"
    }, {
      name: "Blog",
      href: "#blog"
    }],
    resources: [{
      name: "For Kids",
      href: "#resources"
    }, {
      name: "For Parents",
      href: "#resources"
    }, {
      name: "For Teachers",
      href: "#resources"
    }],
    connect: [{
      name: "Newsletter",
      href: "#newsletter"
    }, {
      name: "Contact",
      href: "mailto:hello@sustainableaiforkids.org"
    }]
  };
  return <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Leaf className="w-6 h-6 text-accent" />
                <Cpu className="w-3 h-3 text-primary-foreground absolute -bottom-1 -right-1" />
              </div>
              <span className="font-display font-bold text-lg">
                SustainableAIforKids
              </span>
            </a>
            
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {links.explore.map(link => <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map(link => <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {links.connect.map(link => <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-1">
                    {link.name}
                    {link.href.startsWith("mailto") && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Sustainable AI for Kids. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;