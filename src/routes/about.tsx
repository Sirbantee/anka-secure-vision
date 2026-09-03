import { createFileRoute } from "@tanstack/react-router";
import {
  company,
  officerStandards,
  operatingModel,
  supervisionModel,
} from "@/content/anka";
import { img } from "@/content/images";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  PageHeader,
  Section,
  StatRow,
} from "@/components/site/Primitives";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";

const title = "About ANKA Security Services | Ugandan Security Company";
const description =
  "ANKA Security Services Limited protects premises across Kampala and Hoima with vetted officers, four weeks of training and continuous supervision by management.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbSchema([{ name: "About", path: "/about" }]),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About ANKA"
        title={
          <>
            Built around the officer <span className="text-primary">on the ground.</span>
          </>
        }
        lead="Ugandan guarding, security technology and rapid response, from Kampala and Hoima."
        image={img.officersLineup}
        imageAlt="ANKA security officers standing in formation outdoors"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Our position</Eyebrow>
              <Display level={2} className="mt-8 max-w-[24ch]">
                We are only as good as the post we last checked.
              </Display>
              <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Security fails quietly: a patrol not walked, an occurrence book not filled, a
                  camera pointed at a wall. ANKA is organised to catch those things before a client
                  ever has to.
                </p>
                <p>
                  That means selective recruitment, a four-week training programme, post orders
                  written for each premises, and random checks carried out by supervisors and top
                  management alike. Management is available to clients 24/7, not through a
                  ticketing queue.
                </p>
                <p>
                  Technology sits underneath the same operation. CCTV, alarms, access control and
                  vehicle tracking report into a monitored control room, so a signal produces
                  officers rather than a notification.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:pt-20">
              <Figure
                src={img.controlRoom}
                alt="ANKA control room operator monitoring CCTV feeds"
                ratio="4/5"
                caption="The ANKA control room, staffed around the clock"
              />
            </Reveal>
          </div>
          <div className="mt-20">
            <StatRow
              items={[
                { value: company.founded, label: "Operating since" },
                { value: "11", label: "Service lines" },
                { value: "15", label: "Basic course modules" },
                { value: "24/7", label: "Management access" },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <Reveal>
            <Eyebrow tone="gold">Operating model</Eyebrow>
            <Display level={2} className="mt-8 max-w-[22ch]">
              Seven steps, repeated for every site.
            </Display>
          </Reveal>
          <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {operatingModel.map((step, i) => (
              <Reveal
                key={step.step}
                delay={Math.min(i * 60, 360)}
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

      <Section tone="deep">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>Officer standards</Eyebrow>
              <Display level={2} className="mt-8">
                Who gets to wear the uniform.
              </Display>
              <dl className="mt-8 divide-y divide-border border-t border-border">
                {officerStandards.map((o) => (
                  <div key={o.label} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="label text-muted-foreground">{o.label}</dt>
                    <dd className="text-sm">{o.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Supervision</Eyebrow>
              <Display level={2} className="mt-8">
                What happens after deployment.
              </Display>
              <div className="mt-8 space-y-10">
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
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CallToAction
        eyebrow="Work with ANKA"
        title="Tell us what you need protected."
        body="Send us the location and the nature of the premises. We will assess it and come back with a deployment proposal."
      />
    </>
  );
}
