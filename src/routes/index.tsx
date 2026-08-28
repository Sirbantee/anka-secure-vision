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
    <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink text-ink-foreground">
      <img
        src={img.heroGate}
        alt="ANKA security officer on post at a lit corporate entrance at dusk"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/45"
      />
      <Container className="relative pb-10 pt-28">
        <Eyebrow tone="gold">Kampala &middot; Hoima &middot; Since {company.founded}</Eyebrow>
        <h1 className="mt-8 font-display text-[clamp(2.9rem,9.5vw,8.5rem)] leading-[0.94] tracking-[-0.035em]">
          Securing
          <br />
          what <span className="text-primary">matters.</span>
        </h1>
        <div className="mt-10 grid gap-10 border-t border-ink-border pt-10 md:grid-cols-[1.1fr_auto] md:items-end">
          <Lead className="text-ink-muted">
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
              Eleven service lines, one standard.
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
                className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b border-border py-7 transition-colors hover:bg-background md:grid-cols-[4rem_20rem_1fr_auto] md:items-center md:gap-8"
              >
                <span className="label pt-1 text-muted-foreground md:pt-0">{s.index}</span>
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
              className="border-t border-ink-border py-8 pr-6"
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
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />
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
              className="border-t border-ink-border py-7 pr-6"
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
              className="border border-border px-6 py-4 font-display text-lg tracking-tight transition-colors hover:border-primary hover:text-primary"
            >
              {ind.name}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
