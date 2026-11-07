import type { CSSProperties } from "react";

/** Classic 5-point star, viewBox 0 0 80 80, center 40,40. */
export const STAR_PATH =
  "M40 4 48.23 28.67 74.24 28.88 53.31 44.33 61.16 69.12 40 54 18.84 69.12 26.69 44.33 5.76 28.88 31.77 28.67Z";

export const STAR_VIEWBOX = "0 0 80 80";

/** Imperative SVG markup for non-React spawners (e.g. sparkle trail). */
export function starSvgMarkup() {
  return `<svg viewBox="${STAR_VIEWBOX}" width="100%" height="100%" aria-hidden="true"><path d="${STAR_PATH}" fill="currentColor" stroke-linejoin="round"/></svg>`;
}

export function Star({
  className = "",
  variant = "fill",
  delay = "0s",
}: {
  className?: string;
  variant?: "fill" | "outline";
  delay?: string;
}) {
  return (
    <svg
      viewBox={STAR_VIEWBOX}
      className={`star ${className}`}
      style={{ "--drift-delay": delay } as CSSProperties}
      aria-hidden="true"
    >
      {variant === "outline" ? (
        <path
          d={STAR_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      ) : (
        <path d={STAR_PATH} fill="currentColor" strokeLinejoin="round" />
      )}
    </svg>
  );
}
