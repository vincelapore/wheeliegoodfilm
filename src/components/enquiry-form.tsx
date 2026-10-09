"use client";

import { FormEvent } from "react";

const fieldClass =
  "min-h-11 w-full rounded-xl border border-line bg-cream px-3 py-2.5 text-sm text-ink";

export function EnquiryForm({ email }: { email: string }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const project = String(data.get("project") ?? "").trim();
    const budget = String(data.get("budget") ?? "");
    const timeline = String(data.get("timeline") ?? "");
    const body = [
      `Project: ${project}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
    ].join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent(
      `Project enquiry: ${project}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="project" className="text-sm font-bold">
          Project name
        </label>
        <input
          id="project"
          name="project"
          required
          autoComplete="off"
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="budget" className="text-sm font-bold">
          Budget range
        </label>
        <div className="relative mt-2">
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option>Not sure yet</option>
            <option>Under $2,000</option>
            <option>$2,000–$8,000</option>
            <option>$8,000–$20,000</option>
            <option>Over $20,000</option>
          </select>
          <Chevron />
        </div>
      </div>
      <div>
        <label htmlFor="timeline" className="text-sm font-bold">
          Timeline
        </label>
        <div className="relative mt-2">
          <select
            id="timeline"
            name="timeline"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            <option>No fixed date</option>
            <option>This month</option>
            <option>In the next 3 months</option>
            <option>Later this year</option>
          </select>
          <Chevron />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-fill mt-2 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-ink text-sm font-bold text-cream"
      >
        Send enquiry
      </button>
      <p className="text-sm leading-6 text-muted">
        Opens an email to Carter. Or write straight to{" "}
        <a
          className="font-bold break-all text-ink underline decoration-ink/30 underline-offset-4"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        .
      </p>
    </form>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
      aria-hidden="true"
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
