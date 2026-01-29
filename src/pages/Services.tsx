import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCardWithImage from "@/components/ServiceCardWithImage";
import heroImage from "@/assets/hero-interior.jpg";

// Service images
import img2dDrawings from "@/assets/services/2d-drawings.jpg";
import img3dDrawings from "@/assets/services/3d-drawings.jpg";
import imgElevation from "@/assets/services/elevation-drawings.jpg";
import imgCivil from "@/assets/services/civil-services.jpg";
import imgCarpentry from "@/assets/services/carpentry-services.jpg";
import imgElectrical from "@/assets/services/electrical-works.jpg";
import imgPainting from "@/assets/services/painting.jpg";
import imgGypsum from "@/assets/services/gypsum-ceiling.jpg";
import imgACPiping from "@/assets/services/ac-copper-piping.jpg";
import imgGasPiping from "@/assets/services/gas-copper-piping.jpg";
import imgGranite from "@/assets/services/granite-work.jpg";
import imgBar from "@/assets/services/bar-counter.jpg";
import imgHomeTheater from "@/assets/services/home-theater.jpg";
import imgCommercial from "@/assets/services/commercial-offices.jpg";
import imgWallArts from "@/assets/services/wall-arts.jpg";

const allServices = [
  {
    category: "Design & Planning",
    services: [
      {
        title: "2D Drawings",
        description: "Detailed floor plans and layouts to visualize spatial arrangements and optimize functionality.",
        image: img2dDrawings,
      },
      {
        title: "3D Drawings",
        description: "Realistic 3D visualizations that bring your interiors to life before execution begins.",
        image: img3dDrawings,
      },
      {
        title: "Elevation Drawings",
        description: "Precise elevation designs for walls, furniture, and architectural elements.",
        image: imgElevation,
      },
    ],
  },
  {
    category: "Execution & Civil",
    services: [
      {
        title: "Civil Services",
        description: "Foundation to finish civil work including structural modifications and renovations.",
        image: imgCivil,
      },
      {
        title: "Carpentry Services",
        description: "Custom woodwork, modular furniture, and bespoke cabinetry by skilled craftsmen.",
        image: imgCarpentry,
      },
      {
        title: "Electrical Works",
        description: "Complete electrical planning and execution with safety compliance.",
        image: imgElectrical,
      },
      {
        title: "Painting",
        description: "Premium paint finishes, textures, and specialized wall treatments.",
        image: imgPainting,
      },
      {
        title: "Gypsum Ceiling",
        description: "Designer false ceilings with integrated lighting solutions.",
        image: imgGypsum,
      },
    ],
  },
  {
    category: "Utilities & Infrastructure",
    services: [
      {
        title: "AC Copper Piping",
        description: "Professional AC installation with concealed copper piping for split units.",
        image: imgACPiping,
      },
      {
        title: "Gas Copper Piping",
        description: "Safe and certified gas pipeline installations for kitchens.",
        image: imgGasPiping,
      },
      {
        title: "Granite Work",
        description: "Premium granite flooring, countertops, and surface installations.",
        image: imgGranite,
      },
    ],
  },
  {
    category: "Specialized Spaces",
    services: [
      {
        title: "Bar Counter",
        description: "Custom-designed bar counters for homes and commercial establishments.",
        image: imgBar,
      },
      {
        title: "Home Theater",
        description: "Immersive home theater setups with acoustic treatment and premium AV integration.",
        image: imgHomeTheater,
      },
      {
        title: "Commercial Offices",
        description: "Professional office interiors designed for productivity and brand identity.",
        image: imgCommercial,
      },
    ],
  },
  {
    category: "Aesthetic & Finishing",
    services: [
      {
        title: "Wall Arts",
        description: "Custom wall art installations, murals, and decorative wall treatments.",
        image: imgWallArts,
      },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Complete Interior{" "}
              <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial design concepts to final execution, we offer comprehensive 
              interior services under one roof. One team, one responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {allServices.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`relative py-16 ${
            categoryIndex % 2 === 1 ? "bg-gradient-to-b from-primary/30 via-background to-background" : ""
          }`}
        >
          <div className="section-container">
            <SectionHeading subtitle={`0${categoryIndex + 1}`} title={category.category} />

            <div className={`grid gap-6 ${
              category.services.length === 1 
                ? "grid-cols-1 max-w-md mx-auto" 
                : category.services.length === 2 
                  ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}>
              {category.services.map((service, index) => (
                <div
                  key={service.title}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <ServiceCardWithImage {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="relative py-24">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="A streamlined approach that ensures quality at every step."
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your vision" },
                { step: "02", title: "Design", desc: "Creating detailed plans" },
                { step: "03", title: "Execution", desc: "Building with precision" },
                { step: "04", title: "Handover", desc: "Delivering excellence" },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="relative text-center opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className="glow-card p-6">
                    <span className="text-4xl font-serif font-bold text-gradient-gold">
                      {item.step}
                    </span>
                    <h4 className="text-lg font-medium text-foreground mt-3 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="section-container">
          <div className="glow-card text-center py-16 px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Every space is unique. Let's discuss your specific requirements and 
              create a tailored plan for your interior project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919052636768"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Discuss Your Project
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

export default Services;
