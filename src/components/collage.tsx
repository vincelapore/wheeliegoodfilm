import type { CSSProperties, ReactNode } from "react";

const starPath =
  "M40 1.5 48.2 24.8 73.2 15.2 56.8 36.2 78.5 44 55.6 52.4 68.8 76.2 40 60.5 11.2 76.2 24.4 52.4 1.5 44 23.2 36.2 6.8 15.2 31.8 24.8Z";

export function Star({
  className = "",
  variant = "fill",
}: {
  className?: string;
  variant?: "fill" | "outline";
}) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {variant === "outline" ? (
        <path
          d={starPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      ) : (
        <path d={starPath} fill="currentColor" />
      )}
    </svg>
  );
}

export function Sequin({
  tone = "gold",
  className = "",
}: {
  tone?: "gold" | "rose" | "green";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`sequin sequin-${tone} inline-block ${className}`}
    />
  );
}

export function BinderClip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 78" className={className} aria-hidden="true">
      <path
        d="M20 30V16a12 12 0 0 1 24 0v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="6" y="32" width="52" height="30" rx="2" fill="currentColor" />
      <path
        d="M14 42h36"
        fill="none"
        stroke="#efece4"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 96" className={className} aria-hidden="true">
      <path
        d="M30 12c0-7-7-11-13-8-8 3-9 12-6 18l13 46c2 8 9 12 15 8 7-4 6-14 2-20L27 24c-2-6-7-8-11-4-5 4-3 11 1 16l11 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PunchHoles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-8 left-0 hidden -translate-x-1/2 flex-col justify-between sm:flex"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <span
          key={index}
          className="block size-3 rounded-full bg-sage shadow-[inset_0_1px_2px_rgba(44,44,40,0.35)]"
        />
      ))}
    </div>
  );
}

function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`tape-strip pointer-events-none absolute top-0 left-1/2 z-10 h-7 w-[5.75rem] -translate-x-1/2 -translate-y-1/2 -rotate-3 ${className}`}
    />
  );
}

type ScrapProps = {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
  paper?: "lined" | "graph" | "plain";
  tilt?: string;
  tape?: boolean;
  tear?: "a" | "b" | "c";
};

export function Scrap({
  children,
  className = "",
  frameClassName = "",
  paper = "plain",
  tilt = "0deg",
  tape = false,
  tear = "a",
}: ScrapProps) {
  return (
    <div
      className={`scrap-shadow relative h-full ${frameClassName}`}
      style={{ "--tilt": tilt } as CSSProperties}
    >
      {tape ? <Tape /> : null}
      <div className={`tear-${tear} paper-${paper} relative h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function Mount({
  children,
  className = "",
  frameClassName = "",
  tilt = "-0.6deg",
  tape = true,
}: {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
  tilt?: string;
  tape?: boolean;
}) {
  return (
    <div
      className={`scrap-shadow relative ${frameClassName}`}
      style={{ "--tilt": tilt } as CSSProperties}
    >
      {tape ? <Tape /> : null}
      <div className={`bg-cream ${className}`}>{children}</div>
    </div>
  );
}
