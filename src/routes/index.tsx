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
import { cn } from "@/lib/utils";
import {
  ActionAnchor,
  ActionLink,
  Container,
  Display,
  Eyebrow,
  Figure,
  Lead,
  Section,
  StatRow,
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
    ],
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
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink text-ink-foreground">
      <img
        src={img.heroGate}
        alt="ANKA security officer on post at a lit corporate entrance at dusk"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Lighter, banded overlay so the photograph stays clearly visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/38 to-ink/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink/70 via-transparent to-transparent md:w-3/5"
      />
      <div aria-hidden="true" className="brand-band absolute inset-x-0 top-0 h-[3px]" />

      <Container className="relative pb-8 pt-28">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <img src={img.logo} alt="" className="h-14 w-auto drop-shadow-lg md:h-16" />
          <span className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-none tracking-[0.06em]">
            ANKA
          </span>
          <span className="label rounded-full border border-gold/50 bg-gold/10 px-3 py-1.5 text-[0.55rem] text-gold">
            Security Services Limited
          </span>
        </div>

        <Eyebrow tone="gold" className="mt-8">
          Kampala &middot; Hoima &middot; Since {company.founded}
        </Eyebrow>

        <h1 className="mt-6 font-display text-[clamp(2.9rem,9.5vw,8.5rem)] leading-[0.94] tracking-[-0.035em]">
          Securing
          <br />
          what <span className="brand-gradient-text">matters.</span>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-ink-border pt-10 md:grid-cols-[1.1fr_auto] md:items-end">
          <Lead className="text-ink-foreground/85">
            Manned guarding, security technology and rapid response for premises across Uganda,
            delivered by officers who are trained, vetted and supervised without exception.
          </Lead>
          <div className="flex flex-wrap gap-4">
            <ActionLink to="/services">Explore services</ActionLink>
            <ActionAnchor href={telHref(company.phone)} variant="light">
              Talk to us
            </ActionAnchor>
          </div>
        </div>
      </Container>

      <Container className="relative pb-10">
        <p className="label mb-4 flex items-center gap-3 text-primary">
          <span aria-hidden="true" className="live-dot" />
          Control room live 24/7
        </p>
        <StatRow
          tone="dark"
          items={[
            { value: "11", label: "Service lines" },
            { value: "4 wks", label: "Officer training" },
            { value: "24/7", label: "Control room" },
            { value: "2", label: "Operating bases" },
          ]}
        />
      </Container>
    </section>
  );
}

/** Editorial photo mosaic: the operation shown across guarding, K9, tech and events. */
function Gallery() {
  const shots = [
    {
      src: img.residential,
      alt: "ANKA officer at a residential gate at dusk",
      span: "col-span-2 row-span-2",
      caption: "Residential posts",
    },
    { src: img.k9, alt: "ANKA canine handler on patrol with a working dog", span: "", caption: "Canine patrol" },
    { src: img.cctv, alt: "Technician installing a CCTV camera on a building facade", span: "", caption: "CCTV installs" },
    { src: img.vip, alt: "Close protection officers escorting a client to a vehicle", span: "", caption: "Close protection" },
    { src: img.access, alt: "Officer controlling access at a manned reception barrier", span: "", caption: "Access control" },
    {
      src: img.event,
      alt: "ANKA officers managing a guest queue at an outdoor event",
      span: "col-span-2",
      caption: "Event security",
    },
    { src: img.alarm, alt: "Alarm response vehicle arriving at a site at night", span: "", caption: "Alarm response" },
    { src: img.classroom, alt: "Recruits in an ANKA training classroom", span: "", caption: "Training school" },
  ];


  return (
    <Section tone="ink">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="gold">On the ground</Eyebrow>
            <Display level={2} className="mt-6 max-w-[22ch]">
              The operation, in <span className="brand-gradient-text">full view.</span>
            </Display>
          </div>
          <p className="max-w-sm text-ink-muted">
            Guard posts, canine patrols, camera installs, escorts, events and the classroom where it
            all begins.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal
              key={s.src}
              delay={Math.min(i * 60, 360)}
              className={cn("group relative overflow-hidden", s.span)}
            >
              <div className="h-full w-full overflow-hidden bg-ink" style={{ aspectRatio: s.ratio }}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/12"
              />
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
              alt="A line of ANKA security officers in grey-blue uniforms during an outdoor parade"
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
              <>Eleven service lines, <span className="brand-gradient-text">one standard.</span></>
            </Display>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Guarding, technology and response are delivered as one operation, so what a camera sees
            and what an officer does are never separate.
          </p>
        </Reveal>

        <ul className="mt-10 border-t border-border">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={Math.min(i * 45, 320)}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b border-border py-7 transition-colors hover:bg-primary/8 md:grid-cols-[4rem_20rem_1fr_auto] md:items-center md:gap-8"
              >
                <span className="label pt-1 text-muted-foreground transition-colors group-hover:text-primary md:pt-0">{s.index}</span>
                <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-primary md:text-[1.7rem]">
                  {s.name}
                </h3>
                <p className="col-span-2 max-w-2xl text-sm text-muted-foreground md:col-span-1">
                  {s.summary}
                </p>
                <span
                  aria-hidden="true"
                  className="col-span-2 font-display text-xl transition-transform duration-300 group-hover:translate-x-2 md:col-span-1"
                >
                  &#8594;
                </span>
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
              alt="ANKA officers formed up on a grass field during a training drill"
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
                  <p className="mt-2 text-sm text-muted-foreground">{g.items.join(" &middot; ")}</p>
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
              alt="ANKA supervisor reviewing an occurrence book with an officer at a guard post at night"
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
