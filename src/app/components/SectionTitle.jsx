/**
 * Travlla-style section heading: script eyebrow, two-tone title and a
 * decorative wave/leaf separator.
 */
export function TitleSeparator({ className = "" }) {
  return (
    <svg
      className={`mx-auto h-6 w-48 text-primary ${className}`}
      viewBox="0 0 200 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12c12 0 12-8 24-8s12 8 24 8 12-8 24-8M126 4c12 0 12 8 24 8s12-8 24-8 12 8 24 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path d="M100 2c-6 4-8 10-2 20 6-10 4-16 2-20z" fill="#85d200" />
      <path d="M92 8c-2 5 0 10 6 13-1-6-2-10-6-13zM108 8c2 5 0 10-6 13 1-6 2-10 6-13z" fill="currentColor" />
    </svg>
  );
}

export default function SectionTitle({ eyebrow, highlight, title, text, align = "center", light = false, as: Tag = "h2" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12 md:mb-16`}>
      {eyebrow && (
        <span className={`font-display text-2xl md:text-3xl block mb-2 ${light ? "text-secondary" : "text-amber-500"}`}>
          {eyebrow}
        </span>
      )}
      <Tag className={`text-3xl md:text-5xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-dark"}`}>
        {highlight && <span className={light ? "text-secondary" : "text-primary"}>{highlight} </span>}
        {title}
      </Tag>
      {text && <p className={`text-lg ${light ? "text-white/75" : "text-bodycolor"}`}>{text}</p>}
      <TitleSeparator className={center ? "mt-3" : "mt-3 !mx-0"} />
    </div>
  );
}
