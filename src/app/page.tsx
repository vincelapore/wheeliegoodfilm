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
    tone: "blush",
    title: "Short films",
    body: "Development through to a rough cut, for your story.",
  },
  {
    tone: "gold",
    title: "Commercial & brand",
    body: "Content for businesses that want to look like they mean it.",
  },
  {
    tone: "sage",
    title: "Actor showreels",
    body: "A clean shoot and cut to get actors seen.",
  },
];

const kit = [
  { term: "Story", detail: "On the page before the shoot" },
  { term: "Camera", detail: "A cinema kit, kept light" },
  { term: "Sound", detail: "Recorded on set" },
  { term: "Delivery", detail: "A cut you can show" },
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
        <section id="top" className="bg-sky">
          <div className="mx-auto max-w-[1120px] px-5 pt-10 pb-8 md:px-8 md:pt-16">
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.95] font-bold tracking-tight text-balance">
              Films made by humans, for humans.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8">
              We shoot short films, brand work and showreels, and we teach
              people how to make their own. Based in Meanjin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#brief"
                className="btn btn-fill inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-bold text-cream"
              >
                Hire us for Production
              </a>
              <a
                href={ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-5 text-sm font-bold"
              >
                Book a Workshop
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-[1120px] px-5 pb-12 md:px-8">
            <FilmPlayer videoId={films[0].videoId} title="The Stars, 2024" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6">
              The Stars, 2024. A comedy written and directed by Carter Jayne.
            </p>
          </div>

          <div className="mx-auto max-w-[1120px] px-5 pb-16 md:px-8 md:pb-20">
            <ul className="grid gap-4 md:grid-cols-2">
              <li>
                <a
                  href="#production"
                  className="door flex h-full min-h-64 flex-col rounded-3xl p-6 md:p-7"
                  data-tone="gold"
                >
                  <p className="text-sm font-bold">Production</p>
                  <h2 className="mt-3 font-display text-3xl leading-none font-bold md:text-4xl">
                    Hire us to make your film
                  </h2>
                  <p className="mt-3 max-w-md leading-7">
                    Short films, commercial brand work and actor showreels, shot
                    properly.
                  </p>
                  <p className="mt-auto pt-8">
                    <span className="inline-flex min-h-9 items-center rounded-full bg-ink px-4 text-sm font-bold text-cream">
                      See services
                    </span>
                  </p>
                </a>
              </li>
              <li id="week" className={anchor}>
                <a
                  href={ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="door flex h-full min-h-64 flex-col rounded-3xl p-6 md:p-7"
                  data-tone="blush"
                >
                  <p className="text-sm font-bold">Community</p>
                  <h2 className="mt-3 font-display text-3xl leading-none font-bold md:text-4xl">
                    Come make films with us
                  </h2>
                  <p className="mt-3 max-w-md leading-7">
                    Next up: Film Week for ages 8 to 17 at VentSpace, South
                    Brisbane. 28 Sep–2 Oct 2026. One day or the full week.
                  </p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="font-bold">Junior · ages 8–12</dt>
                      <dd>Mon 1–4pm, then Tue–Fri 9am–12pm</dd>
                    </div>
                    <div>
                      <dt className="font-bold">Senior · ages 13–17</dt>
                      <dd>Mon 5–8pm, then Tue–Fri 1–4pm</dd>
                    </div>
                  </dl>
                  <p className="mt-auto pt-8">
                    <span className="inline-flex min-h-9 items-center rounded-full bg-ink px-4 text-sm font-bold text-cream">
                      Book a spot
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </p>
                </a>
              </li>
            </ul>
            <p className="mt-8 max-w-2xl leading-7">
              Carter hosts. A sensory guide and a social story go out before the
              week. Ask for step-free access, parking, an accessible bathroom,
              or a quiet sensory space.{" "}
              <a
                className="font-bold underline decoration-ink/30 underline-offset-4"
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

        <div className="bg-paper">
          <section
            id="production"
            className={`${anchor} mx-auto max-w-[1120px] px-5 pt-16 md:px-8 md:pt-20`}
          >
            <p className="text-sm font-bold">Production services</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Three ways to work with us
            </h2>
            <ul className="mt-8 grid gap-4 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.title}>
                  <article
                    data-tone={service.tone}
                    className="door flex h-full min-h-52 flex-col rounded-3xl p-6"
                  >
                    <h3 className="font-display text-2xl font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7">{service.body}</p>
                    <p className="mt-auto pt-8">
                      <a
                        href="#brief"
                        className="text-sm font-bold underline decoration-ink/30 underline-offset-4"
                      >
                        Ask for a price
                      </a>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section className="mx-auto grid max-w-[1120px] items-stretch gap-4 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-3xl bg-sky p-6 md:p-8">
              <p className="text-sm font-bold">Kit & workflow</p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-bold md:text-4xl">
                Cinema-grade, indie-sized
              </h2>
              <p className="mt-4 max-w-md leading-7">
                Development, a shoot, and a cut. The crew stays small. Carter
                Jayne writes and directs from Meanjin.
              </p>
              <dl className="mt-8 divide-y divide-ink/15">
                {kit.map((row) => (
                  <div
                    key={row.term}
                    className="flex items-baseline justify-between gap-6 py-3 text-sm"
                  >
                    <dt className="font-bold">{row.term}</dt>
                    <dd className="text-right">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <article
              id="brief"
              className={`${anchor} h-full rounded-3xl bg-gold p-6 md:p-8`}
            >
              <p className="text-sm font-bold">Project brief</p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-bold md:text-4xl">
                Tell us what you are making
              </h2>
              <EnquiryForm email={email} />
            </article>
          </section>

          <section
            id="work"
            className={`${anchor} mx-auto max-w-[1120px] px-5 pb-16 md:px-8 md:pb-24`}
          >
            <p className="text-sm font-bold">Filmography</p>
            <div className="mt-3 flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Recent work
              </h2>
              <a
                className="text-sm font-bold underline decoration-ink/30 underline-offset-4"
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                All films
              </a>
            </div>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {films.map((film) => (
                <li key={film.videoId}>
                  <FilmPlayer
                    videoId={film.videoId}
                    title={`${film.title}, ${film.year}`}
                  />
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    {film.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {film.kind}
                    <span aria-hidden="true"> · </span>
                    {film.year}
                    <span aria-hidden="true"> · </span>
                    {film.runtime}
                  </p>
                  <p className="mt-3 max-w-md leading-7">{film.logline}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-xl leading-7 text-muted">
              Also, Song of Fairies Robbing an Orchard, with a backing track by
              composer Kayley Nolan.{" "}
              <a
                className="font-bold text-ink underline decoration-ink/30 underline-offset-4"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              carries Fighting Love and Project LL.
            </p>
          </section>
        </div>

        <section id="about" className={`${anchor} bg-blush`}>
          <div className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-24">
            <p className="text-sm font-bold">About</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight font-bold text-balance">
              A human tryna make films to be appreciated by other humans.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8">
              Carter Jayne is a disabled filmmaker in Meanjin / Brisbane. They
              write and direct the shorts, and they host Film Week for ages 8 to
              17. Wheelie is the pun. Good is the standard.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className={`${anchor} bg-night text-cream`}>
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <WheelMark className="h-16 w-auto" />
            <p className="mt-4 font-display text-3xl leading-none font-bold">
              Wheelie Good Film
            </p>
            <p className="mt-3 text-sm text-cream/80">Meanjin / Brisbane</p>
          </div>
          <div>
            <p className="text-sm font-bold">Visit</p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerNav.map((item) => (
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
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
