import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-premium shadow-lg border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
              <span className="text-foreground">OPUS</span>
              <span className="text-gradient-gold"> INTERIORS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 gold-underline ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919052636768"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-gold text-sm py-2.5 px-6"
            >
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-premium border-b border-border/30 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container py-4 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                location.pathname === link.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground/80 hover:text-accent hover:bg-accent/5"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919052636768"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 btn-gold text-center"
          >
            <span>Get Free Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
