"use client";

import Image from "next/image";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

function spinMark(mark: Element) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (mark.getAnimations().some((animation) => animation.playState === "running")) {
    return;
  }

  const easing = getComputedStyle(document.documentElement)
    .getPropertyValue("--ease-out")
    .trim();

  mark.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 600, easing },
  );
}

export function WheelFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  function onPointerEnter(event: PointerEvent<HTMLSpanElement>) {
    if (event.pointerType !== "mouse") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const mark = event.currentTarget.querySelector(".wheel-mark");
    if (!(mark instanceof Element)) return;
    spinMark(mark);
  }

  return (
    <span className={className} onPointerEnter={onPointerEnter}>
      {children}
    </span>
  );
}

export function WheelMark({
  className,
  priority = false,
  spinOnLoad = false,
}: {
  className?: string;
  priority?: boolean;
  spinOnLoad?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!spinOnLoad) return;
    const frame = requestAnimationFrame(() => {
      if (ref.current) spinMark(ref.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [spinOnLoad]);

  return (
    <span ref={ref} className="wheel-mark inline-flex">
      <Image
        src="/logo.png"
        alt=""
        width={640}
        height={549}
        priority={priority}
        className={className}
      />
    </span>
  );
}

export function BurstFrame({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M100,6 L117.6,34.3 L145.5,21.2 L149.5,50.5 L179.7,54 L164.7,82.7 L194,100 L158,115.5 L185.7,149.5 L144.5,144.5 L148,183.1 L115,156 L100,195 L82.4,165.7 L54.5,178.8 L53.3,146.7 L18.6,147 L43,115.3 L3,100 L37.2,83.2 L20.3,54 L51.9,51.9 L53,18.6 L84.2,41.1 Z"
      />
    </svg>
  );
}
