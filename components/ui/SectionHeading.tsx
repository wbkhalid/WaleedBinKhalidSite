type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-title">
        <p className="eyebrow"><span />{eyebrow}</p>
        <Heading>{title}</Heading>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
