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
import { ActionAnchor, ActionLink, Container, Display, Eyebrow } from "@/components/site/Primitives";
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
        src={img.heroMain}
        alt="Security professional standing at the entrance of a premium commercial property at dusk"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        width={1408}
        height={1760}
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/30" />

      <Container className="relative pb-8 pt-24 md:pb-10 md:pt-32">
        <div className="max-w-3xl">
          <Eyebrow tone="gold">Security services, Uganda</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(4rem,10vw,8rem)] font-extrabold leading-[0.82] text-ink-foreground">
            ANKA
          </h1>
          <p className="mt-5 max-w-md text-base text-ink-foreground/85 md:text-lg">
            Securing what matters, day and night.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink to="/services">Explore services</ActionLink>
            <ActionAnchor href={telHref(company.phone)} variant="light">
              Talk to us
            </ActionAnchor>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:ml-auto lg:max-w-3xl">
          {[
            ["Coverage", "Kampala & Hoima"],
            ["Control room", "Monitored 24/7"],
            ["Established", company.founded],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-ink-border bg-ink/55 px-5 py-4 backdrop-blur-md">
              <p className="label text-gold">{label}</p>
              <p className="mt-2 font-display text-sm font-semibold">{value}</p>
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
    <section className="bg-green-deep py-16 text-ink-foreground md:py-20">
      <Container>
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
            <img src={img.patrol} alt="Security officers conducting a disciplined perimeter patrol" loading="lazy" className="image-drift absolute inset-0 h-full w-full object-cover" />
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
    <section className="bg-cream-deep py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Industries</Eyebrow>
            <Display level={2} className="mt-4 max-w-[22ch]">Security shaped around the operation.</Display>
          </div>
          <Link to="/industries" className="link-underline font-display text-sm font-bold uppercase tracking-[0.18em]">All industries</Link>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={Math.min(index * 45, 240)} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary">
              <p className="label text-primary">0{index + 1}</p>
              <h3 className="mt-5 font-display text-lg">{industry.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{industry.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}