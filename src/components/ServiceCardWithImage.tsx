interface ServiceCardWithImageProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCardWithImage = ({ title, description, image }: ServiceCardWithImageProps) => {
  return (
    <div className="glow-card group overflow-hidden h-full bg-primary/50">
      {/* Image Container with Safety Background */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black isolate">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
          style={{ transform: 'translate3d(0,0,0) scale(1.02)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 relative z-10 transition-colors duration-500">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCardWithImage;
