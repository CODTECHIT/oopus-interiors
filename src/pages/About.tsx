import { ArrowRight, Award, Users, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-interior.jpg";
import interiorElements from "@/assets/interior-elements.jpg";

const values = [
  {
    icon: Award,
    title: "Craftsmanship",
    description: "Rooted in generations of woodworking expertise, we bring authentic craftsmanship to every project.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Your investment is our personal responsibility. We stand behind every decision and every finish.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery is not just a promise — it's our standard operating procedure.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work with you, not just for you. Your vision shapes our execution at every step.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Where Craftsmanship Meets{" "}
              <span className="text-gradient-gold">Execution</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              OPUS INTERIORS was born from a simple belief: clients deserve a single, 
              accountable partner for their complete interior journey.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="relative py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="glow-card overflow-hidden">
                <img
                  src={heroImage}
                  alt="OPUS Interiorss Workspace"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-8 glow-card p-6 bg-card/95 backdrop-blur-sm">
                <span className="text-4xl font-serif font-bold text-gradient-gold">10+</span>
                <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
                The Founder's Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                From a Carpenter's Workshop to Complete Interiors
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into interior design began in my father's workshop, not a classroom. 
                  Growing up as the son of a master carpenter, I learned the discipline of 
                  craftsmanship, precision, and honest execution.
                </p>
                <p>
                  Over years of balancing design aesthetics with on-site challenges, I developed 
                  the ability to bridge creative vision with structural integrity. I understood 
                  that beautiful designs mean nothing if they can't be executed perfectly.
                </p>
                <p>
                  Today, I oversee more than 10 active projects simultaneously, treating every 
                  client's investment as a personal responsibility. At OPUS INTERIORS, we don't 
                  just design — we build, we finish, we deliver.
                </p>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/30">
                <p className="text-lg font-serif italic text-foreground">
                  "Every nail, every finish, every detail — it all matters. That's not just 
                  a business principle; it's what I learned at my father's workbench."
                </p>
                <p className="mt-4 text-accent font-medium">
                  — Vinod Sankoju, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/20 via-background to-background">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="These aren't just words on a wall — they're the principles that guide every project we undertake."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glow-card p-6 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/30">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Our Approach"
              title="One Decision, Complete Execution"
            />

            <div className="glow-card p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                When you choose OPUS INTERIORS, you're making one decision that covers everything. 
                From the first sketch to the final coat of paint, we handle it all.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-primary/30">
                  <span className="text-3xl font-serif font-bold text-gradient-gold">01</span>
                  <h4 className="text-foreground font-medium mt-2 mb-1">Design</h4>
                  <p className="text-sm text-muted-foreground">2D, 3D & Elevations</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary/30">
                  <span className="text-3xl font-serif font-bold text-gradient-gold">02</span>
                  <h4 className="text-foreground font-medium mt-2 mb-1">Execute</h4>
                  <p className="text-sm text-muted-foreground">Civil, Electrical & Carpentry</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary/30">
                  <span className="text-3xl font-serif font-bold text-gradient-gold">03</span>
                  <h4 className="text-foreground font-medium mt-2 mb-1">Deliver</h4>
                  <p className="text-sm text-muted-foreground">On-time, Turnkey Handover</p>
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
              Let's Build Something Beautiful Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Ready to experience what stress-free interior execution feels like? 
              Start a conversation with us today.
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

export default About;
