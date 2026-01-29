import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/hero-interior.jpg";
import kitchenImage from "@/assets/kitchen-interior.jpg";
import bedroomImage from "@/assets/bedroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import interiorElements from "@/assets/interior-elements.jpg";

const categories = ["All", "Residential", "Commercial"];

const projects = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential",
    image: heroImage,
    description: "Contemporary living room with premium finishes and warm ambient lighting.",
  },
  {
    id: 2,
    title: "Luxury Kitchen Design",
    category: "Residential",
    image: kitchenImage,
    description: "Dark cabinets with gold hardware, marble countertops, and pendant lighting.",
  },
  {
    id: 3,
    title: "Master Bedroom Suite",
    category: "Residential",
    image: bedroomImage,
    description: "Elegant bedroom with plush bedding and custom lighting design.",
  },
  {
    id: 4,
    title: "Executive Meeting Room",
    category: "Commercial",
    image: officeImage,
    description: "Professional corporate space with glass partitions and modern furniture.",
  },
  {
    id: 5,
    title: "Contemporary Lounge",
    category: "Residential",
    image: interiorElements,
    description: "Sophisticated living area with curated furniture and gold accents.",
  },
  {
    id: 6,
    title: "Corporate Office Space",
    category: "Commercial",
    image: officeImage,
    description: "Open-plan office designed for productivity and collaboration.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Featured{" "}
              <span className="text-gradient-gold">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of completed projects showcasing our commitment 
              to quality, craftsmanship, and execution excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-background"
                    : "bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <ProjectCard {...project} />
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
              Want to See More?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              We'd love to show you more of our work and discuss how we can transform 
              your space. Get in touch for a detailed portfolio presentation.
            </p>
            <a
              href="https://wa.me/919052636768"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <span>Request Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
