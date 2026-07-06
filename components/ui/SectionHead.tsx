import Eyebrow from "./Eyebrow";

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}: SectionHeadProps) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05] tracking-wide ${
          light ? "text-white" : "text-night"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            light ? "text-white/70" : "text-night/60"
          } ${center ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
