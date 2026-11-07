"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PunchHoles, Scrap } from "@/components/collage";
import { WheelFrame, WheelMark } from "@/components/wheel-mark";

const nav = [
  { href: "#week", label: "Workshops" },
  { href: "#production", label: "Production" },
  { href: "#work", label: "Films" },
  { href: "#about", label: "About" },
];

const CLOSE_MS = 280;

export function SiteHeader() {
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef(0);
  const [open, setOpen] = useState(false);
  const [present, setPresent] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    function closeOnDesktop() {
      if (media.matches) setOpen(false);
    }
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (open) {
      setPresent(true);
      return;
    }
    setRevealed(false);
  }, [open]);

  useEffect(() => {
    if (!present || !open) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRevealed(true));
    });
    return () => cancelAnimationFrame(id);
  }, [present, open]);

  useEffect(() => {
    if (open || !present) return;
    closeTimerRef.current = window.setTimeout(() => setPresent(false), CLOSE_MS);
    return () => window.clearTimeout(closeTimerRef.current);
  }, [open, present]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));

    function update() {
      const marker = 180;
      let current = "";
      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= marker) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  const menu =
    mounted && present
      ? createPortal(
          <div
            className="menu-modal md:hidden"
            data-open={revealed ? "true" : "false"}
          >
            <button
              type="button"
              className="menu-modal-scrim"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={closeMenu}
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="menu-modal-stage"
            >
              <div className="menu-modal-paper">
                <Scrap
                  paper="lined"
                  tilt="-1.2deg"
                  tape
                  tear="a"
                  frameClassName="menu-modal-scrap w-[min(22rem,calc(100vw-2.5rem))]"
                  className="relative px-6 pt-8 pb-7"
                >
                  <PunchHoles />
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="btn absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-sm text-ink"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <CloseIcon />
                  </button>
                  <p className="kicker pr-10">Menu</p>
                  <nav id={menuId} aria-label="Primary" className="mt-4">
                    <NavList
                      active={active}
                      onNavigate={closeMenu}
                      variant="modal"
                    />
                  </nav>
                </Scrap>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header className="sticky top-0 z-20 bg-sage/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a
            href="#top"
            className="flex min-h-11 items-center gap-3"
            onClick={closeMenu}
          >
            <WheelFrame className="inline-flex shrink-0 -rotate-3 bg-cream p-1 shadow-[0_6px_10px_rgba(44,44,40,0.12)]">
              <WheelMark priority spinOnLoad className="h-9 w-auto md:h-11" />
            </WheelFrame>
            <span className="wordmark max-w-[9.2rem] sm:max-w-none">
              A Wheelie Good Film Company
            </span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button btn inline-flex size-11 shrink-0 items-center justify-center rounded-sm text-ink md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="dialog"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          <nav aria-label="Primary" className="hidden md:block">
            <NavList active={active} onNavigate={closeMenu} variant="bar" />
          </nav>
        </div>
      </header>
      {menu}
    </>
  );
}

function NavList({
  active,
  onNavigate,
  variant,
}: {
  active: string;
  onNavigate: () => void;
  variant: "bar" | "modal";
}) {
  const modal = variant === "modal";

  return (
    <ul
      className={
        modal
          ? "flex flex-col gap-1"
          : "flex flex-col gap-1 md:flex-row md:items-center"
      }
    >
      {nav.map((item) => {
        const id = item.href.slice(1);
        const current = active === id;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={current ? "true" : undefined}
              className={
                modal
                  ? "nav-link flex min-h-12 items-center rounded-sm px-3 font-display text-2xl italic text-ink"
                  : "nav-link flex min-h-11 items-center rounded-sm px-4 font-display text-base italic text-ink md:inline-flex md:px-3 md:text-sm"
              }
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        );
      })}
      <li className={modal ? "pt-3" : "pt-2 md:pt-0 md:pl-2"}>
        <a
          href="#brief"
          className={
            modal
              ? "btn btn-fill inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-4 font-display text-xl italic text-cream"
              : "btn btn-fill inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-ink px-4 font-display text-base italic text-cream md:w-auto"
          }
          onClick={onNavigate}
        >
          Hire us
        </a>
      </li>
    </ul>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
