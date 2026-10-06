import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { BookOpenCheck, Clock3, Layers3, ShieldCheck } from "lucide-react";
import { Container, Display, Eyebrow } from "./Primitives";

/**
 * Full-width stats band under the client marquee.
 * Counts numeric stats up once when scrolled into view; values of four or
 * more characters (years, "24/7") render statically. Replace the values in
 * `stats` once real officer, site and response figures are confirmed.
 */
type Stat = {
  value: string;
  label: string;
  detail: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const stats: Stat[] = [
  { value: "24/7", label: "Control room", detail: "Continuous oversight and incident coordination", icon: Clock3 },
  { value: "2015", label: "Operating since", detail: "A decade of disciplined security operations", icon: ShieldCheck },
  { value: "11", label: "Service lines", detail: "Integrated protection for varied environments", icon: Layers3 },
  { value: "15", label: "Training modules", detail: "Core modules in the basic officer course", icon: BookOpenCheck },
];

function CountUpValue({ value }: { value: string }) {
  const isCountable = /^\d+$/.test(value) && value.length <= 3;
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isCountable) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isCountable]);

  useEffect(() => {
    if (!active || !isCountable) return;
    const target = Number(value);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(target * eased)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isCountable, value]);

  return <span ref={ref}>{isCountable && !active ? "0" : display}</span>;
}

export function StatsStrip() {
  return (
    <section className="bg-cream-deep py-14 md:py-20" aria-labelledby="numbers-heading">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div className="flex flex-col justify-between rounded-2xl bg-green-deep p-6 text-ink-foreground md:p-8">
            <div>
              <Eyebrow tone="gold">ANKA at a glance</Eyebrow>
              <Display id="numbers-heading" level={2} className="mt-4 max-w-[12ch] text-ink-foreground">
                Numbers built on readiness.
              </Display>
              <p className="mt-5 max-w-sm text-sm text-ink-muted md:text-base">
                A clear view of the operating depth behind every ANKA deployment.
              </p>
            </div>
            <ShieldCheck aria-hidden="true" className="mt-12 size-12 text-gold" strokeWidth={1.35} />
          </div>

          <dl className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={index === 0 ? "rounded-2xl border border-primary/35 bg-primary p-6 text-primary-foreground md:p-7" : "rounded-2xl border border-border bg-card p-6 md:p-7"}
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon aria-hidden="true" className={index === 0 ? "size-6 text-gold" : "size-6 text-primary"} strokeWidth={1.6} />
                    <dd className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none">
                      <CountUpValue value={stat.value} />
                    </dd>
                  </div>
                  <dt className="mt-8 font-display text-lg font-semibold">{stat.label}</dt>
                  <dd className={index === 0 ? "mt-2 text-sm text-primary-foreground/80" : "mt-2 text-sm text-muted-foreground"}>
                    {stat.detail}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}
