interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
}

const ProjectCard = ({ title, category, image, description }: ProjectCardProps) => {
  return (
    <div className="glow-card group overflow-hidden transform-gpu">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden isolate">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110 transform-gpu"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 transform-gpu" />

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
