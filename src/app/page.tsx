import {
  BinderClip,
  Mount,
  Paperclip,
  PunchHoles,
  Scrap,
  Sequin,
  Star,
} from "@/components/collage";
import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";
import { FilmPlayer } from "@/components/film-player";
import { SiteHeader } from "@/components/site-header";
import { WheelMark } from "@/components/wheel-mark";

const ticketsUrl = "https://events.humanitix.com/wheelie-good-film-week";
const instagramUrl = "https://www.instagram.com/wheeliegoodfilm.co/";
const youtubeUrl = "https://www.youtube.com/@wheeliegoodfilmcompany";
const email = "wheeliegoodfilm.co@outlook.com";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=23+Glenelg+Street+South+Brisbane+QLD+4101";

const footerNav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#week", label: "Film week" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "Short films",
    body: "Development through to a rough cut, for your story.",
    paper: "lined" as const,
    tilt: "-0.7deg",
    tear: "a" as const,
  },
  {
    title: "Commercial & brand",
    body: "Content for businesses that want to look like they mean it.",
    paper: "plain" as const,
    tilt: "0.8deg",
    tear: "b" as const,
  },
  {
    title: "Actor showreels",
    body: "A clean shoot and cut to get actors seen.",
    paper: "graph" as const,
    tilt: "-0.45deg",
    tear: "c" as const,
  },
];

const anchor = "scroll-mt-28";

const films = [
  {
    videoId: "IqM7fzaLeME",
    title: "The Stars",
    year: "2024",
    runtime: "8 min",
    kind: "Comedy",
    logline:
      "Rio takes on a missing-janitor case at school. Her friends plant the clues, then spend the day trying not to be caught.",
  },
  {
    videoId: "VuvVMObebqU",
    title: "Obsessive Compulsive Confliction",
    year: "2024",
    runtime: "3 min",
    kind: "Short",
    logline: "A short about the difficult work of accepting an OCD diagnosis.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="content">
        <section id="top" className="relative overflow-x-clip">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <Star className="absolute top-4 left-[3%] size-14 text-pine md:size-20" />
            <Star className="absolute top-10 right-[4%] size-12 text-mist md:top-16 md:size-16" />
            <Star
              variant="outline"
              className="absolute right-[18%] bottom-8 hidden size-14 text-cream md:block"
            />
            <Sequin tone="gold" className="absolute top-6 right-[16%]" />
            <Sequin tone="rose" className="absolute top-12 right-[12%]" />
            <Sequin tone="green" className="absolute bottom-10 left-[7%]" />
            <Sequin tone="rose" className="absolute bottom-6 left-[11%]" />
          </div>

          <div className="relative z-[1] mx-auto max-w-[1120px] px-5 pt-8 pb-8 md:px-8 md:pt-12">
            <Scrap
              paper="lined"
              tilt="-0.6deg"
              tape
              frameClassName="mx-auto max-w-3xl"
              className="px-6 py-10 text-center sm:px-14 sm:py-14"
            >
              <PunchHoles />
              <h1 className="font-display text-ink">
                <span className="block text-[clamp(1.7rem,4vw,2.5rem)] italic">
                  Films made
                </span>
                <span className="mt-1 block text-[clamp(2.7rem,8vw,5rem)] leading-[0.9] font-bold italic">
                  by humans,
                </span>
                <span className="mt-1 block text-[clamp(2.1rem,5.4vw,3.8rem)] italic">
                  for humans.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-md text-lg leading-8">
                We shoot short films, brand work and showreels, and we teach
                people how to make their own. Based in Meanjin.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#brief"
                  className="btn btn-fill inline-flex min-h-11 items-center justify-center rounded-sm bg-ink px-5 font-display text-lg italic text-cream"
                >
                  Hire us
                </a>
                <a
                  href="#work"
                  className="btn btn-line inline-flex min-h-11 items-center justify-center rounded-sm border-2 border-ink px-5 font-display text-lg italic"
                >
                  See our work
                </a>
              </div>
            </Scrap>

            <Mount
              tilt="-0.8deg"
              frameClassName="mx-auto mt-16 max-w-3xl"
              className="px-3 pt-3 pb-4 sm:px-4"
            >
              <FilmPlayer videoId={films[0].videoId} title="The Stars, 2024" />
              <p className="px-3 py-3 text-center font-display text-lg leading-snug italic">
                The Stars, 2024. A comedy written and directed by Carter Jayne.
              </p>
            </Mount>
          </div>

          <div className="relative z-[1] mx-auto max-w-[1120px] px-5 pb-16 md:px-8 md:pb-20">
            <ul className="grid items-stretch gap-10 md:grid-cols-2">
              <li>
                <a href="#production" className="block h-full">
                  <Scrap
                    paper="lined"
                    tilt="-1deg"
                    tape
                    className="flex h-full min-h-64 flex-col p-6 md:p-8"
                  >
                    <p className="kicker">Production</p>
                    <h2 className="mt-3 font-display text-3xl leading-none italic md:text-4xl">
                      Hire us to make your film
                    </h2>
                    <p className="mt-3 max-w-md leading-7">
                      Short films, commercial brand work and actor showreels,
                      shot properly.
                    </p>
                    <p className="mt-auto pt-8">
                      <span className="inline-flex min-h-11 items-center bg-ink px-4 font-display text-base italic text-cream">
                        See services
                      </span>
                    </p>
                  </Scrap>
                </a>
              </li>
              <li id="week" className={`relative ${anchor}`}>
                <span
                  aria-hidden="true"
                  className="gingham tear-c pointer-events-none absolute -bottom-4 -left-2 h-24 w-36 -rotate-6"
                />
                <BinderClip className="pointer-events-none absolute -top-2 left-5 z-20 size-14 text-ink" />
                <a
                  href={ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-[1] block h-full"
                >
                  <Scrap
                    paper="graph"
                    tilt="0.9deg"
                    tear="b"
                    className="flex h-full min-h-64 flex-col p-6 text-center md:p-8"
                  >
                    <p className="kicker">Community</p>
                    <h2 className="mt-3 font-display text-3xl leading-none italic md:text-4xl">
                      Come make films with us
                    </h2>
                    <p className="mt-3 leading-7">
                      Next up: Film Week for ages 8 to 17 at VentSpace, South
                      Brisbane. 28 Sep–2 Oct 2026. One day or the full week.
                    </p>
                    <dl className="mt-5 space-y-3 text-sm">
                      <div>
                        <dt className="font-semibold">Junior · ages 8–12</dt>
                        <dd>Mon 1–4pm, then Tue–Fri 9am–12pm</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">Senior · ages 13–17</dt>
                        <dd>Mon 5–8pm, then Tue–Fri 1–4pm</dd>
                      </div>
                    </dl>
                    <p className="mt-auto pt-8">
                      <span className="inline-flex min-h-11 items-center bg-ink px-4 font-display text-base italic text-cream">
                        Book a spot
                        <span className="sr-only"> (opens in a new tab)</span>
                      </span>
                    </p>
                  </Scrap>
                </a>
              </li>
            </ul>
            <div className="relative mx-auto mt-12 max-w-2xl">
              <Paperclip className="pointer-events-none absolute -top-4 left-8 z-20 h-16 w-8 -rotate-12 text-pine" />
              <Scrap paper="plain" tilt="0.4deg" tear="c" className="p-6 md:p-8">
                <p className="leading-7">
                  Carter hosts. A sensory guide and a social story go out
                  before the week. Ask for step-free access, parking, an
                  accessible bathroom, or a quiet sensory space.{" "}
                  <a
                    className="font-semibold underline decoration-ink/30 underline-offset-4"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    23 Glenelg Street, South Brisbane
                  </a>
                  .
                </p>
              </Scrap>
            </div>
          </div>
        </section>

        <section
          id="production"
          className={`${anchor} relative mx-auto max-w-[1120px] px-5 pt-8 md:px-8 md:pt-12`}
        >
          <Star
            variant="outline"
            className="pointer-events-none absolute top-0 right-[8%] hidden size-16 text-cream md:block"
          />
          <p className="kicker">Production services</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-none italic md:text-5xl">
            Three ways to work with us
          </h2>
          <ul className="mt-10 grid items-stretch gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title}>
                <Scrap
                  paper={service.paper}
                  tilt={service.tilt}
                  tear={service.tear}
                  tape={service.paper === "plain"}
                  className="flex h-full min-h-52 flex-col p-6"
                >
                  <h3 className="font-display text-2xl italic">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7">{service.body}</p>
                  <p className="mt-auto pt-8">
                    <a
                      href="#brief"
                      className="font-semibold underline decoration-ink/30 underline-offset-4"
                    >
                      Ask for a price
                    </a>
                  </p>
                </Scrap>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-20">
          <div id="brief" className={`${anchor} max-w-xl`}>
            <Scrap
              paper="graph"
              tilt="0.7deg"
              tear="b"
              tape
              className="p-6 md:p-8"
            >
              <p className="kicker">Project brief</p>
              <h2 className="mt-3 font-display text-3xl leading-tight italic md:text-4xl">
                Tell us what you are making
              </h2>
              <EnquiryForm email={email} />
            </Scrap>
          </div>
        </section>

        <section
          id="work"
          className={`${anchor} mx-auto max-w-[1120px] px-5 pb-16 md:px-8 md:pb-24`}
        >
          <p className="kicker">Filmography</p>
          <div className="mt-3 flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl leading-none italic md:text-5xl">
              Recent work
            </h2>
            <a
              className="font-semibold underline decoration-ink/30 underline-offset-4"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              All films
            </a>
          </div>
          <ul className="mt-10 grid gap-12 sm:grid-cols-2">
            {films.map((film, index) => (
              <li key={film.videoId}>
                <Mount
                  tilt={index === 0 ? "-0.7deg" : "0.8deg"}
                  className="px-3 pt-3 pb-5"
                >
                  <FilmPlayer
                    videoId={film.videoId}
                    title={`${film.title}, ${film.year}`}
                  />
                  <h3 className="mt-4 px-2 font-display text-2xl italic">
                    {film.title}
                  </h3>
                  <p className="mt-1 px-2 text-sm">
                    {film.kind}
                    <span aria-hidden="true"> · </span>
                    {film.year}
                    <span aria-hidden="true"> · </span>
                    {film.runtime}
                  </p>
                  <p className="mt-3 px-2 leading-7">{film.logline}</p>
                </Mount>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-xl leading-7">
            There is more of the work on{" "}
            <a
              className="font-semibold underline decoration-ink/30 underline-offset-4"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </section>

        <section id="about" className={`${anchor} relative`}>
          <Star className="pointer-events-none absolute top-8 right-[7%] hidden size-16 text-mist md:block" />
          <div className="mx-auto grid max-w-[1120px] items-start gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Mount tilt="-0.8deg" className="px-3 pt-3 pb-4">
              <Image
                src="/carter.jpg"
                alt="Carter Jayne"
                width={774}
                height={576}
                className="h-auto w-full"
              />
            </Mount>
            <div>
              <p className="kicker">About</p>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(2.3rem,4.6vw,3.7rem)] leading-[1.05] italic text-balance">
                A human tryna make films to be appreciated by other humans.
              </h2>
              <p className="mt-6 font-display text-2xl italic">
                Carter Jayne
                <span className="mt-1 block text-base not-italic">She/They</span>
              </p>
              <div className="mt-4 max-w-xl space-y-4 leading-8">
                <p>
                  Carter Jayne is a disabled filmmaker in Meanjin / Brisbane.
                  They write and direct the shorts, and they host Film Week for
                  ages 8 to 17. Wheelie is the pun. Good is the standard.
                </p>
                <p>
                  Carter has a love for all aspects of live performances, with a
                  special interest in theatre productions. They started
                  volunteering with Brisbane Arts Theatre as a lighting and
                  sound operator, hoping to learn more about the inner workings
                  of theatre. She has the aspiration of becoming a lighting
                  designer, specifically within musical theatre and music
                  concerts.
                </p>
                <p>
                  Previous work includes lighting design for Ghostlight Theatre
                  Co., <span className="italic">Blood Brothers</span> (2024),
                  and most recently lighting design for{" "}
                  <span className="italic">Beans Means Love</span> with
                  Sandgate Theatre Inc. (May 2025). Carter is also a 2025
                  Technical Production Trainee with QPAC (Queensland Performing
                  Arts Centre).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={`${anchor} footer-edge bg-pine text-cream`}>
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 pt-16 pb-14 md:grid-cols-3 md:px-8">
          <div>
            <span className="inline-flex rotate-2 bg-cream p-1.5">
              <WheelMark className="h-16 w-auto" />
            </span>
            <p className="wordmark mt-4 text-cream">
              A Wheelie Good Film Company
            </p>
            <p className="mt-3 text-sm text-cream/80">Meanjin / Brisbane</p>
          </div>
          <div>
            <p className="kicker text-cream">Visit</p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a className="underline-offset-4 hover:underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-cream">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="break-all underline-offset-4 hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline"
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline"
                  href={ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
