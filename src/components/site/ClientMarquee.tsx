import { clients } from "@/content/anka";
import { Container, Eyebrow } from "./Primitives";

/**
 * Client wordmark marquee scrolls continuously right-to-left.
 * Replace a client's `logo` with an image URL once the artwork is supplied and
 * it renders in place of the wordmark automatically.
 */
export function ClientMarquee() {
  const track = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-background py-7 md:py-9">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Eyebrow>Trusted on the ground</Eyebrow>
          <p className="hidden text-xs text-muted-foreground sm:block">Selected client partners</p>
        </div>
      </Container>
      <div
        className="group relative mt-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex h-20 w-48 items-center justify-center rounded-xl border border-border bg-card px-7 md:h-24 md:w-60"
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-12 max-w-full object-contain opacity-75 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 md:max-h-14"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-xl font-semibold uppercase tracking-[0.14em] text-foreground/45 transition-colors duration-300 hover:text-foreground">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
