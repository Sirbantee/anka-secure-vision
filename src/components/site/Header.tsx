import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Building2,
  Cctv,
  ChevronDown,
  GraduationCap,
  Home,
  Layers,
  Phone,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { company, navigation, serviceGroups, services, telHref } from "@/content/anka";
import { img } from "@/content/images";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  home: Home,
  shield: ShieldCheck,
  layers: Layers,
  graduation: GraduationCap,
  cctv: Cctv,
  building: Building2,
  users: Users,
  phone: Phone,
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(true);
  };
  const closeMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(false), 160);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
        <div className="mx-auto flex w-full max-w-[84rem] items-center justify-between gap-6 rounded-2xl border border-border bg-background/90 px-4 py-2 shadow-2xl backdrop-blur-xl md:px-6">
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label={`${company.name} home`}
          >
            <img src={img.logo} alt="ANKA Security Services Limited" className="h-8 w-auto md:h-10" />
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navigation.map((item) => {
              const Icon = icons[item.icon] ?? Home;
              const isServices = item.to === "/services";
              return (
                <div
                  key={item.to}
                  className="relative"
                  {...(isServices
                    ? { onMouseEnter: openMenu, onMouseLeave: closeMenu }
                    : { onMouseEnter: closeMenu })}
                >
                  <Link
                    to={item.to}
                    activeOptions={item.to === "/" ? { exact: true } : {}}
                    className="group flex items-center gap-2 px-3 py-2.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-foreground/65 transition-colors hover:text-foreground data-[status=active]:text-primary"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-[15px] shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
                      strokeWidth={1.75}
                    />
                    {item.label}
                    {isServices ? (
                      <ChevronDown aria-hidden="true" className="size-3 opacity-60" />
                    ) : null}
                  </Link>
                </div>
              );
            })}
            <a
              href={telHref(company.phone)}
              className="ml-3 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-accent"
            >
              <Phone aria-hidden="true" className="size-[15px]" strokeWidth={1.75} />
              {company.phone}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex items-center gap-3 lg:hidden"
          >
            <span className="label text-[0.6rem]">{open ? "Close" : "Menu"}</span>
            <span className="flex h-3.5 w-6 flex-col justify-between">
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span className={cn("block h-px w-full bg-current", open && "opacity-0")} />
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform duration-300",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        {/* Services mega-menu: jump straight to a service without scrolling */}
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className={cn(
            "absolute inset-x-5 top-full mt-2 hidden rounded-2xl border border-border bg-background/98 shadow-2xl backdrop-blur-xl transition-[opacity,transform] duration-300 lg:block",
            menu
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-8 md:px-8 lg:grid-cols-3 lg:px-12">
            {serviceGroups.map((group) => (
              <div key={group}>
                <p className="label text-muted-foreground">{group}</p>
                <ul className="mt-4 space-y-1.5">
                  {services
                    .filter((s) => s.group === group)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="flex items-baseline gap-3 py-1 text-sm transition-colors hover:text-primary"
                        >
                          <span className="label text-[0.55rem] text-muted-foreground">
                            {s.index}
                          </span>
                          <span className="font-display tracking-tight">{s.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background pt-24 transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="h-full overflow-y-auto px-5 pb-10" aria-label="Mobile primary">
          <ul className="grid grid-cols-2 gap-3">
            {navigation.map((item) => {
              const Icon = icons[item.icon] ?? Home;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="bento-card flex flex-col gap-3 p-4 hover:text-primary"
                  >
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    <span className="font-display text-lg tracking-tight">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="label mt-8 text-muted-foreground">All services</p>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="flex items-baseline gap-3 py-2.5 text-sm"
                >
                  <span className="label text-[0.55rem] text-muted-foreground">{s.index}</span>
                  <span className="font-display tracking-tight">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-1 text-sm">
            <a href={telHref(company.phone)}>{company.phone}</a>
            <a className="text-muted-foreground" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
