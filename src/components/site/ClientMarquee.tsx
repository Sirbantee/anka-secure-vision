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
    <section className="border-y border-border bg-cream-deep py-10">
      <Container>
        <Eyebrow>Trusted on the ground</Eyebrow>
      </Container>
      <div
        className="group relative mt-7 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= clients.length}>
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="h-12 w-auto opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
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
