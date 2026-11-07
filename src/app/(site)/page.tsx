import { BackdropField } from "@/components/backdrop";
import {
  BinderClip,
  Mount,
  PunchHoles,
  Scrap,
  Sequin,
  Star,
} from "@/components/collage";
import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";
import { FilmPlayer } from "@/components/film-player";
import { SiteHeader } from "@/components/site-header";
import { VolunteerForm } from "@/components/volunteer-form";
import { WheelFrame, WheelMark } from "@/components/wheel-mark";
import { getSiteContent } from "@/sanity/lib/content";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { CSSProperties } from "react";

const ticketsUrl = "https://events.humanitix.com/wheelie-good-film-week";
const instagramUrl = "https://www.instagram.com/wheeliegoodfilm.co/";
const youtubeUrl = "https://www.youtube.com/@wheeliegoodfilmcompany";
const email = "wheeliegoodfilm.co@outlook.com";

const footerNav = [
  { href: "#work", label: "Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#about", label: "About" },
  { href: "#week", label: "Film week" },
  { href: "#contact", label: "Contact" },
];

const galleryTilts = ["-0.9deg", "0.7deg", "-0.5deg", "1deg", "-0.75deg", "0.55deg"];

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

const bioComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export default async function Home() {
  const { films, gallery, volunteerCalls, about } = await getSiteContent();
  const featured = films[0];
  const roles = [
    ...new Set(volunteerCalls.flatMap((call) => call.roles)),
  ];
  const volunteerRoles = roles.length > 0 ? roles : ["Other / happy to help"];
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="content">
        <section id="top" className="relative overflow-x-clip">
          <BackdropField variant="hero" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <Star
              delay="-1.2s"
              className="absolute top-4 left-[3%] size-14 text-pine md:size-20"
            />
            <Star
              delay="-4.4s"
              className="absolute top-10 right-[4%] size-12 text-mist md:top-16 md:size-16"
            />
            <Star
              variant="outline"
              delay="-6.8s"
              className="absolute right-[18%] bottom-8 hidden size-14 text-cream md:block"
            />
            <Sequin
              tone="gold"
              delay="-0.4s"
              className="absolute top-6 right-[16%]"
            />
            <Sequin
              tone="rose"
              delay="-2.2s"
              className="absolute top-12 right-[12%]"
            />
            <Sequin
              tone="green"
              delay="-3.8s"
              className="absolute bottom-10 left-[7%]"
            />
            <Sequin
              tone="rose"
              delay="-5.4s"
              className="absolute bottom-6 left-[11%]"
            />
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

            {featured ? (
              <Mount
                tilt="-0.8deg"
                frameClassName="mx-auto mt-16 max-w-3xl"
                className="px-3 pt-3 pb-4 sm:px-4"
              >
                <FilmPlayer
                  videoId={featured.youtubeId}
                  title={`${featured.title}, ${featured.year}`}
                />
                <p className="px-3 py-3 text-center font-display text-lg leading-snug italic">
                  {featured.heroNote || `${featured.title}, ${featured.year}`}
                </p>
              </Mount>
            ) : null}
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
                  className="gingham tear-c backdrop-float backdrop-drift-b pointer-events-none absolute -bottom-4 -left-2 h-24 w-36"
                  style={
                    {
                      "--drift-delay": "-4.2s",
                      "--drift-duration": "12s",
                      "--rest-rotate": "-6deg",
                    } as CSSProperties
                  }
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
          </div>
        </section>

        <section
          id="production"
          className={`${anchor} relative overflow-x-clip px-5 pt-8 md:px-8 md:pt-12`}
        >
          <BackdropField variant="mid" />
          <div className="relative z-[1] mx-auto max-w-[1120px]">
          <Star
            variant="outline"
            delay="-2.8s"
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
          </div>
        </section>

        <section
          id="brief"
          className={`${anchor} relative overflow-x-clip`}
        >
          <BackdropField variant="brief" />
          <div className="relative z-[1] mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-xl">
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
          </div>
        </section>

        <section
          id="work"
          className={`${anchor} relative overflow-x-clip px-5 pb-16 md:px-8 md:pb-24`}
        >
          <BackdropField variant="mid-alt" />
          <div className="relative z-[1] mx-auto max-w-[1120px]">
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
              <li key={film._id}>
                <Mount
                  tilt={index === 0 ? "-0.7deg" : "0.8deg"}
                  className="px-3 pt-3 pb-5"
                >
                  <FilmPlayer
                    videoId={film.youtubeId}
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
          </div>
        </section>

        <section
          id="gallery"
          className={`${anchor} relative px-5 pb-16 md:px-8 md:pb-24`}
        >
          <BackdropField variant="mid-alt" />
          <div className="relative z-[1] mx-auto max-w-[1120px]">
          <Sequin
            tone="gold"
            delay="-1.6s"
            className="pointer-events-none absolute top-2 right-[10%] hidden md:block"
          />
          <Sequin
            tone="green"
            delay="-3.2s"
            className="pointer-events-none absolute top-10 right-[6%] hidden md:block"
          />
          <p className="kicker">Stills & clips</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-none italic md:text-5xl">
            From the set
          </h2>
          <p className="mt-4 max-w-lg leading-7">
            Production stills and pieces of the work, pinned up like a cutting
            room wall.
          </p>
          <ul className="mt-10 grid items-start gap-x-8 gap-y-10 sm:grid-cols-2">
            {gallery.map((item, index) => (
              <li key={item._id} className="min-w-0">
                <Mount
                  tilt={galleryTilts[index % galleryTilts.length]}
                  className="px-3 pt-3 pb-4"
                >
                  {item.media === "still" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="h-auto w-full"
                    />
                  ) : (
                    <FilmPlayer videoId={item.youtubeId} title={item.title} />
                  )}
                  <p className="mt-3 px-2 text-center font-display text-base italic">
                    {item.caption}
                  </p>
                </Mount>
              </li>
            ))}
          </ul>
          </div>
        </section>

        <section id="about" className={`${anchor} relative overflow-x-clip`}>
          <BackdropField variant="tail" />
          <Star
            delay="-5.6s"
            className="pointer-events-none absolute top-8 right-[7%] hidden size-16 text-mist md:block"
          />
          <div className="relative z-[1] mx-auto grid max-w-[1120px] items-start gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Mount tilt="-0.8deg" className="px-3 pt-3 pb-4">
              <Image
                src={about.portrait?.src ?? "/carter.jpg"}
                alt={about.portrait?.alt ?? about.name}
                width={about.portrait?.width ?? 774}
                height={about.portrait?.height ?? 576}
                className="h-auto w-full"
              />
            </Mount>
            <div>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(2.3rem,4.6vw,3.7rem)] leading-[1.05] italic text-balance">
                A human tryna make films to be appreciated by other humans.
              </h2>
              <p className="mt-6 font-display text-2xl italic">
                {about.name}
                {about.pronouns ? (
                  <span className="mt-1 block text-base not-italic">
                    {about.pronouns}
                  </span>
                ) : null}
              </p>
              <div className="mt-4 max-w-xl space-y-4 leading-8">
                <PortableText value={about.bio} components={bioComponents} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="volunteer"
          className={`${anchor} relative overflow-x-clip px-5 py-16 md:px-8 md:py-24`}
        >
          <BackdropField variant="tail" />
          <div className="relative z-[1] mx-auto max-w-[1120px]">
          <Star
            delay="-3.4s"
            className="pointer-events-none absolute top-1 right-[4%] hidden size-12 text-mist lg:block"
          />
          <p className="kicker">Get involved</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-none italic md:text-5xl">
            Volunteer on a shoot
          </h2>
          <p className="mt-4 max-w-lg leading-7">
            See what is coming up, who we need, and put your hand up.
          </p>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
            {volunteerCalls.length > 0 ? (
              <ul className="space-y-8">
                {volunteerCalls.map((call, index) => (
                  <li key={call._id} className="relative">
                    {index === 0 ? (
                      <BinderClip className="pointer-events-none absolute -top-2 left-5 z-20 size-12 text-ink" />
                    ) : null}
                    <Scrap
                      paper={index % 2 === 0 ? "lined" : "graph"}
                      tilt={index % 2 === 0 ? "-0.6deg" : "0.7deg"}
                      tear={index % 2 === 0 ? "a" : "b"}
                      tape={index % 2 !== 0}
                      className="p-6 md:p-8"
                    >
                      <p className="kicker">{call.when}</p>
                      <h3 className="mt-3 font-display text-2xl italic md:text-3xl">
                        {call.title}
                      </h3>
                      <p className="mt-3 leading-7">{call.blurb}</p>
                      <p className="mt-5 font-display text-sm tracking-[0.14em] uppercase">
                        Who we need
                      </p>
                      <ul className="mt-2 space-y-1.5 leading-7">
                        {call.roles.map((role) => (
                          <li key={role}>
                            <span aria-hidden="true">· </span>
                            {role}
                          </li>
                        ))}
                      </ul>
                    </Scrap>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-md leading-7">
                Nothing is open right now. You can still write and introduce
                yourself.
              </p>
            )}

            <Scrap
              paper="plain"
              tilt="0.55deg"
              tape
              className="p-6 md:p-8"
            >
              <p className="kicker">Application</p>
              <h3 className="mt-3 font-display text-3xl leading-tight italic md:text-4xl">
                Tell us how you can help
              </h3>
              <VolunteerForm email={email} roles={volunteerRoles} />
            </Scrap>
          </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className={`${anchor} footer-edge bg-pine text-cream`}
      >
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 pt-16 pb-14 md:grid-cols-3 md:px-8">
          <div>
            <WheelFrame className="inline-flex rotate-2 bg-cream p-1.5">
              <WheelMark className="h-16 w-auto" />
            </WheelFrame>
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
                  <a
                    className="underline-offset-4 hover:underline"
                    href={item.href}
                  >
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
                <a
                  className="break-all underline-offset-4 hover:underline"
                  href={`mailto:${email}`}
                >
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
