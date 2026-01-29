import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-interior.jpg";
import kitchenImage from "@/assets/kitchen-interior.jpg";
import bedroomImage from "@/assets/bedroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import interiorElements from "@/assets/interior-elements.jpg";

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office"];

const galleryImages = [
  { id: 1, src: heroImage, alt: "Luxury Living Room", category: "Living Room" },
  { id: 2, src: kitchenImage, alt: "Modern Kitchen", category: "Kitchen" },
  { id: 3, src: bedroomImage, alt: "Master Bedroom", category: "Bedroom" },
  { id: 4, src: officeImage, alt: "Executive Office", category: "Office" },
  { id: 5, src: interiorElements, alt: "Interior Elements", category: "Living Room" },
  { id: 6, src: heroImage, alt: "Premium Living Space", category: "Living Room" },
  { id: 7, src: kitchenImage, alt: "Designer Kitchen", category: "Kitchen" },
  { id: 8, src: bedroomImage, alt: "Cozy Bedroom", category: "Bedroom" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

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
              Visual Showcase
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Project{" "}
              <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A visual journey through our completed projects. Each image tells 
              a story of craftsmanship, attention to detail, and execution excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-16">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-background"
                    : "bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-foreground">{image.alt}</p>
                  <p className="text-xs text-accent">{image.category}</p>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" 
                  style={{ boxShadow: "inset 0 0 30px hsla(40, 44%, 41%, 0.2)" }} 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border hover:border-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <div className="max-w-5xl max-h-[80vh] overflow-hidden rounded-xl">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-lg font-serif text-foreground">{selectedImage.alt}</p>
            <p className="text-sm text-accent">{selectedImage.category}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="section-container">
          <div className="glow-card text-center py-16 px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Like What You See?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's create something beautiful together. Start a conversation about 
              transforming your space.
            </p>
            <a
              href="https://wa.me/919052636768"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
