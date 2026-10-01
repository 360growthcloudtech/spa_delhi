/**
 * Home page section heading: "✦ EYEBROW ✦" pill, Playfair title with a
 * copper highlight, optional intro text and a short copper rule.
 */
export default function HomeHeading({
  eyebrow,
  title,
  highlight,
  after,
  text,
  id,
  light = false,
  align = "center",
  as: Tag = "h2",
  className = "",
}) {
  const center = align === "center";
  return (
    <header className={`${center ? "mx-auto text-center" : ""} max-w-3xl mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            light ? "bg-white/10 text-secondary ring-1 ring-secondary/40" : "bg-amber-200/70 text-amber-700"
          }`}
        >
          ✦ {eyebrow} ✦
        </span>
      )}
      <Tag
        id={id}
        className={`mt-5 font-title text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight ${
          light ? "text-white" : "text-amber-900"
        }`}
      >
        {title}
        {highlight && <span className={light ? " text-secondary" : " text-amber-500"}> {highlight}</span>}
        {after && <> {after}</>}
      </Tag>
      {text && (
        <p className={`mt-4 text-sm md:text-base leading-relaxed ${light ? "text-white/75" : "text-bodycolor"}`}>{text}</p>
      )}
      <span
        className={`mt-6 block h-0.5 w-16 rounded-full ${light ? "bg-secondary" : "bg-amber-500"} ${center ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
    </header>
  );
}
