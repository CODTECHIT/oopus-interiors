import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-royal-blue-deep border-t border-border/30">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-background/50 pointer-events-none" />

      <div className="relative section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
                <span className="text-foreground">OPUS</span>
                <span className="text-gradient-gold"> INTERIORS</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              One step for complete interior. We handle everything from design to final 
              execution, so you don't have to manage multiple vendors. Your vision, 
              our responsibility.
            </p>
            <p className="text-accent font-serif text-xl italic">
              "Craftsmanship meets execution excellence"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 gold-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919052636768"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+91 90526 36768</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:opusinteriorss@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span>opusinteriorss@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
              © {currentYear} OPUS INTERIORS. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed with passion for excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
