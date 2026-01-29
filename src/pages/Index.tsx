import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Ruler, Hammer, Palette, Zap, Building2, Sofa } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/hero-interior.jpg";
import interiorElements from "@/assets/interior-elements.jpg";
import kitchenImage from "@/assets/kitchen-interior.jpg";
import bedroomImage from "@/assets/bedroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";

const services = [
  {
    title: "Design & Planning",
    description: "Complete design solutions with 2D, 3D, and elevation drawings to visualize your dream space.",
    icon: Ruler,
    features: ["2D Layouts", "3D Visualizations", "Elevation Designs"],
  },
  {
    title: "Execution & Civil",
    description: "End-to-end civil work including carpentry, electrical, painting, and gypsum ceilings.",
    icon: Hammer,
    features: ["Civil Work", "Carpentry", "Electrical", "Painting"],
  },
  {
    title: "Premium Finishes",
    description: "Expert finishing touches including wall arts, granite work, and custom aesthetics.",
    icon: Palette,
    features: ["Wall Arts", "Granite Work", "Custom Finishes"],
  },
  {
    title: "Specialized Spaces",
    description: "Custom solutions for home theaters, bar counters, and commercial offices.",
    icon: Sofa,
    features: ["Home Theater", "Bar Counter", "Commercial Offices"],
  },
];

const featuredProjects = [
  {
    title: "Modern Living Space",
    category: "Residential",
    image: heroImage,
    description: "A contemporary living room with warm lighting and premium finishes.",
  },
  {
    title: "Luxury Kitchen",
    category: "Residential",
    image: kitchenImage,
    description: "Dark cabinets with gold hardware and marble countertops.",
  },
  {
    title: "Executive Suite",
    category: "Commercial",
    image: officeImage,
    description: "Professional meeting room with elegant glass partitions.",
  },
];

const whyChooseUs = [
  { text: "Founder-led, personally supervised projects" },
  { text: "Single point of contact for complete interiors" },
  { text: "Craftsmanship rooted in generations of expertise" },
  { text: "Transparent pricing with no hidden costs" },
  { text: "On-time delivery commitment" },
  { text: "10+ active projects managed simultaneously" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Interior"
            className="w-full h-full object-cover parallax-slow"
          />
          <div className="absolute inset-0 gradient-overlay-dark" />
          <div className="absolute inset-0 gradient-overlay-gold" />
        </div>

        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={interiorElements}
            alt=""
            className="absolute -right-20 top-20 w-96 h-96 object-cover rounded-full opacity-10 blur-sm float-animation"
          />
        </div>

        {/* Content */}
        <div className="relative section-container py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-6 animate-fade-in">
              Leading Turnkey Interior Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
              One Step for{" "}
              <span className="text-gradient-gold text-shadow-gold">Complete Interior</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-1">
              From design to final execution, we handle everything under one roof.
              Your vision becomes our responsibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
              <a
                href="https://wa.me/919052636768"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <Link to="/projects" className="btn-gold-outline w-full sm:w-auto">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 bg-gradient-to-b from-background via-primary/20 to-background">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Work"
            title="Featured Projects"
            description="Real executions showcasing our commitment to quality and craftsmanship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="reveal reveal-up"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-gold-outline inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-24">
        <div className="section-container">
          <SectionHeading
            subtitle="What We Do"
            title="Complete Interior Solutions"
            description="From initial design to final execution, we provide integrated services for residential and commercial spaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal reveal-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-gold inline-flex items-center gap-2">
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={bedroomImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
        </div>

        <div className="relative section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                subtitle="Why OPUS?"
                title="Execution Excellence"
                description="We don't just design spaces — we build them. Our founder's craftsmanship roots ensure every project receives hands-on attention."
                centered={false}
              />

              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground/90 reveal reveal-right"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to="/about" className="btn-gold-outline inline-flex items-center gap-2">
                  Learn About Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="glow-card p-8 md:p-10">
                <div className="text-center mb-8">
                  <span className="text-6xl md:text-7xl font-serif font-bold text-gradient-gold">
                    10+
                  </span>
                  <p className="text-muted-foreground mt-2">Active Projects Managed</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-primary/30">
                    <Building2 className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="text-2xl font-serif font-bold text-foreground">50+</span>
                    <p className="text-sm text-muted-foreground">Projects Delivered</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/30">
                    <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="text-2xl font-serif font-bold text-foreground">100%</span>
                    <p className="text-sm text-muted-foreground">On-Time Delivery</p>
                  </div>
                </div>
              </div>
            </div>
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
              Take the first step towards your dream interior. Get a free consultation
              and let us show you how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919052636768"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  WhatsApp Us Now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <a
                href="tel:+919052636768"
                className="btn-gold-outline w-full sm:w-auto"
              >
                Call: +91 90526 36768
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
