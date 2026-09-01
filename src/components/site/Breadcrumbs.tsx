import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

/** Accessible breadcrumb trail. Pair with breadcrumbSchema() for structured data. */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-ink-muted", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] uppercase tracking-[0.16em]">
        <li className="flex items-center gap-2">
          <Link to="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
            <Home aria-hidden="true" className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="h-3 w-3 opacity-60" />
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {last || !item.to ? (
                <span aria-current={last ? "page" : undefined} className="text-ink-foreground">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  {...(item.params ? { params: item.params } : {})}
                  className="transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              )}
              {!last ? <ChevronRight aria-hidden="true" className="h-3 w-3 opacity-60" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** BreadcrumbList JSON-LD for a route's head() scripts array. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path,
    })),
  });
}
