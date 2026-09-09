import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[86rem] px-6 md:px-10 lg:px-14", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "deep" | "ink" | "green";
  id?: string;
}) {
  const tones = {
    cream: "bg-background text-foreground",
    deep: "bg-panel text-foreground",
    ink: "bg-ink text-ink-foreground",
    green: "bg-green-deep text-ink-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-14 md:py-16 lg:py-20", tones[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "muted",
}: {
  children: ReactNode;
  className?: string;
  tone?: "muted" | "light" | "gold" | "green";
}) {
  const tones = {
    muted: "text-muted-foreground",
    light: "text-ink-muted",
    gold: "text-gold",
    green: "text-primary",
  } as const;
  return (
    <p className={cn("label", tones[tone], className)}>{children}</p>
  );
}

export function Display({
  children,
  className,
  level = 2,
}: {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}) {
  const sizes = {
    1: "text-[clamp(2rem,4.4vw,3.5rem)]",
    2: "text-[clamp(1.6rem,2.9vw,2.5rem)]",
    3: "text-[clamp(1.25rem,1.7vw,1.6rem)]",
  } as const;
  const Tag = (level === 1 ? "h1" : level === 2 ? "h2" : "h3") as "h1";
  return <Tag className={cn(sizes[level], "font-display", className)}>{children}</Tag>;
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("max-w-2xl text-lg leading-relaxed md:text-xl", className)}>{children}</p>
  );
}

type ActionProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "light";
};

const actionClasses = ({ variant = "solid" }: { variant?: ActionProps["variant"] }) =>
  cn(
    "group inline-flex items-center gap-3 rounded-lg px-6 py-3.5 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
    variant === "solid" && "bg-primary text-primary-foreground hover:bg-accent",
    variant === "outline" &&
      "border border-foreground/25 text-foreground hover:border-primary hover:text-primary",
    variant === "light" && "border border-ink-border text-ink-foreground hover:bg-white/10",
  );

export function ActionLink({
  to,
  children,
  className,
  variant = "solid",
  params,
}: ActionProps & { to: string; params?: Record<string, string> }) {
  return (
    <Link
      to={to}
      {...(params ? { params } : {})}
      className={cn(actionClasses({ variant }), className)}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function ActionAnchor({
  href,
  children,
  className,
  variant = "solid",
}: ActionProps & { href: string }) {
  return (
    <a href={href} className={cn(actionClasses({ variant }), className)}>
      {children}
      <Arrow />
    </a>
  );
}

export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
    >
      &#8594;
    </span>
  );
}

export function Figure({
  src,
  alt,
  className,
  ratio = "4/3",
  priority = false,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  caption?: string;
}) {
  return (
    <figure className={cn(className)}>
      <div
        className="overflow-hidden rounded-3xl border border-border bg-panel"
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
        />
      </div>
      {caption ? (
        <figcaption className="label mt-3 text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="relative isolate min-h-[32rem] overflow-hidden bg-ink text-ink-foreground md:min-h-[38rem]">
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15"
      />
      
      <Container className="relative flex min-h-[32rem] flex-col justify-end pb-12 pt-24 md:min-h-[38rem] md:pb-16 md:pt-32">
        {crumbs?.length ? <Breadcrumbs items={crumbs} className="mb-6" /> : null}
        <Eyebrow tone="gold">{eyebrow}</Eyebrow>
        <Display level={1} className="mt-5 max-w-4xl">
          {title}
        </Display>
        <Lead className="mt-5 max-w-xl text-base text-ink-foreground/75 md:text-lg">{lead}</Lead>
      </Container>
    </header>
  );
}

export function StatRow({
  items,
  tone = "light",
}: {
  items: { value: string; label: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <dl className="grid grid-cols-2 gap-px md:grid-cols-4">
      {items.map((s) => (
        <div
          key={s.label}
          className={cn(
            "rounded-2xl px-5 py-6",
            tone === "light" ? "border-t border-border" : "border-t border-ink-border",
          )}
        >
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-none">{s.value}</dd>
          <dd
            className={cn(
              "label mt-4",
              tone === "light" ? "text-muted-foreground" : "text-ink-muted",
            )}
          >
            {s.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
