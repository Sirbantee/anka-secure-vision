import { createFileRoute, Link } from "@tanstack/react-router";
import { serviceGroups, services } from "@/content/anka";
import { img } from "@/content/images";
import {
  Container,
  Display,
  Eyebrow,
  PageHeader,
  Section,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";

const title = "Security Services in Uganda | Guarding, CCTV, K9 & Response";
const description =
  "Eleven ANKA service lines: armed and unarmed guarding, canine protection, VIP escort, event security, CCTV, alarms, access control, fleet tracking, training and response.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Guarding, technology and response as{" "}
            <span className="text-primary">one operation.</span>
          </>
        }
        lead="Each service line is deployed from the same assessment, staffed by the same trained officers and monitored by the same control room."
        image={img.k9}
        imageAlt="ANKA canine handler patrolling an industrial perimeter with a German Shepherd"
      />

      {serviceGroups.map((group, gi) => (
        <Section key={group} tone={gi % 2 === 0 ? "cream" : "deep"}>
          <Container>
            <Reveal>
              <Eyebrow>{`Group 0${gi + 1}`}</Eyebrow>
              <Display level={2} className="mt-8">
                {group}
              </Display>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.group === group)
                .map((s, i) => (
                  <Reveal key={s.slug} delay={Math.min(i * 70, 300)}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="group block">
                      <div className="overflow-hidden bg-cream-deep" style={{ aspectRatio: "4/3" }}>
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="mt-6 flex items-baseline gap-4">
                        <span className="label text-muted-foreground">{s.index}</span>
                        <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-primary">
                          {s.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </Container>
        </Section>
      ))}

      <CallToAction
        eyebrow="Scope your site"
        title="Not sure which combination fits?"
        body="Most premises need a mix of officers, technology and response. Tell us about the site and we will propose the balance."
      />
    </>
  );
}
