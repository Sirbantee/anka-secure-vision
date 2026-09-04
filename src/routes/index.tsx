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
      <Technology />
      <Industries />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20">
      <div className="relative grid min-h-[72vh] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 md:py-18 lg:col-span-6 lg:px-16 xl:px-20">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            <span className="label text-primary">Security services, Uganda</span>
          </div>

          <h1 className="mt-7 leading-[0.82]">
            <span className="block font-display text-[clamp(4.5rem,13vw,9rem)] font-extrabold tracking-[-0.05em] text-foreground">
              ANKA
            </span>
            <span className="mt-5 block max-w-[26ch] font-sans text-sm font-normal leading-relaxed tracking-normal text-muted-foreground md:text-base">
              Securing what matters, day and night.
            </span>
          </h1>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink to="/services" className="justify-center">
              Explore services
            </ActionLink>
            <ActionAnchor
              href={telHref(company.phone)}
              variant="outline"
              className="justify-center"
            >
              Talk to us
            </ActionAnchor>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:gap-10">
            <div>
              <dt className="label text-muted-foreground">Direct line</dt>
              <dd className="mt-2 font-display text-base font-bold">{company.phone}</dd>
            </div>
            <div>
              <dt className="label text-muted-foreground">Operations</dt>
              <dd className="mt-2 font-display text-base font-bold">Kampala &amp; Hoima</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[52vh] bg-ink lg:col-span-6 lg:min-h-0">
          <img
            src={img.heroMain}
            alt="Security officer standing post at the lit entrance of a modern building at dusk"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            width={1408}
            height={1760}
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:w-24"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-ink/70 px-5 py-3 backdrop-blur-md">
            <span aria-hidden="true" className="live-dot" />
            <p className="label text-ink-foreground">24/7 monitored response</p>
          </div>
        </div>
      </div>
    </section>
  );
}




/** Editorial collage: one lead frame, a stacked column and a wide closing band. */
function Gallery() {
  const lead = {
    src: img.patrol,
    alt: "Two security officers walking a patrol line along a concrete perimeter wall at dawn",
    caption: "Manned guarding",
    note: "Posted officers, patrol routes and visitor control on every shift.",
  };

  const column = [
    {
      src: img.controlRoom,
      alt: "Operator monitoring a wall of CCTV screens in a dark control room",
      caption: "Monitoring",
    },
    {
      src: img.officerDetail,
      alt: "Radio and uniform detail of a security officer",
      caption: "Standards",
    },
  ];

  const band = [
    { src: img.cctv, alt: "Dome CCTV camera mounted on a concrete facade at dusk", caption: "CCTV" },
    { src: img.access, alt: "Access card presented at a glass turnstile reader", caption: "Access control" },
    { src: img.k9, alt: "Canine unit with handler on a lit driveway at night", caption: "Canine" },
    { src: img.alarm, alt: "Marked security response vehicle at an industrial gate at night", caption: "Response" },
  ];

  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 26%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 22%, transparent), transparent 70%)",
        }}
      />

      <Container className="relative">
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

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Reveal className="group lg:col-span-8">
            <figure className="relative h-full overflow-hidden rounded-4xl border border-ink-border">
              <div className="h-full w-full" style={{ aspectRatio: "16/11" }}>
                <img
                  src={lead.src}
                  alt={lead.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="label text-gold">{lead.caption}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/85">
                  {lead.note}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 lg:col-span-4">
            {column.map((f, i) => (
              <Reveal key={f.caption} delay={80 + i * 80} className="group">
                <figure className="relative overflow-hidden rounded-4xl border border-ink-border">
                  <div className="w-full" style={{ aspectRatio: "4/3" }}>
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
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="label text-gold">{f.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {band.map((f, i) => (
            <Reveal key={f.caption} delay={Math.min(i * 70, 280)} className="group">
              <figure className="relative overflow-hidden rounded-3xl border border-ink-border">
                <div className="w-full" style={{ aspectRatio: "1/1" }}>
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="label text-gold">{f.caption}</p>
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
              alt="ANKA officers walking a patrol line along a perimeter wall at dawn"
              ratio="4/5"
              caption="Patrol discipline, every shift"
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
                <div className="relative overflow-hidden rounded-3xl bg-ink" style={{ aspectRatio: "4/3" }}>
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
              alt="Radio and uniform detail of an ANKA officer on duty"
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
