import { createFileRoute } from "@tanstack/react-router";
import { industries } from "@/content/anka";
import { img } from "@/content/images";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  PageHeader,
  Section,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";

const title = "Industries We Protect | ANKA Security Services Uganda";
const description =
  "ANKA secures hospitality, aviation, oil and gas, infrastructure, automotive, NGO and humanitarian operations with officers trained to each environment's protocols.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={
          <>
            Every sector has its own <span className="text-primary">failure points.</span>
          </>
        }
        lead="ANKA trains officers to the protocols of the environment they are deployed into, from airside discipline to guest-facing hospitality."
        image={img.fleet}
        imageAlt="Cargo trucks parked in a fenced logistics yard at dawn"
      />

      <Section>
        <Container>
          <ul className="border-t border-border">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.name} delay={Math.min(i * 55, 320)}>
                <div className="grid gap-3 border-b border-border py-8 md:grid-cols-[4rem_18rem_1fr] md:items-baseline md:gap-10">
                  <span className="label text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl tracking-tight md:text-[1.75rem]">
                    {ind.name}
                  </h2>
                  <p className="max-w-2xl text-muted-foreground">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Figure
                src={img.event}
                alt="ANKA officers managing a guest queue at an outdoor event"
                ratio="4/3"
              />
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Sector-specific training</Eyebrow>
              <Display level={2} className="mt-8 max-w-[20ch]">
                Trained on your protocols, not ours alone.
              </Display>
              <p className="mt-8 text-lg text-foreground/80">
                Where a sector carries its own compliance regime, ANKA builds the programme around
                it, including printed, bespoke manuals for the officers assigned to your premises,
                and continuous refreshers as your operation changes.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CallToAction
        eyebrow="Your sector"
        title="Tell us how your operation runs."
        body="The more we know about how your site works day to day, the more precise the deployment and the training behind it."
      />
    </>
  );
}
