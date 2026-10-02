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
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12 md:gap-20 md:pr-20">
          {track.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex h-20 w-40 items-center justify-center px-2 md:h-24 md:w-52"
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-12 max-w-full object-contain opacity-100 mix-blend-multiply drop-shadow-sm transition-transform duration-500 hover:scale-105 md:max-h-14"
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
