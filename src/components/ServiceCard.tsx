import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  return (
    <div className="glow-card group p-6 md:p-8 h-full transform-gpu">
      {/* Icon */}
      <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/30 group-hover:border-accent/50 transition-all duration-500">
        <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-4 pt-4 border-t border-border/30">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
