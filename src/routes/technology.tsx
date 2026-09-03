import { createFileRoute, Link } from "@tanstack/react-router";
import { services, technologyCapabilities } from "@/content/anka";
import { img } from "@/content/images";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  PageHeader,
  Section,
} from "@/components/site/Primitives";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";

const title = "CCTV, Alarms & Access Control | ANKA Security Technology";
const description =
  "CCTV installation and 24/7 monitoring, intruder and fire alarms with armed response, electric fencing, biometrics, turnstiles and vehicle tracking across Uganda.";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbSchema([{ name: "Technology", path: "/technology" }]),
      },
    ],
  }),
  component: TechnologyPage,
});

const techServices = ["cctv", "alarms", "access-control", "vehicle-tracking"];

function TechnologyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Technology" }]}
        eyebrow="Technology"
        title={
          <>
            Systems that put officers <span className="text-primary">where they matter.</span>
          </>
        }
        lead="Every camera, alarm and tracker reports into one monitored control room."
        image={img.controlRoom}
        imageAlt="ANKA control room with a wall of CCTV monitors"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <Reveal>
              <Eyebrow>The control room</Eyebrow>
              <Display level={2} className="mt-8 max-w-[22ch]">
                Verified, escalated, attended.
              </Display>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Operators watch live feeds, receive alarm activations and monitor fleet movement
                  from one room, continuously. An activation is verified, visually where cameras
                  exist, then escalated to supervisors and response.
                </p>
                <p>
                  Every activation, response and outcome is logged, so clients get a record rather
                  than a reassurance. Repeat and false activations are investigated instead of
                  absorbed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Figure
                src={img.cctv}
                alt="Technician installing a dome CCTV camera on a commercial building"
                ratio="4/5"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <Reveal>
            <Eyebrow tone="gold">Capabilities</Eyebrow>
            <Display level={2} className="mt-8">
              What we install and monitor.
            </Display>
          </Reveal>
          <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {technologyCapabilities.map((c, i) => (
              <Reveal
                key={c.title}
                delay={Math.min(i * 70, 300)}
                className="border-t border-ink-border py-8 pr-6"
              >
                <h3 className="font-display text-xl">{c.title}</h3>
                <ul className="mt-5 space-y-2 text-sm text-ink-muted">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <Reveal>
            <Eyebrow>Service lines</Eyebrow>
            <Display level={2} className="mt-8">
              Technology in detail.
            </Display>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {services
              .filter((s) => techServices.includes(s.slug))
              .map((s, i) => (
                <Reveal key={s.slug} delay={Math.min(i * 70, 250)}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="group block">
                    <div className="overflow-hidden bg-background" style={{ aspectRatio: "16/10" }}>
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-2xl tracking-tight transition-colors group-hover:text-primary">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
                  </Link>
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>

      <CallToAction
        eyebrow="Site survey"
        title="Let us design the system for your premises."
        body="Camera positions, alarm zones and access points should come from the layout of the site. We survey first, then quote."
      />
    </>
  );
}
