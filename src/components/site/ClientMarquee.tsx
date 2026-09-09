import { clients } from "@/content/anka";
import { Container, Eyebrow } from "./Primitives";

/**
 * Client wordmark marquee scrolls continuously right-to-left.
 * Replace a client's `logo` with an image URL once the artwork is supplied and
 * it renders in place of the wordmark automatically.
 */
export function ClientMarquee() {
  const tracks = [0, 1, 2];

  return (
    <section className="border-y border-border bg-ink py-8 text-ink-foreground md:py-10">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Eyebrow>Trusted on the ground</Eyebrow>
          <p className="hidden text-xs text-ink-muted sm:block">Selected client partners</p>
        </div>
      </Container>
      <div
        className="group relative mt-6 overflow-hidden"
      >
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {tracks.map((trackIndex) => (
            <ul key={trackIndex} aria-hidden={trackIndex > 0} className="flex shrink-0 items-center gap-3 pr-3">
              {clients.map((c) => (
                <li key={`${trackIndex}-${c.name}`} className="flex h-20 w-48 items-center justify-center rounded-2xl border border-border bg-logo-surface px-7 md:h-24 md:w-60">
                  {c.logo ? (
                    <img src={c.logo} alt={trackIndex === 0 ? c.name : ""} loading="lazy" className="max-h-12 max-w-full object-contain md:max-h-14" />
                  ) : (
                    <span className="whitespace-nowrap font-display text-lg font-bold text-ink">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
