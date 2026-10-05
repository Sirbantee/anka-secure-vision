import { useEffect, useRef, useState } from "react";

/**
 * Full-width stats band under the client marquee.
 * Counts numeric stats up once when scrolled into view; values of four or
 * more characters (years, "24/7") render statically. Replace the values in
 * `stats` once real officer, site and response figures are confirmed.
 */
const stats = [
  { value: "24/7", label: "Control room" },
  { value: "2015", label: "Operating since" },
  { value: "11", label: "Service lines" },
  { value: "15", label: "Basic course modules" },
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
    <section className="bg-primary text-foreground" aria-label="ANKA at a glance">
      <dl className="mx-auto grid w-full max-w-[86rem] grid-cols-2 px-6 md:grid-cols-4 md:px-10 lg:px-14">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={
              index === 0
                ? "px-2 py-10 md:py-14"
                : "border-t border-gold/40 px-2 py-10 md:border-l md:border-t-0 md:py-14"
            }
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none">
              <CountUpValue value={stat.value} />
            </dd>
            <dd className="label mt-4 text-foreground/75">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
