import Image, { type StaticImageData } from "next/image";

type ProjectMockupProps = {
  mainImage?: StaticImageData;
  secondaryImages?: StaticImageData[];
  alt: string;
  title: string;
  variant?: "browser" | "showcase" | "layered";
  priority?: boolean;
};

export function ProjectMockup({
  mainImage,
  secondaryImages = [],
  alt,
  title,
  variant = "browser",
  priority = false,
}: ProjectMockupProps) {
  if (!mainImage) {
    return null;
  }

  return (
    <div className={`project-mockup-shell ${variant}-mockup`}>
      {variant === "layered" ? (
        <div className="layered-stage">
          {secondaryImages[0] ? (
            <div className="browser-frame secondary-layer">
              <BrowserBar title="Analytics" />
              <MockupImage src={secondaryImages[0]} alt="" sizes="(max-width: 980px) 58vw, 360px" />
            </div>
          ) : null}
          <div className="showcase-frame primary-layer">
            <MockupImage src={mainImage} alt={alt} priority={priority} />
          </div>
        </div>
      ) : variant === "showcase" ? (
        <div className="showcase-frame">
          <MockupImage src={mainImage} alt={alt} priority={priority} />
        </div>
      ) : (
        <div className="browser-frame">
          <BrowserBar title={title} />
          <MockupImage src={mainImage} alt={alt} priority={priority} />
        </div>
      )}
    </div>
  );
}

function BrowserBar({ title }: { title: string }) {
  return (
    <div className="browser-bar" aria-hidden="true">
      <span className="window-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="address-bar">{title}</span>
    </div>
  );
}

function MockupImage({
  src,
  alt,
  sizes = "(max-width: 720px) calc(100vw - 48px), (max-width: 980px) calc(100vw - 96px), 680px",
  priority,
}: {
  src: StaticImageData;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className="mockup-image-wrap" style={{ aspectRatio: `${src.width} / ${src.height}` }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="mockup-image"
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
