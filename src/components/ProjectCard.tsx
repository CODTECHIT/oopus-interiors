interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
}

const ProjectCard = ({ title, category, image, description }: ProjectCardProps) => {
  return (
    <div className="glow-card group overflow-hidden bg-primary/50">
      {/* Image Container with Safety Background */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black isolate">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover will-change-transform opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: 'translate3d(0,0,0) scale(1.02)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-accent/90 text-background rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
