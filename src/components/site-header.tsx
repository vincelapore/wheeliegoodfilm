"use client";

import { useEffect, useId, useRef, useState } from "react";
import { WheelMark } from "@/components/wheel-mark";

const nav = [
  { href: "#week", label: "Workshops" },
  { href: "#production", label: "Production" },
  { href: "#work", label: "Films" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    function closeOnDesktop() {
      if (media.matches) setOpen(false);
    }
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    function onPointer(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
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

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-20 bg-sky/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-3"
          onClick={closeMenu}
        >
          <WheelMark priority className="h-11 w-auto" />
          <span className="font-display text-2xl leading-none font-semibold">
            Wheelie Good Film
          </span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button btn inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          id={menuId}
          aria-label="Primary"
          className={
            open
              ? "absolute inset-x-0 top-full block bg-cream px-5 py-3 shadow-[0_16px_32px_rgba(27,58,75,0.12)] md:static md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:block"
          }
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center">
            {nav.map((item) => {
              const id = item.href.slice(1);
              const current = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={current ? "true" : undefined}
                    className="nav-link flex min-h-11 items-center rounded-2xl px-4 text-base font-semibold text-ink md:inline-flex md:rounded-full md:px-3 md:text-sm"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 md:pt-0 md:pl-2">
              <a
                href="#brief"
                className="btn btn-fill inline-flex min-h-11 w-full items-center justify-center rounded-full bg-ink px-4 text-sm font-bold text-cream md:w-auto"
                onClick={closeMenu}
              >
                Hire us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
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
