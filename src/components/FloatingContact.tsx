import { useState } from "react";
import { Phone, MessageCircle, Mail, Instagram, X } from "lucide-react";

const contactOptions = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919052636768",
    color: "bg-green-600 hover:bg-green-500",
    delay: 0,
  },
  {
    name: "Call",
    icon: Phone,
    href: "tel:+919052636768",
    color: "bg-accent hover:bg-gold-light",
    delay: 0.1,
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:opusinteriorss@gmail.com",
    color: "bg-royal-blue-light hover:bg-royal-blue",
    delay: 0.2,
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/Opusinteriorss",
    color: "bg-pink-600 hover:bg-pink-500",
    delay: 0.3,
  },
];

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Contact Options */}
      {contactOptions.map((option, index) => (
        <a
          key={option.name}
          href={option.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          style={{
            transitionDelay: isOpen ? `${option.delay}s` : "0s",
          }}
          aria-label={option.name}
        >
          {/* Label */}
          <span
            className={`hidden sm:block px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm text-sm font-medium text-foreground shadow-lg border border-border/50 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {option.name}
          </span>

          {/* Icon Button */}
          <div
            className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center shadow-lg transition-all duration-300 border-2 border-transparent hover:border-accent/50`}
            style={{
              boxShadow: "0 0 20px hsla(40, 44%, 41%, 0.3)",
            }}
          >
            <option.icon className="w-5 h-5 text-foreground" />
          </div>
        </a>
      ))}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border-2 ${
          isOpen
            ? "bg-card border-accent/50 rotate-0"
            : "bg-gradient-to-br from-accent to-gold-light border-transparent animate-pulse-glow"
        }`}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-accent" />
        ) : (
          <MessageCircle className="w-6 h-6 text-background" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
