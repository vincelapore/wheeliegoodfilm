import type { ReactNode } from "react";
import { FilmPlayer } from "@/components/film-player";
import { BurstFrame, WheelMark } from "@/components/wheel-mark";

const ticketsUrl = "https://events.humanitix.com/wheelie-good-film-week";
const instagramUrl = "https://www.instagram.com/wheeliegoodfilm.co/";
const youtubeUrl = "https://www.youtube.com/@wheeliegoodfilmcompany";
const email = "wheeliegoodfilm.co@outlook.com";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=23+Glenelg+Street+South+Brisbane+QLD+4101";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#week", label: "Film week" },
  { href: "#contact", label: "Contact" },
];

const doors = [
  {
    index: "01",
    href: "#work",
    title: "The work",
    body: "The Stars and Obsessive Compulsive Confliction. Both written and directed in 2024.",
    action: "Watch",
    tone: "blush",
  },
  {
    index: "02",
    href: "#week",
    title: "Workshops",
    body: "Film week, 28 Sep–2 Oct. Ages 8 to 17, at VentSpace in South Brisbane.",
    action: "See the week",
    tone: "gold",
  },
  {
    index: "03",
    href: `mailto:${email}`,
    title: "Contact",
    body: email,
    action: "Write to Carter",
    tone: "sage",
  },
];

const marquee = [
  "Short films",
  "Film week",
  "Meanjin",
  "Write to Carter",
];

const films = [
  {
    videoId: "IqM7fzaLeME",
    title: "The Stars",
    year: "2024",
    runtime: "8 min",
    kind: "Comedy",
    credit: "Written and directed by Carter Jayne",
    logline:
      "Rio takes on a missing-janitor case at school. Her friends plant the clues, then spend the day trying not to be caught.",
  },
  {
    videoId: "VuvVMObebqU",
    title: "Obsessive Compulsive Confliction",
    year: "2024",
    runtime: "3 min",
    kind: "Short",
    credit:
      "Written and directed by Carter Jayne, with Souper Chicken Productions",
    logline:
      "A short about the difficult work of accepting an OCD diagnosis.",
    note: "Assistant director Jess Tredinnick. Production assistant Rocio Gonzales.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>

      <header className="sticky top-0 z-20 bg-sky/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <WheelMark className="size-8 text-ink" />
            <span className="font-display text-2xl leading-none font-semibold">
              Wheelie Good Film
            </span>
          </a>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link inline-flex min-h-9 items-center rounded-full px-3 text-sm font-semibold text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="content">
        <section id="top" className="bg-sky">
          <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 pt-10 pb-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:px-8 md:pt-14 md:pb-16">
            <div>
              <p className="text-sm font-bold text-ink">
                A Wheelie Good Film Company · Meanjin
              </p>
              <h1 className="mt-4 max-w-xl font-display text-[clamp(3rem,6vw,5.2rem)] leading-[0.95] font-bold tracking-tight text-balance">
                <span className="sr-only">Wheelie Good Film. </span>
                Films, a{" "}
                <span className="rounded-lg bg-gold px-1.5 whitespace-nowrap">
                  workshop
                </span>
                , and a direct line.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-8">
                Carter Jayne writes and directs the shorts. He is a disabled
                filmmaker. The company also runs Film Week, and he reads the
                email.
              </p>
            </div>
            <a href="#work" className="group mx-auto block w-full max-w-[380px]">
              <span className="relative block aspect-square">
                <BurstFrame className="absolute inset-0 text-gold" />
                <span className="absolute inset-[22%] overflow-hidden rounded-full bg-night ring-4 ring-cream">
                  <img
                    src="https://i.ytimg.com/vi/VuvVMObebqU/hqdefault.jpg"
                    alt="Still from Obsessive Compulsive Confliction: hands resting on a leather journal"
                    width={480}
                    height={360}
                    className="absolute inset-x-0 top-[-42%] h-[250%] w-full max-w-none object-cover object-top"
                  />
                </span>
              </span>
              <span className="mt-3 block text-center text-sm font-bold">
                Obsessive Compulsive Confliction, 2024
              </span>
            </a>
          </div>
          <div className="mx-auto max-w-[1120px] px-5 pb-12 md:px-8 md:pb-16">
            <ul className="grid gap-4 md:grid-cols-3">
              {doors.map((door) => (
                <li key={door.index}>
                  <a
                    href={door.href}
                    data-tone={door.tone}
                    className="door flex h-full min-h-48 flex-col rounded-3xl p-6 md:p-7"
                  >
                    <p className="text-sm font-bold">{door.index}</p>
                    <p className="mt-3 font-display text-3xl leading-none font-bold">
                      {door.title}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
                      {door.body}
                    </p>
                    <p className="mt-auto pt-8">
                      <span className="inline-flex min-h-9 items-center rounded-full bg-ink px-4 text-sm font-bold text-cream">
                        {door.action}
                      </span>
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="overflow-hidden bg-gold text-ink">
          <p className="sr-only">
            Short films, film week, Meanjin, and a note to Carter.
          </p>
          <div className="marquee flex w-max py-3" aria-hidden="true">
            {[0, 1].map((copy) => (
              <p key={copy} className="flex shrink-0 font-display text-lg font-semibold">
                {marquee.map((item) => (
                  <span key={`${copy}-${item}`} className="px-4">
                    {item}
                    <span className="px-4" aria-hidden="true">
                      ·
                    </span>
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <section id="work" className="scroll-mt-20">
          <div className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                Selected work
              </h2>
              <a
                className="hidden text-sm font-bold underline decoration-ink/30 underline-offset-4 sm:inline"
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                All films
              </a>
            </div>

            <div className="mt-10">
              {films.map((film, index) => (
                <article
                  key={film.videoId}
                  className={`flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-12 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-[58%]">
                    <FilmPlayer
                      videoId={film.videoId}
                      title={`${film.title}, ${film.year}`}
                    />
                  </div>
                  <div className="md:w-[42%]">
                    <p className="text-sm">
                      <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">
                        {film.kind}
                      </span>
                      <span className="text-muted">
                        <span aria-hidden="true"> · </span>
                        {film.year}
                        <span aria-hidden="true"> · </span>
                        {film.runtime}
                      </span>
                    </p>
                    <h3 className="mt-3 font-display text-4xl leading-tight font-bold">
                      {film.title}
                    </h3>
                    <p className="mt-4 text-lg leading-8">{film.logline}</p>
                    <p className="mt-4 text-sm leading-6 text-muted">{film.credit}</p>
                    {"note" in film && film.note ? (
                      <p className="mt-2 text-sm leading-6 text-muted">{film.note}</p>
                    ) : null}
                  </div>
                </article>
              ))}

              <article className="py-12">
                <p>
                  <span className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-ink">
                    Music
                  </span>
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight font-bold md:text-4xl">
                  Song of Fairies Robbing an Orchard
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-muted">
                  A Wheelie Good Film Company title, with a backing track by
                  composer Kayley Nolan.
                </p>
              </article>
            </div>

            <p className="pt-4 text-sm leading-6 text-muted">
              <a
                className="font-bold text-ink underline decoration-ink/30 underline-offset-4"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              also carries Fighting Love and Project LL.
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-night text-cream">
          <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
            <div>
              <p className="text-sm font-bold text-gold">The company</p>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,4vw,3.8rem)] leading-tight font-bold">
                Named for the founder. Judged on the film.
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-lg leading-8 text-cream/85">
                <p>
                  Carter Jayne is disabled, and he runs A Wheelie Good Film
                  Company from Meanjin / Brisbane. He is an independent
                  filmmaker and a film student. Wheelie is the pun. Good is
                  the standard.
                </p>
                <p>
                  The released shorts are The Stars and Obsessive Compulsive
                  Confliction.
                  The second was made with Souper Chicken Productions.
                </p>
              </div>
            </div>
            <dl className="divide-y divide-line rounded-3xl bg-cream px-6 text-ink">
              <Fact term="Founder" detail="Carter Jayne" />
              <Fact term="Based" detail="Meanjin / Brisbane" />
              <Fact term="Practice" detail="Short films, and a youth intensive" />
              <Fact
                term="Email"
                detail={
                  <a className="font-bold underline decoration-ink/30 underline-offset-4" href={`mailto:${email}`}>
                    {email}
                  </a>
                }
              />
            </dl>
          </div>
        </section>

        <section id="week" className="scroll-mt-20 bg-blush">
          <div className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="inline-flex rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-ink">
                  28 Sep – 2 Oct 2026
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.4rem,4vw,3.8rem)] leading-tight font-bold">
                  Wheelie Good Film Week
                </h2>
                <p className="mt-4 max-w-md text-lg leading-8 text-muted">
                  A five-day intensive at VentSpace for filmmakers aged 8 to
                  17. Two groups. Script, storyboard, a supervised shoot, an
                  edit, and a Friday screening. One day or the full week.
                </p>
                <a
                  className="btn btn-fill mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-bold text-cream"
                  href={ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets on Humanitix
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-3xl bg-cream p-6">
                  <p className="text-sm font-bold">Ages 8–12</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">Junior</h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    <Time day="Monday" time="1–4pm" note="Script" />
                    <Time day="Tue–Fri" time="9am–12pm" note="Board, shoot, cut, screen" />
                  </dl>
                </article>
                <article className="rounded-3xl bg-gold p-6">
                  <p className="text-sm font-bold">Ages 13–17</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">Senior</h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    <Time day="Monday" time="5–8pm" note="Script" />
                    <Time day="Tue–Fri" time="1–4pm" note="Board, shoot, cut, screen" />
                  </dl>
                </article>
              </div>
            </div>
            <p className="mt-10 max-w-2xl leading-7 text-muted">
              Carter hosts. A sensory guide and a social story go out before
              the week. Ask for step-free access, parking, an accessible
              bathroom, or a quiet sensory space.{" "}
              <a
                className="font-bold text-ink underline decoration-ink/30 underline-offset-4"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                23 Glenelg Street, South Brisbane
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-20 bg-night text-cream">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <WheelMark className="size-8 text-cream" />
            <p className="mt-4 font-display text-3xl leading-none font-bold">
              Wheelie Good Film
            </p>
            <p className="mt-3 text-sm text-cream/80">Meanjin / Brisbane</p>
          </div>
          <div>
            <p className="text-sm font-bold">Visit</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="break-all" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href={ticketsUrl} target="_blank" rel="noopener noreferrer">
                  Film week tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

function Fact({
  term,
  detail,
}: {
  term: string;
  detail: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
      <dt className="text-sm font-bold text-muted">{term}</dt>
      <dd className="text-sm">{detail}</dd>
    </div>
  );
}

function Time({ day, time, note }: { day: string; time: string; note: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt>
        {day}
        <span className="mt-0.5 block text-muted">{note}</span>
      </dt>
      <dd className="font-medium">{time}</dd>
    </div>
  );
}
