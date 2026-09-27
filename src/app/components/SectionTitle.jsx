/**
 * Avataar-style section heading: italic serif eyebrow, centred Playfair
 * title with an italic copper highlight, and a short copper rule.
 */
export function TitleSeparator({ className = "" }) {
  return (
    <span className={`mx-auto flex w-24 items-center justify-center gap-2 text-primary ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-current opacity-40" />
      <span className="size-1.5 rotate-45 bg-current" />
      <span className="h-px flex-1 bg-current opacity-40" />
    </span>
  );
}

export default function SectionTitle({ eyebrow, highlight, title, text, align = "center", light = false, as: Tag = "h2" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10 md:mb-14`}>
      {eyebrow && (
        <span className={`font-display italic font-semibold text-xl md:text-2xl block mb-2 ${light ? "text-secondary" : "text-primary"}`}>
          {eyebrow}
        </span>
      )}
      <Tag className={`text-3xl md:text-[40px] font-semibold leading-tight mb-4 ${light ? "text-white" : "text-ink"}`}>
        {highlight && <span className={`italic ${light ? "text-secondary" : "text-primary"}`}>{highlight} </span>}
        {title}
      </Tag>
      {text && <p className={`text-base md:text-lg ${light ? "text-white/75" : "text-bodycolor"}`}>{text}</p>}
      <TitleSeparator className={center ? "mt-4" : "mt-4 !mx-0"} />
    </div>
  );
}
