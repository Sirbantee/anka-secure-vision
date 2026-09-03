import { createFileRoute, Link } from "@tanstack/react-router";
import {
  company,
  guardingInclusions,
  industries,
  officerStandards,
  operatingModel,
  services,
  supervisionModel,
  technologyCapabilities,
  telHref,
} from "@/content/anka";
import { img } from "@/content/images";

import {
  ActionAnchor,
  ActionLink,
  Container,
  Display,
  Eyebrow,
  Figure,
  Lead,
  Section,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";
import { ClientMarquee } from "@/components/site/ClientMarquee";

const title = "ANKA Security Services | Guarding, CCTV & Response in Uganda";
const description =
  "Trained and vetted security officers, CCTV and alarm systems, canine patrols and armed response across Kampala and Hoima. ANKA secures what matters.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Statement />
      <ServicesIndex />
      <Method />
      <Gallery />
      <People />
      <Supervision />
      <Monitoring />
      <Technology />
      <Industries />
      <CallToAction />
    </>
  );
}

/** Interactive signal field: gives the control room claim something to feel. */
function Monitoring() {
  return (
    <Section tone="deep">
      <Container>
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Live monitoring</Eyebrow>
            <Display level={2} className="mt-5 max-w-[20ch]">
              Nothing on your site goes unwatched.
            </Display>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Cameras, alarms, access points and patrol check-ins all report into one control room,
            staffed every hour of the day.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <WaveField />
        </Reveal>
      </Container>
    </Section>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] flex-col justify-end overflow-hidden bg-ink text-ink-foreground md:min-h-[88svh]">
      <img
        src={img.heroMain}
        alt="Security officer standing post at the lit entrance of a modern building at dusk"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25"
      />

      <Container className="relative pb-16 pt-32 md:pb-20 md:pt-36">
        <h1 className="flex flex-col">
          <span className="font-display text-[clamp(4.5rem,22vw,15rem)] font-extrabold leading-[0.82] tracking-[-0.05em]">
            ANKA
          </span>
          <span className="mt-4 max-w-[30ch] text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-foreground/75 md:text-xs">
            Securing what matters, day and night.
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink to="/services" className="justify-center">
            Explore services
          </ActionLink>
          <ActionAnchor
            href={telHref(company.phone)}
            variant="light"
            className="justify-center"
          >
            Talk to us
          </ActionAnchor>
        </div>
      </Container>
    </section>
  );
}

/** Editorial collage: mixed aspect frames so the operation reads as one composition. */
function Gallery() {
  const frames = [
    {
      src: img.patrol,
      alt: "Security officer walking a patrol route through a marble lobby",
      caption: "Manned guarding",
      note: "Posted officers, patrol routes and visitor control on every shift.",
      className: "sm:col-span-4 sm:row-span-2",
      ratio: "4/5",
    },
    {
      src: img.cctv,
      alt: "Dome CCTV camera mounted on a concrete facade at dusk",
      caption: "CCTV and surveillance",
      className: "sm:col-span-5",
      ratio: "16/10",
    },
    {
      src: img.access,
      alt: "Access card presented at a glass turnstile reader",
      caption: "Access control",
      className: "sm:col-span-3",
      ratio: "4/3",
    },
    {
      src: img.k9,
      alt: "Canine unit with handler on a lit driveway at night",
      caption: "Canine patrol",
      className: "sm:col-span-3",
      ratio: "4/3",
    },
    {
      src: img.alarm,
      alt: "Marked security response vehicle at an industrial gate at night",
      caption: "Armed response",
      className: "sm:col-span-5",
      ratio: "16/10",
    },
    {
      src: img.officerDetail,
      alt: "Radio and uniform detail of a security officer",
      caption: "Standards",
      className: "sm:col-span-3",
      ratio: "3/4",
    },
    {
      src: img.vip,
      alt: "Close protection officer opening a vehicle door outside a hotel",
      caption: "Close protection",
      className: "sm:col-span-5",
      ratio: "16/10",
    },
    {
      src: img.fleet,
      alt: "Secured logistics yard at dusk seen from the air",
      caption: "Industrial sites",
      className: "sm:col-span-4",
      ratio: "4/3",
    },
  ];

  return (
    <Section tone="ink">
      <Container>
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="gold">More about ANKA</Eyebrow>
            <Display level={2} className="mt-4 max-w-[20ch]">
              One operation, every layer.
            </Display>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">
            Officers on post, technology on the perimeter and a response team on standby, run as a
            single service across Uganda.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-4">
          {frames.map((f, i) => (
            <Reveal
              key={f.caption}
              delay={Math.min(i * 60, 320)}
              className={`group ${f.className}`}
            >
              <figure className="relative h-full overflow-hidden bg-black/40">
                <div className="h-full w-full" style={{ aspectRatio: f.ratio }}>
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="label text-gold">{f.caption}</p>
                  {f.note ? (
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-foreground/85">
                      {f.note}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}


function Statement() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <Display level={2} className="mt-8 max-w-[24ch]">
              Security is a discipline, not a uniform.
            </Display>
            <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                {company.name} is a Ugandan security company protecting homes, businesses,
                industrial sites and events. We recruit selectively, train intensively and
                supervise continuously, because the officer at the gate is the whole service.
              </p>
              <p>
                Every deployment begins with an assessment of the premises. Officer numbers, shift
                patterns, post orders and technology are set from that assessment, then reviewed
                as the site changes.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/about"
                className="link-underline font-display text-sm font-bold uppercase tracking-[0.18em]"
              >
                More about ANKA
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:pt-24">
            <Figure
              src={img.officersLineup}
              alt="A line of ANKA officers standing at attention at sunrise, seen from behind"
              ratio="4/5"
              caption="ANKA officers on parade"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ServicesIndex() {
  return (
    <Section tone="deep" id="services">
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <Display level={2} className="mt-8 max-w-[20ch]">
              <>Eleven service lines, one standard.</>
            </Display>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Guarding, technology and response are delivered as one operation, so what a camera sees
            and what an officer does are never separate.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={Math.min(i * 45, 320)}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full"
              >
                <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <span className="label absolute left-0 top-0 bg-ink/80 px-3 py-2 text-[0.55rem] text-gold backdrop-blur-sm">
                    {s.index}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              </Link>
            </Reveal>
          ))}
        </ul>

      </Container>
    </Section>
  );
}

function Method() {
  return (
    <Section tone="ink">
      <Container>
        <Reveal>
          <Eyebrow tone="gold">How we operate</Eyebrow>
          <Display level={2} className="mt-8 max-w-[22ch]">
            Understand, train, deploy, supervise.
          </Display>
        </Reveal>
        <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {operatingModel.map((step, i) => (
            <Reveal
              key={step.step}
              delay={Math.min(i * 70, 400)}
              className="card-lift border-t-2 border-ink-border px-4 py-8"
            >
              <p className="font-display text-4xl text-primary">{step.step}</p>
              <h3 className="mt-6 font-display text-xl">{step.title}</h3>
              <p className="mt-3 text-sm text-ink-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function People() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Figure
              src={img.trainingDrill}
              alt="ANKA officers formed up at attention at sunrise, seen from behind"
              ratio="5/4"
            />
            <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {officerStandards.map((o) => (
                <div key={o.label} className="border-t border-border pt-4">
                  <p className="label text-muted-foreground">{o.label}</p>
                  <p className="mt-2 text-sm">{o.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>The officer</Eyebrow>
            <Display level={2} className="mt-8 max-w-[20ch]">
              Selected, vetted, then trained for four weeks.
            </Display>
            <p className="mt-8 max-w-xl text-lg text-foreground/80">
              Candidates are screened on education, conduct, language and presentation, and vetted
              on family, residence, employment history and referees. Only then do they enter the
              ANKA training system.
            </p>
            <div className="mt-8 space-y-8">
              {guardingInclusions.map((g) => (
                <div key={g.title} className="border-t border-border pt-5">
                  <h3 className="font-display text-lg">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{g.items.join(" / ")}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ActionLink to="/training" variant="outline">
                Inside the training
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Supervision() {
  return (
    <Section tone="deep">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Supervision</Eyebrow>
            <Display level={2} className="mt-8">
              Checked, evaluated, corrected.
            </Display>
            <p className="mt-8 max-w-lg text-lg text-foreground/80">
              Supervisors and top management carry out random and surprise checks on deployed
              posts. Where standards slip, the response is immediate: correction on site,
              re-instruction, probation, or replacement.
            </p>
            <Figure
              src={img.supervision}
              alt="Radio and uniform detail of an ANKA officer on night duty"
              ratio="16/10"
              className="mt-8"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-10">
            {supervisionModel.map((s) => (
              <div key={s.stage} className="border-t border-border pt-6">
                <h3 className="font-display text-2xl">{s.stage}</h3>
                <ul className="mt-5 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-4 text-sm text-foreground/80">
                      <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Technology() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={img.controlRoom}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/45" />
      <Container className="relative py-16 md:py-20">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="gold">Technology</Eyebrow>
          <Display level={2} className="mt-8">
            A control room that never closes.
          </Display>
          <p className="mt-8 text-lg text-ink-muted">
            CCTV, alarms, access control and vehicle tracking all report into one monitored control
            room, where operators verify and escalate to response teams around the clock.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {technologyCapabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={Math.min(i * 70, 300)}
              className="card-lift border-t-2 border-ink-border px-4 py-7"
            >
              <h3 className="font-display text-lg">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <ActionLink to="/technology" variant="light">
            Technology in detail
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <Section>
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Industries</Eyebrow>
            <Display level={2} className="mt-8 max-w-[22ch]">
              Trained for the environment, not just the job.
            </Display>
          </div>
          <Link
            to="/industries"
            className="link-underline font-display text-sm font-bold uppercase tracking-[0.18em]"
          >
            All industries
          </Link>
        </Reveal>
        <div className="mt-14 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={Math.min(i * 45, 300)}
              className="card-lift border border-border bg-card px-6 py-4 font-display text-lg tracking-tight hover:bg-primary/10 hover:text-primary"
            >
              {ind.name}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
