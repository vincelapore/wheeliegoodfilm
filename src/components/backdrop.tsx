import { Sequin, Star } from "@/components/collage";
import type { CSSProperties } from "react";

type FloatProps = {
  className?: string;
  delay?: string;
  duration?: string;
  rotate?: string;
  drift?: "a" | "b" | "c";
};

function floatStyle({
  delay = "0s",
  duration,
  rotate = "0deg",
}: Pick<FloatProps, "delay" | "duration" | "rotate">): CSSProperties {
  return {
    "--drift-delay": delay,
    ...(duration ? { "--drift-duration": duration } : {}),
    "--rest-rotate": rotate,
  } as CSSProperties;
}

/** Soft sticker-like disc — sits behind content like a scrapbook wash. */
export function Blob({
  className = "",
  delay = "0s",
  duration,
  rotate = "0deg",
  drift = "a",
}: FloatProps) {
  return (
    <span
      aria-hidden="true"
      className={`backdrop-float backdrop-drift-${drift} backdrop-blob ${className}`}
      style={floatStyle({ delay, duration, rotate })}
    />
  );
}

/** Thin ring, like a washer or badge outline. */
export function Ring({
  className = "",
  delay = "0s",
  duration,
  rotate = "0deg",
  drift = "b",
}: FloatProps) {
  return (
    <span
      aria-hidden="true"
      className={`backdrop-float backdrop-drift-${drift} backdrop-ring ${className}`}
      style={floatStyle({ delay, duration, rotate })}
    />
  );
}

/** Small rotated square — confetti scrap. */
export function Confetti({
  className = "",
  delay = "0s",
  duration,
  rotate = "18deg",
  drift = "c",
}: FloatProps) {
  return (
    <span
      aria-hidden="true"
      className={`backdrop-float backdrop-drift-${drift} backdrop-confetti ${className}`}
      style={floatStyle({ delay, duration, rotate })}
    />
  );
}

/** Torn gingham patch. */
export function Patch({
  className = "",
  delay = "0s",
  duration,
  rotate = "-8deg",
  drift = "a",
  tear = "a",
}: FloatProps & { tear?: "a" | "b" | "c" }) {
  return (
    <span
      aria-hidden="true"
      className={`backdrop-float backdrop-drift-${drift} gingham tear-${tear} ${className}`}
      style={floatStyle({ delay, duration, rotate })}
    />
  );
}

type FieldProps = {
  className?: string;
  /** Which constellation of shapes to show. */
  variant?: "hero" | "mid" | "mid-alt" | "tail" | "brief";
};

/**
 * Decorative shapes for empty sage space. Motion mirrors `.star` drift —
 * same ease, staggered delays — so the page feels quietly alive.
 */
export function BackdropField({
  className = "",
  variant = "mid",
}: FieldProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <Blob
          delay="-1.1s"
          duration="9.5s"
          className="absolute top-[18%] left-[-4%] size-28 bg-mist/35 md:left-[2%] md:size-36"
        />
        <Blob
          delay="-5.2s"
          duration="11s"
          drift="b"
          className="absolute right-[-6%] bottom-[22%] size-32 bg-cream/25 md:right-[3%] md:size-40"
        />
        <Ring
          delay="-2.6s"
          duration="10s"
          className="absolute top-[42%] left-[6%] size-16 border-pine/25 md:left-[10%] md:size-20"
        />
        <Ring
          delay="-7.1s"
          duration="12s"
          drift="c"
          className="absolute top-[12%] right-[22%] hidden size-12 border-cream/40 md:block"
        />
        <Confetti
          delay="-0.8s"
          className="absolute top-[28%] right-[8%] size-3 bg-tape/50"
        />
        <Confetti
          delay="-3.9s"
          rotate="-22deg"
          className="absolute bottom-[30%] left-[14%] size-2.5 bg-pine/35"
        />
        <Confetti
          delay="-6.2s"
          rotate="40deg"
          className="absolute top-[55%] right-[14%] size-2 bg-cream/55"
        />
        <Patch
          delay="-4.5s"
          duration="13s"
          tear="b"
          className="absolute bottom-[8%] right-[6%] h-16 w-24 opacity-40 md:right-[12%]"
        />
        <Ring
          delay="-9.4s"
          duration="13s"
          drift="a"
          className="absolute bottom-[4%] right-[2%] hidden size-9 border-mist/40 md:block"
        />
        <Confetti
          delay="-2.7s"
          rotate="32deg"
          className="absolute top-[64%] left-[3%] size-2 bg-tape/40"
        />
        <Star
          delay="-8.2s"
          className="absolute top-[36%] left-[2%] hidden size-10 text-mist/80 md:block"
        />
        <Sequin
          tone="gold"
          delay="-1.8s"
          className="absolute top-[48%] right-[5%]"
        />
      </div>
    );
  }

  if (variant === "mid-alt") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <Blob
          delay="-1.9s"
          duration="11s"
          drift="c"
          className="absolute top-[14%] left-[-5%] size-28 bg-mist/25 md:left-[1%] md:size-36"
        />
        <Blob
          delay="-6.8s"
          duration="9.5s"
          className="absolute right-[-4%] bottom-[20%] size-24 bg-cream/22 md:right-[3%] md:size-32"
        />
        <Ring
          delay="-4.2s"
          duration="12s"
          className="absolute top-[58%] left-[8%] size-14 border-pine/18 md:left-[12%]"
        />
        <Ring
          delay="-0.9s"
          duration="10s"
          drift="b"
          className="absolute top-[8%] right-[8%] size-10 border-cream/40"
        />
        <Confetti
          delay="-3.6s"
          rotate="24deg"
          className="absolute top-[32%] left-[6%] size-2.5 bg-cream/55"
        />
        <Confetti
          delay="-7.8s"
          rotate="-18deg"
          className="absolute top-[44%] right-[10%] size-3 bg-tape/35"
        />
        <Star
          variant="outline"
          delay="-5.1s"
          className="absolute bottom-[10%] left-[5%] size-12 text-cream/65 md:size-14"
        />
        <Sequin
          tone="gold"
          delay="-2.7s"
          className="absolute top-[20%] right-[4%]"
        />
        <Patch
          delay="-9s"
          duration="13s"
          tear="b"
          rotate="6deg"
          className="absolute top-[36%] left-[-2%] h-14 w-20 opacity-30 md:left-[2%]"
        />
        <Blob
          delay="-4.8s"
          duration="12.5s"
          drift="b"
          className="absolute bottom-[-4%] left-[-5%] hidden size-20 bg-cream/15 md:block"
        />
        <Confetti
          delay="-1.6s"
          rotate="12deg"
          className="absolute bottom-[6%] right-[3%] size-2 bg-mist/70"
        />
        <Ring
          delay="-8.3s"
          duration="14s"
          drift="a"
          className="absolute top-[72%] left-[-2%] hidden size-11 border-cream/30 md:block"
        />
      </div>
    );
  }

  if (variant === "tail") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <Blob
          delay="-2.4s"
          duration="10.5s"
          className="absolute top-[10%] left-[-3%] size-24 bg-mist/30 md:left-[4%] md:size-32"
        />
        <Ring
          delay="-5.8s"
          duration="11s"
          className="absolute right-[4%] bottom-[18%] size-14 border-pine/20 md:size-16"
        />
        <Confetti
          delay="-1.3s"
          rotate="-14deg"
          className="absolute top-[40%] left-[8%] size-2.5 bg-tape/45"
        />
        <Confetti
          delay="-4.7s"
          rotate="28deg"
          className="absolute top-[22%] right-[18%] size-2 bg-cream/50"
        />
        <Star
          variant="outline"
          delay="-6.9s"
          className="absolute top-[55%] left-[3%] size-12 text-cream/70 md:size-14"
        />
        <Sequin
          tone="rose"
          delay="-3.1s"
          className="absolute top-[14%] right-[10%]"
        />
        <Patch
          delay="-8s"
          duration="12s"
          tear="c"
          rotate="10deg"
          className="absolute top-[62%] right-[-2%] h-14 w-20 opacity-35 md:right-[6%]"
        />
        <Blob
          delay="-3.7s"
          duration="12s"
          drift="c"
          className="absolute bottom-[-6%] left-[-6%] size-24 bg-mist/20 md:size-28"
        />
        <Confetti
          delay="-9.4s"
          rotate="-8deg"
          className="absolute bottom-[5%] left-[2%] size-2 bg-cream/45"
        />
        <Ring
          delay="-1.8s"
          duration="13s"
          drift="a"
          className="absolute top-[78%] right-[-2%] hidden size-10 border-pine/15 md:block"
        />
      </div>
    );
  }

  if (variant === "brief") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <Blob
          delay="-2.2s"
          duration="11s"
          drift="b"
          className="absolute top-[8%] right-[-6%] size-32 bg-cream/20 md:right-[8%] md:size-44"
        />
        <Blob
          delay="-7.1s"
          duration="13s"
          className="absolute bottom-[10%] right-[22%] hidden size-24 bg-mist/25 lg:block"
        />
        <Ring
          delay="-1.5s"
          duration="10.5s"
          className="absolute top-[34%] right-[6%] size-16 border-pine/20 md:right-[16%] md:size-20"
        />
        <Ring
          delay="-8.6s"
          duration="12s"
          drift="c"
          className="absolute top-[18%] right-[30%] hidden size-11 border-cream/40 lg:block"
        />
        <Confetti
          delay="-3.3s"
          rotate="18deg"
          className="absolute top-[20%] right-[12%] size-2.5 bg-tape/45"
        />
        <Confetti
          delay="-5.9s"
          rotate="-26deg"
          className="absolute bottom-[22%] right-[18%] size-3 bg-pine/28"
        />
        <Confetti
          delay="-0.7s"
          rotate="8deg"
          className="absolute top-[62%] left-[6%] size-2 bg-cream/55"
        />
        <Star
          variant="outline"
          delay="-4.6s"
          className="absolute top-[14%] right-[3%] hidden size-12 text-cream/65 md:block"
        />
        <Sequin
          tone="rose"
          delay="-2.8s"
          className="absolute top-[46%] right-[5%]"
        />
        <Sequin
          tone="gold"
          delay="-6.2s"
          className="absolute bottom-[16%] right-[28%] hidden md:block"
        />
        <Patch
          delay="-9.2s"
          duration="13s"
          tear="c"
          rotate="-7deg"
          className="absolute bottom-[6%] left-[-4%] h-14 w-20 opacity-28"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Blob
        delay="-3.3s"
        duration="10s"
        drift="b"
        className="absolute top-[8%] right-[-5%] size-28 bg-cream/20 md:right-[2%] md:size-36"
      />
      <Blob
        delay="-7.6s"
        duration="12s"
        className="absolute bottom-[12%] left-[-4%] size-24 bg-mist/28 md:left-[1%] md:size-28"
      />
      <Ring
        delay="-1.5s"
        duration="9s"
        drift="c"
        className="absolute top-[35%] left-[5%] size-12 border-cream/35 md:left-[8%]"
      />
      <Ring
        delay="-9.2s"
        duration="13s"
        className="absolute top-[18%] right-[12%] hidden size-16 border-pine/22 md:block"
      />
      <Confetti
        delay="-2.1s"
        className="absolute top-[48%] right-[6%] size-2.5 bg-pine/30"
      />
      <Confetti
        delay="-5.5s"
        rotate="-30deg"
        className="absolute bottom-[28%] left-[12%] size-3 bg-tape/40"
      />
      <Confetti
        delay="-8.4s"
        rotate="12deg"
        className="absolute top-[62%] right-[20%] size-2 bg-mist/70"
      />
      <Star
        delay="-4.1s"
        className="absolute top-[70%] right-[4%] size-11 text-pine/50 md:size-14"
      />
      <Sequin
        tone="green"
        delay="-0.6s"
        className="absolute top-[26%] left-[3%]"
      />
        <Patch
        delay="-6.4s"
        duration="11.5s"
        tear="a"
        className="absolute top-[42%] right-[-3%] hidden h-16 w-24 opacity-35 md:block md:right-[1%]"
      />
      <Ring
        delay="-2.8s"
        duration="12s"
        drift="b"
        className="absolute bottom-[3%] left-[-2%] hidden size-10 border-mist/45 md:block"
      />
      <Confetti
        delay="-7.2s"
        rotate="22deg"
        className="absolute top-[8%] right-[3%] size-2 bg-cream/50"
      />
    </div>
  );
}
