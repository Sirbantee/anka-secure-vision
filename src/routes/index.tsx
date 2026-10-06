import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Radio, ShieldCheck } from "lucide-react";
import {
  company,
  industries,
  officerStandards,
  operatingModel,
  services,
  technologyCapabilities,
  telHref,
} from "@/content/anka";
import { img } from "@/content/images";
import campusEntrance from "@/assets/anka-campus-entrance.png.asset.json";
import { ActionAnchor, ActionLink, Container, Display, Eyebrow } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";
import { ClientMarquee } from "@/components/site/ClientMarquee";
import { StatsStrip } from "@/components/site/StatsStrip";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <StatsStrip />
      <ServiceCards />
      <OperationsShowcase />
      <Standards />
      <Industries />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[76svh] items-end overflow-hidden bg-ink pt-16 text-ink-foreground md:min-h-[82svh] md:pt-20">
      <img
        src={campusEntrance.url}
        alt="ANKA security at a secured campus entrance"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        width={1672}
        height={941}
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover object-[60%_center] md:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/30" />

      <Container className="relative pb-8 pt-24 md:pb-10 md:pt-32">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <Eyebrow tone="gold">
              Security services, Uganda
            </Eyebrow>
          </div>
          <h1 className="mt-4 font-display text-[clamp(4rem,10vw,8rem)] font-extrabold leading-[0.82] text-ink-foreground">
            <span className="block animate-fade-up" style={{ animationDelay: "120ms" }}>
              ANKA
            </span>
            <span
              className="mt-2 block max-w-[18ch] animate-fade-up font-sans text-[clamp(1.25rem,3vw,2rem)] font-medium leading-[1.15] text-ink-foreground"
              style={{ animationDelay: "240ms" }}
            >
              Securing what matters
            </span>
          </h1>
          <p
            className="mt-5 max-w-md animate-fade-up text-base text-ink-foreground/85 md:text-lg"
            style={{ animationDelay: "360ms" }}
          >
            Securing what matters, day and night.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "480ms" }}>
            <ActionLink to="/services">Explore services</ActionLink>
            <ActionAnchor href={telHref(company.phone)} variant="light">
              Talk to us
            </ActionAnchor>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-3 lg:ml-auto lg:max-w-3xl">
          {[
            ["Coverage", "Kampala & Hoima"],
            ["Control room", "Monitored 24/7"],
            ["Established", company.founded],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0 rounded-xl border border-ink-border bg-ink/55 px-3 py-3 backdrop-blur-md sm:px-5 sm:py-4">
              <p className="label truncate text-[0.6rem] text-gold sm:text-xs">{label}</p>
              <p className="mt-1.5 font-display text-xs font-semibold sm:mt-2 sm:text-sm">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const featuredServices = [services[0], services[4], services[5], services[1], services[6], services[9]].filter(
  (service): service is (typeof services)[number] => Boolean(service),
);

function ServiceCards() {
  return (
    <section id="services" className="bg-cream-deep py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Integrated protection</Eyebrow>
            <Display level={2} className="mt-4 max-w-[22ch]">
              One operation. Every layer.
            </Display>
          </div>
          <p className="max-w-md text-sm text-muted-foreground md:text-base">
            People, monitoring and response working as one system around your premises.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[19rem] gap-4 md:grid-cols-2 lg:grid-cols-12">
          {featuredServices.map((service, index) => {
            const span = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
            return (
              <Reveal key={service.slug} delay={Math.min(index * 55, 260)} className={span}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group media-card block h-full text-ink-foreground"
                >
                  <img src={service.image} alt={service.imageAlt} loading="lazy" className="image-drift h-full w-full object-cover" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                  <div aria-hidden="true" className="brand-tint" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 md:p-6">
                    <div>
                      <p className="label text-gold">{service.index}</p>
                      <h3 className="mt-2 max-w-md font-display text-xl font-semibold md:text-2xl">{service.name}</h3>
                      <p className="mt-2 hidden max-w-lg text-sm text-ink-muted sm:block">{service.summary}</p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink-border bg-ink/50 backdrop-blur-md transition-colors group-hover:bg-primary">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 flex justify-end">
          <ActionLink to="/services" variant="outline">View all services</ActionLink>
        </div>
      </Container>
    </section>
  );
}

function OperationsShowcase() {
  const steps = operatingModel.slice(0, 4);
  return (
    <section className="relative overflow-hidden bg-green-deep py-16 text-ink-foreground md:py-20">
      <div aria-hidden="true" className="bg-grid-subtle absolute inset-0" />
      <Container className="relative">
        <Reveal className="text-center">
          <Eyebrow tone="gold">The ANKA standard</Eyebrow>
          <Display level={2} className="mx-auto mt-4 max-w-[22ch]">Protection designed around the site.</Display>
          <p className="mx-auto mt-5 max-w-xl text-sm text-ink-muted md:text-base">
            Every deployment begins with the premises, then combines trained officers, live oversight and clear escalation.
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-2xl bg-background p-3 text-foreground md:p-5">
          <div className="relative overflow-hidden rounded-xl bg-ink" style={{ aspectRatio: "16/8" }}>
            <img src={img.controlRoom} alt="ANKA operator monitoring security feeds in the control room" loading="lazy" className="h-full w-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-ink/70 px-4 py-3 text-ink-foreground backdrop-blur-md">
              <Radio aria-hidden="true" className="size-4 text-primary" />
              <span className="label">Live oversight, every shift</span>
            </div>
          </div>
          <div className="grid gap-5 px-2 pb-3 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="border-t border-border pt-4">
                <p className="label text-primary">{step.step}</p>
                <h3 className="mt-3 font-display text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal className="media-card group min-h-[25rem] border-ink-border">
            <img src={img.officerDetail} alt="A professional security officer patrolling a premium property" loading="lazy" className="image-drift absolute inset-0 h-full w-full object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <Eyebrow tone="gold">On the ground</Eyebrow>
              <h3 className="mt-3 max-w-md font-display text-2xl">Officers trained for the environment.</h3>
            </div>
          </Reveal>
          <Reveal delay={90} className="rounded-2xl border border-ink-border bg-ink p-7 md:p-9">
            <ShieldCheck aria-hidden="true" className="size-9 text-primary" strokeWidth={1.5} />
            <Eyebrow tone="gold" className="mt-10">One accountable operation</Eyebrow>
            <h3 className="mt-4 max-w-md font-display text-2xl">Guarding, technology and response stay connected.</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {technologyCapabilities.map((capability) => (
                <div key={capability.title} className="rounded-xl border border-ink-border p-4">
                  <p className="font-display text-sm font-semibold">{capability.title}</p>
                  <p className="mt-2 text-xs text-ink-muted">{capability.items.slice(0, 2).join(" · ")}</p>
                </div>
              ))}
            </div>
            <ActionLink to="/technology" variant="light" className="mt-8">Explore technology</ActionLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Standards() {
  return (
    <section className="bg-background py-16 md:py-20">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Eyebrow>Built for trust</Eyebrow>
            <Display level={2} className="mt-4 max-w-[18ch]">Discipline you can verify.</Display>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Selective recruitment, documented vetting, site-specific training and active supervision shape every ANKA deployment.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="media-card group min-h-[23rem] md:row-span-2 lg:min-h-full">
            <img src={img.trainingDrill} alt="ANKA officer equipment and radio detail during training" loading="lazy" className="image-drift absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <p className="label absolute bottom-5 left-5 text-gold">Prepared before deployment</p>
          </Reveal>
          {officerStandards.slice(0, 4).map((standard, index) => (
            <Reveal key={standard.label} delay={index * 55} className="rounded-2xl border border-border bg-card p-6 md:p-7">
              <Check aria-hidden="true" className="size-5 text-primary" />
              <p className="label mt-8 text-muted-foreground">{standard.label}</p>
              <p className="mt-3 font-display text-lg font-semibold leading-snug">{standard.value}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-ink-foreground md:py-20">
      <div aria-hidden="true" className="bg-grid-subtle absolute inset-0" />
      <Container className="relative">
        <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow tone="gold">Industries</Eyebrow>
            <Display level={2} className="mt-4 max-w-[20ch]">Security shaped around the operation.</Display>
            <p className="mt-6 max-w-sm text-sm text-ink-muted md:text-base">
              Seven operating environments we work in every week. Each deployment starts from the risks of that site, not a template.
            </p>
            <Link
              to="/industries"
              className="link-underline mt-8 inline-block font-display text-sm font-bold uppercase tracking-[0.18em] text-gold"
            >
              All industries
            </Link>
          </div>
          <Reveal delay={80}>
            <ul>
              {industries.map((industry, index) => (
                <li key={industry.name} className="group border-b border-ink-border first:border-t">
                  <Link to="/industries" className="flex items-start gap-5 py-5 md:gap-8 md:py-6">
                    <span className="label shrink-0 pt-1 text-gold md:pt-2">0{index + 1}</span>
                    <span className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-gold md:text-2xl">
                        {industry.name}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm text-ink-muted md:text-[0.95rem]">{industry.body}</p>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-2"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}