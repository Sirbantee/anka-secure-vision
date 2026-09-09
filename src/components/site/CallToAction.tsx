import { company, telHref } from "@/content/anka";
import { img } from "@/content/images";
import { ActionAnchor, ActionLink, Container, Display, Eyebrow } from "./Primitives";
import { Reveal } from "./Reveal";

export function CallToAction({
  eyebrow = "Next step",
  title = "Let us assess your premises.",
  body = "Every ANKA deployment starts with an assessment of the site and its risk profile. Tell us where you are and what you are protecting.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-background py-6 text-ink-foreground md:py-10">
      <Container>
      <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-panel">
      <img
        src={img.officerDetail}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/72 to-ink/45" />
      <div className="relative px-6 py-14 md:px-12 md:py-20">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="gold">{eyebrow}</Eyebrow>
          <Display level={2} className="mt-6">
            {title}
          </Display>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/85">{body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact">Request an assessment</ActionLink>
            <ActionAnchor href={telHref(company.phone)} variant="light">
              {company.phone}
            </ActionAnchor>
          </div>
        </Reveal>
      </div>
      </div>
      </Container>
    </section>
  );
}
