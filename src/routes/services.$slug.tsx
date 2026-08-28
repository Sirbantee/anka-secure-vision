import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { serviceBySlug, services } from "@/content/anka";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  Lead,
  Section,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CallToAction } from "@/components/site/CallToAction";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | ANKA Security Services" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} | ANKA Security Services Uganda`;
    return {
      meta: [
        { title },
        { name: "description", content: service.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <Section className="pt-32">
      <Container>
        <Eyebrow>Not found</Eyebrow>
        <Display level={2} className="mt-8">
          That service isn&rsquo;t one of ours.
        </Display>
        <p className="mt-6 text-muted-foreground">
          It may have been renamed. All eleven ANKA service lines are listed on the services page.
        </p>
        <Link
          to="/services"
          className="link-underline mt-8 inline-block font-display text-sm font-bold uppercase tracking-[0.18em]"
        >
          View all services
        </Link>
      </Container>
    </Section>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const blocks = [
    { label: "Operations", items: service.operations },
    { label: "Supporting technology", items: service.technology },
    { label: "Officer training", items: service.training },
  ];

  return (
    <>
      <header className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40"
        />
        <Container className="relative pb-12 pt-28 md:pb-16 md:pt-36">
          <Eyebrow tone="gold">{`${service.index} / ${service.group}`}</Eyebrow>
          <Display level={1} className="mt-6 max-w-4xl">
            {service.name}
          </Display>
          <Lead className="mt-7 text-ink-muted">{service.summary}</Lead>
        </Container>
      </header>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
            <Reveal>
              <Eyebrow>What&rsquo;s included</Eyebrow>
              <ul className="mt-10 divide-y divide-border border-t border-border">
                {service.provides.map((p) => (
                  <li key={p} className="flex gap-6 py-5">
                    <span aria-hidden="true" className="mt-3 h-px w-6 shrink-0 bg-primary" />
                    <span className="text-lg leading-relaxed text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-border p-8">
                <Eyebrow>Deployed at</Eyebrow>
                <ul className="mt-6 space-y-3">
                  {service.environments.map((e) => (
                    <li key={e} className="font-display text-lg tracking-tight">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <Figure
                src={service.image}
                alt={service.imageAlt}
                ratio="4/3"
                className="mt-10"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-px lg:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal
                key={b.label}
                delay={Math.min(i * 90, 300)}
                className="border-t border-ink-border py-8 pr-8"
              >
                <h2 className="font-display text-2xl">{b.label}</h2>
                <ul className="mt-6 space-y-4 text-sm text-ink-muted">
                  {b.items.map((it) => (
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
            <Eyebrow>Also consider</Eyebrow>
          </Reveal>
          <ul className="mt-10 border-t border-border">
            {others.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={Math.min(i * 60, 200)}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors hover:text-primary"
                >
                  <span className="font-display text-xl tracking-tight md:text-2xl">{s.name}</span>
                  <span
                    aria-hidden="true"
                    className="font-display transition-transform duration-300 group-hover:translate-x-2"
                  >
                    &#8594;
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CallToAction
        eyebrow="Request this service"
        title={`Deploy ${service.short.toLowerCase()} at your premises.`}
        body="Send us the location and the nature of the site. We will assess it and return a deployment proposal with numbers and shift patterns."
      />
    </>
  );
}
