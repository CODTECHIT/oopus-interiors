interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-muted-foreground text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
      {/* Gold Accent Line */}
      <div
        className={`mt-6 h-1 w-20 bg-gradient-to-r from-accent to-gold-light rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionHeading;
