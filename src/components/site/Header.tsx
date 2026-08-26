import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { company, navigation, telHref } from "@/content/anka";
import { img } from "@/content/images";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/92 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-[86rem] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} — home`}>
            <img src={img.logo} alt="" className="h-11 w-auto md:h-12" />
            <span className="hidden sm:block">
              <span
                className={cn(
                  "block font-display text-base font-extrabold leading-none tracking-[0.16em]",
                  scrolled ? "text-foreground" : "text-ink-foreground",
                )}
              >
                ANKA
              </span>
              <span
                className={cn(
                  "label mt-1 block text-[0.5rem]",
                  scrolled ? "text-muted-foreground" : "text-ink-muted",
                )}
              >
                Security Services
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "link-underline font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors",
                  scrolled
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-ink-foreground/80 hover:text-ink-foreground",
                )}
                activeProps={{ "data-active": "true" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telHref(company.phone)}
              className="bg-primary px-5 py-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-green-deep"
            >
              {company.phone}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex items-center gap-3 lg:hidden",
              open || scrolled ? "text-foreground" : "text-ink-foreground",
            )}
          >
            <span className="label text-[0.6rem]">{open ? "Close" : "Menu"}</span>
            <span className="flex h-4 w-6 flex-col justify-between">
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform duration-300",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span className={cn("block h-px w-full bg-current", open && "opacity-0")} />
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform duration-300",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-[opacity,visibility] duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav
          className="flex h-full flex-col justify-center px-6 md:px-10"
          aria-label="Mobile primary"
        >
          {navigation.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-border py-4 font-display text-[clamp(1.6rem,7vw,2.4rem)] tracking-tight transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-10 space-y-1 text-sm">
            <a className="block" href={telHref(company.phone)}>
              {company.phone}
            </a>
            <a className="block text-muted-foreground" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
