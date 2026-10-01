import { TechBadge } from "@/components/ui/TechBadge";

type SkillCategoryProps = {
  title: string;
  eyebrow: string;
  description: string;
  items: readonly string[];
  featured?: readonly string[];
};

export function SkillCategory({
  title,
  eyebrow,
  description,
  items,
  featured = [],
}: SkillCategoryProps) {
  return (
    <article className="skill-category">
      <div className="skill-category-copy">
        <span>{eyebrow}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {featured.length ? (
        <div className="skill-featured-row">
          {featured.map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </div>
      ) : null}
      <div className="skill-badge-row">
        {items.filter((item) => !featured.includes(item)).map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
    </article>
  );
}
