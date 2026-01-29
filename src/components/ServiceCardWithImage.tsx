interface ServiceCardWithImageProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCardWithImage = ({ title, description, image }: ServiceCardWithImageProps) => {
  return (
    <div className="glow-card group overflow-hidden h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCardWithImage;
