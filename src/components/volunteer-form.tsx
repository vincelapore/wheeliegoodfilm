"use client";

import { FormEvent } from "react";

const fieldClass =
  "min-h-11 w-full rounded-sm border border-ink/15 bg-cream px-3 py-2.5 text-sm text-ink";

export function VolunteerForm({
  email,
  roles,
}: {
  email: string;
  roles: string[];
}) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const availability = String(data.get("availability") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Role: ${role}`,
      `Availability: ${availability}`,
      note ? `Note:\n${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent(
      `Volunteer application: ${role}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="volunteer-name" className="kicker">
          Your name
        </label>
        <input
          id="volunteer-name"
          name="name"
          required
          autoComplete="name"
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="volunteer-role" className="kicker">
          Role you want
        </label>
        <div className="relative mt-2">
          <select
            id="volunteer-role"
            name="role"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
          <Chevron />
        </div>
      </div>
      <div>
        <label htmlFor="volunteer-availability" className="kicker">
          Availability
        </label>
        <input
          id="volunteer-availability"
          name="availability"
          required
          autoComplete="off"
          placeholder="Weekends, evenings, specific dates…"
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="volunteer-note" className="kicker">
          Anything else
        </label>
        <textarea
          id="volunteer-note"
          name="note"
          rows={3}
          autoComplete="off"
          placeholder="Experience, kit you can bring, or why you want in."
          className={`${fieldClass} mt-2 resize-y`}
        />
      </div>
      <button
        type="submit"
        className="btn btn-fill mt-2 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-sm bg-ink font-display text-lg italic text-cream"
      >
        Apply to volunteer
      </button>
      <p className="text-sm leading-6">
        Or write straight to{" "}
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
