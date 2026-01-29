import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import interiorElements from "@/assets/interior-elements.jpg";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 90526 36768",
    href: "https://wa.me/919052636768",
    description: "Quick responses, usually within minutes",
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 90526 36768",
    href: "tel:+919052636768",
    description: "Available during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    value: "opusinteriorss@gmail.com",
    href: "mailto:opusinteriorss@gmail.com",
    description: "For detailed project inquiries",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@Opusinteriorss",
    href: "https://instagram.com/Opusinteriorss",
    description: "Follow our latest work",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorElements}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Let's Start Your{" "}
              <span className="text-gradient-gold">Project</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to transform your space? We're just a message away.
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glow-card group p-6 md:p-8 flex items-start gap-5 reveal reveal-up ${method.primary ? "md:col-span-2" : ""
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center border transition-all duration-300 ${method.primary
                  ? "bg-accent/20 border-accent/50 group-hover:bg-accent group-hover:border-accent"
                  : "bg-accent/10 border-accent/30 group-hover:border-accent/50"
                  }`}>
                  <method.icon className={`w-6 h-6 transition-colors duration-300 ${method.primary
                    ? "text-accent group-hover:text-background"
                    : "text-accent"
                    }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-accent font-medium mt-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Location Card */}
            <div className="glow-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Location
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We operate across Hyderabad and surrounding areas in Telangana, India.
                We're happy to discuss projects in other locations as well.
              </p>
              <p className="text-accent mt-4 font-medium">
                Hyderabad, Telangana, India
              </p>
            </div>

            {/* Hours Card */}
            <div className="glow-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">By Appointment</span>
                </div>
              </div>
              <p className="text-sm text-accent mt-4">
                WhatsApp is monitored outside business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16">
        <div className="section-container">
          <SectionHeading
            subtitle="FAQ"
            title="Common Questions"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I get started?",
                a: "Simply reach out via WhatsApp or call. We'll schedule a consultation to understand your requirements and provide an initial assessment.",
              },
              {
                q: "Do you handle only design or complete execution?",
                a: "We are a turnkey solution provider. From initial design to final execution including civil work, carpentry, electrical, painting, and finishing - we handle everything.",
              },
              {
                q: "What areas do you serve?",
                a: "We primarily serve Hyderabad and Telangana, but are open to discussing projects in other locations.",
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope. A typical residential interior project takes 45-90 days. We'll provide a detailed timeline during consultation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glow-card p-6 reveal reveal-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="section-container">
          <div className="glow-card text-center py-16 px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Take the first step. A simple message today can become your
              dream space tomorrow.
            </p>
            <a
              href="https://wa.me/919052636768"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 animate-pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
