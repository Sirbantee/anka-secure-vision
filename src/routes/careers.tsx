import { createFileRoute } from "@tanstack/react-router";
import { basicCourseModules, company, officerStandards } from "@/content/anka";
import { img } from "@/content/images";
import {
  ActionAnchor,
  Container,
  Display,
  Eyebrow,
  Figure,
  PageHeader,
  Section,
} from "@/components/site/Primitives";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

const title = "Security Officer Jobs in Uganda | Careers at ANKA";
const description =
  "Join ANKA Security Services. We recruit officers aged 24-45 with O-Level education, a Certificate of Good Conduct and fluent English and Kiswahili.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbSchema([{ name: "Careers", path: "/careers" }]),
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Careers" }]}
        eyebrow="Careers"
        title={
          <>
            We recruit for judgement, then <span className="text-primary">train the rest.</span>
          </>
        }
        lead="ANKA hires officers, canine handlers, control-room operators and supervisors across Kampala and Hoima."
        image={img.officerDetail}
        imageAlt="Close detail of the ANKA uniform shoulder and gold epaulette"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Requirements</Eyebrow>
              <Display level={2} className="mt-8">
                What we look for.
              </Display>
              <dl className="mt-8 divide-y divide-border border-t border-border">
                {officerStandards.map((o) => (
                  <div key={o.label} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="label text-muted-foreground">{o.label}</dt>
                    <dd className="text-sm">{o.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <Eyebrow>How to apply</Eyebrow>
                <p className="mt-6 max-w-xl text-lg text-foreground/80">
                  Send your CV, a copy of your Certificate of Good Conduct and your academic
                  documents to {company.email}. Shortlisted applicants are invited for vetting and
                  interview.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ActionAnchor
                    href={`mailto:${company.email}?subject=${encodeURIComponent("Application: Security Officer")}`}
                  >
                    Email your application
                  </ActionAnchor>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:pt-16">
              <Figure
                src={img.classroom}
                alt="Trainee ANKA officers in a classroom session with an instructor"
                ratio="4/5"
                caption="Every new officer completes the four-week programme"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow tone="gold">What you will learn</Eyebrow>
            <Display level={2} className="mt-8">
              Fifteen modules, then the premises itself.
            </Display>
          </Reveal>
          <ul className="mt-10 grid gap-x-10 border-t border-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {basicCourseModules.map((m, i) => (
              <li
                key={m}
                className="flex items-baseline gap-4 border-b border-ink-border py-4 text-sm"
              >
                <span className="label text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-base tracking-tight">{m}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
