import { Link } from "@tanstack/react-router";
import { company, services, telHref, waHref } from "@/content/anka";
import { img } from "@/content/images";
import { Container, Eyebrow } from "./Primitives";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container className="py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={img.logo} alt="" className="h-14 w-auto" />
            <p className="mt-6 max-w-sm text-ink-muted">
              A Ugandan security company built on trained officers, close supervision and
              technology that supports the people on the ground.
            </p>
            <p className="label mt-8 text-gold">Operating in {company.locations.join(" & ")}</p>
          </div>

          <div>
            <Eyebrow tone="light">Services</Eyebrow>
            <ul className="mt-6 space-y-2 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-ink-foreground underline underline-offset-4"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Eyebrow tone="light">Contact</Eyebrow>
            <address className="mt-6 space-y-1 text-sm not-italic text-ink-muted">
              <p>{company.address.line1}</p>
              <p>{company.address.line2}</p>
              <p>{company.address.box}</p>
              <p>{company.address.city}</p>
            </address>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a
                  className="transition-colors hover:text-gold"
                  href={telHref(company.phone)}
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gold" href={waHref(company.whatsapp)}>
                  WhatsApp {company.whatsapp}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-gold"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-border pt-8 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Footer">
            <Link to="/about" className="hover:text-ink-foreground">
              About
            </Link>
            <Link to="/careers" className="hover:text-ink-foreground">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-ink-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
