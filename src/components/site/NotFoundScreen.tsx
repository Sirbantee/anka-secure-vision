import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { company, navigation, telHref } from "@/content/anka";
import { img } from "@/content/images";
import { Container, Eyebrow } from "./Primitives";

/**
 * 404 — a dark "night patrol" screen. A torch beam follows the pointer and is
 * the only thing that reveals the missing page number underneath.
 */
export function NotFoundScreen() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 45 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (clientX: number, clientY: number) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: ((clientX - r.left) / r.width) * 100,
        y: ((clientY - r.top) / r.height) * 100,
      });
      setActive(true);
    };
    const onMouse = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) move(t.clientX, t.clientY);
    };
    el.addEventListener("mousemove", onMouse);
    el.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMouse);
      el.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink text-ink-foreground"
    >
      <img
        src={img.alarm}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(38rem 38rem at ${pos.x}% ${pos.y}%, oklch(0.7049 0.1845 152.24 / 0.22), transparent 70%)`,
          transition: active ? "none" : "background 600ms ease",
        }}
      />

      <Container className="relative flex flex-1 flex-col justify-center py-32">
        <Eyebrow tone="gold">Error 404 &middot; Unsecured area</Eyebrow>
        <h1
          className="mt-10 select-none font-display text-[clamp(5rem,26vw,20rem)] leading-[0.8] tracking-[-0.05em]"
          style={{
            color: "transparent",
            backgroundImage: `radial-gradient(24rem 24rem at ${pos.x}% ${pos.y}%, oklch(0.7049 0.1845 152.24), oklch(0.30 0.02 250) 62%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          404
        </h1>
        <p className="mt-10 max-w-xl text-lg text-ink-muted">
          This post is empty. The page you were looking for has moved, been renamed, or never
          existed — sweep the beam around and then take one of the routes below.
        </p>

        <nav className="mt-14 flex flex-wrap gap-x-10 gap-y-4" aria-label="Recovery">
          <Link
            to="/"
            className="link-underline font-display text-sm font-bold uppercase tracking-[0.18em] text-gold"
          >
            Back to home
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline font-display text-sm font-bold uppercase tracking-[0.18em] text-ink-muted hover:text-ink-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="relative pb-10">
        <div className="flex flex-col gap-2 border-t border-ink-border pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>{company.name}</p>
          <a className="hover:text-ink-foreground" href={telHref(company.phone)}>
            {company.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
