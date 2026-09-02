import { createFileRoute } from "@tanstack/react-router";
import {
  basicCourseModules,
  customisedWeekFocus,
  officerStandards,
  trainingApproach,
} from "@/content/anka";
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

const title = "Security Officer Training | ANKA Uganda";
const description =
  "Four weeks before deployment: a three-week ANKA Basic Guarding Course across fifteen modules, then a customised week on the client's own premises.";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbSchema([{ name: "Training", path: "/training" }]),
      },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Training" }]}
        eyebrow="Training"
        title={
          <>
            Four weeks before an officer <span className="text-primary">ever stands post.</span>
          </>
        }
        lead="Three weeks on the ANKA Basic Guarding Course, then a fourth week customised to the premises the officer will actually protect."
        image={img.trainingDrill}
        imageAlt="ANKA officers formed up on a field during a training drill"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Weeks one to three</Eyebrow>
              <Display level={2} className="mt-8">
                The Basic Guarding Course.
              </Display>
              <p className="mt-8 text-lg text-foreground/80">
                Fifteen modules covering the whole of an officer&rsquo;s duty, from legal grounds
                and reporting discipline to customer care and, where required, gun handling and
                safety.
              </p>
              <Figure
                src={img.classroom}
                alt="Issued ANKA uniform, duty belt and boots laid out before deployment"
                ratio="4/3"
                className="mt-8"
              />
            </Reveal>
            <Reveal delay={120}>
              <ol className="grid gap-x-8 border-t border-border sm:grid-cols-2">
                {basicCourseModules.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-baseline gap-4 border-b border-border py-4 text-sm"
                  >
                    <span className="label text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base tracking-tight">{m}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow tone="gold">Week four</Eyebrow>
              <Display level={2} className="mt-8 max-w-[20ch]">
                Customised to the client&rsquo;s premises.
              </Display>
              <p className="mt-8 text-lg text-ink-muted">
                The final week is built with the client. Officers learn the operation, the people,
                the protocols and the standards of the specific site they are joining, including
                the CCTV, alarm and access systems they will use daily.
              </p>
              <ul className="mt-8 space-y-4">
                {customisedWeekFocus.map((f) => (
                  <li key={f} className="flex items-center gap-5 border-t border-ink-border pt-4">
                    <span aria-hidden="true" className="h-px w-6 bg-primary" />
                    <span className="font-display text-xl tracking-tight">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="space-y-8">
              <Eyebrow tone="light">How training is delivered</Eyebrow>
              {trainingApproach.map((t) => (
                <div key={t.label} className="border-t border-ink-border pt-5">
                  <h3 className="font-display text-xl">{t.label}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{t.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Before training</Eyebrow>
            <Display level={2} className="mt-8">
              Recruitment and vetting come first.
            </Display>
            <p className="mt-8 text-lg text-foreground/80">
              No amount of training fixes the wrong candidate. Every ANKA officer is screened and
              vetted before entering the programme.
            </p>
          </Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {officerStandards.map((o) => (
              <div key={o.label}>
                <dt className="label text-muted-foreground">{o.label}</dt>
                <dd className="mt-2 text-sm">{o.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <CallToAction
        eyebrow="Training for your team"
        title="We can train to your standards."
        body="ANKA develops customised programmes and printed manuals for aviation, hospitality, oil and gas, and humanitarian operations."
      />
    </>
  );
}
