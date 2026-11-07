"use client";

import { starSvgMarkup } from "@/components/star";
import { useEffect, useRef } from "react";

const TONES = ["gold", "rose", "green"] as const;
type Tone = (typeof TONES)[number];

const TONE_COLOR: Record<Tone, string> = {
  gold: "#c4963c",
  rose: "#d88878",
  green: "#2f7a4c",
};

const MAX_LIVE = 48;
const MIN_GAP = 5;
const GRAVITY = 980;
const DRAG = 1.15;
const MAX_MOUSE_SPEED = 1400;
const THROW = 0.08;

type Particle = {
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  spin: number;
  life: number;
  maxLife: number;
  size: number;
  mass: number;
};

function canSparkle() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function createSparkle(isStar: boolean, tone: Tone, size: number) {
  const el = document.createElement("span");
  el.className = isStar
    ? "sparkle-bit sparkle-star"
    : `sparkle-bit sparkle-dot sparkle-${tone}`;
  el.setAttribute("aria-hidden", "true");
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;

  if (isStar) {
    el.innerHTML = starSvgMarkup();
    el.style.color = TONE_COLOR[tone];
  }

  return el;
}

export function SparkleTrail() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || !canSparkle()) return;

    const particles: Particle[] = [];
    let lastX = Number.NaN;
    let lastY = Number.NaN;
    let lastT = 0;
    let mouseVx = 0;
    let mouseVy = 0;
    let frame = 0;
    let prevFrameT = 0;

    function cullOldest() {
      while (particles.length >= MAX_LIVE) {
        particles.shift()?.el.remove();
      }
    }

    function spawn(x: number, y: number) {
      cullOldest();

      const tone = TONES[Math.floor(Math.random() * TONES.length)];
      const isStar = Math.random() > 0.45;
      const size = isStar ? 14 + Math.random() * 12 : 8 + Math.random() * 7;
      const mass = 0.75 + size / 28;
      const life = 1.35 + Math.random() * 0.55;
      const el = createSparkle(isStar, tone, size);
      layer.appendChild(el);

      const speed = Math.hypot(mouseVx, mouseVy);
      const throwAmt = THROW * Math.min(1, speed / 900);

      particles.push({
        el,
        x: x - size / 2,
        y: y - size / 2,
        vx: mouseVx * throwAmt + (Math.random() - 0.5) * 18,
        vy: mouseVy * throwAmt * 0.35 + Math.random() * 16 + (1.1 - mass) * 12,
        rotation: Math.random() * 40 - 20,
        spin: (Math.random() - 0.5) * (220 / mass),
        life,
        maxLife: life,
        size,
        mass,
      });
    }

    function tick(now: number) {
      frame = requestAnimationFrame(tick);
      if (!prevFrameT) {
        prevFrameT = now;
        return;
      }

      const dt = Math.min(0.032, (now - prevFrameT) / 1000);
      prevFrameT = now;

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];

        p.vy += GRAVITY * p.mass * 0.55 * dt;
        p.vx *= Math.exp(-DRAG * dt);
        p.vy *= Math.exp(-DRAG * 0.35 * dt);
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rotation += p.spin * dt;
        p.life -= dt;

        const t = 1 - p.life / p.maxLife;
        const opacity = t < 0.55 ? 1 : 1 - (t - 0.55) / 0.45;
        const scale = 1 - t * 0.35;

        p.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${scale})`;
        p.el.style.opacity = String(Math.max(0, opacity));

        if (p.life <= 0 || p.y > window.innerHeight + 40) {
          p.el.remove();
          particles.splice(i, 1);
        }
      }
    }

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;

      const x = event.clientX;
      const y = event.clientY;
      const t = performance.now();

      if (!Number.isNaN(lastX) && lastT) {
        const dx = x - lastX;
        const dy = y - lastY;
        if (dx === 0 && dy === 0) return;

        const moveDt = Math.max(0.008, (t - lastT) / 1000);
        const rawVx = dx / moveDt;
        const rawVy = dy / moveDt;
        const speed = Math.hypot(rawVx, rawVy);
        const clamp = speed > MAX_MOUSE_SPEED ? MAX_MOUSE_SPEED / speed : 1;
        mouseVx = rawVx * clamp;
        mouseVy = rawVy * clamp;

        if (dx * dx + dy * dy < MIN_GAP * MIN_GAP) return;
      }

      lastX = x;
      lastY = y;
      lastT = t;
      spawn(x, y);
    }

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      for (const particle of particles) particle.el.remove();
      particles.length = 0;
      layer.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="sparkle-trail pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      aria-hidden="true"
    />
  );
}
