import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { company, services, telHref, waHref } from "@/content/anka";
import { img } from "@/content/images";
import {
  Container,
  Display,
  Eyebrow,
  PageHeader,
  Section,
} from "@/components/site/Primitives";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const title = "Contact ANKA Security Services | Kampala & Hoima";
const description =
  "Request a security assessment for your premises. Call +256 762 273 165, WhatsApp +256 760 811 513 or email info@ankasecurity.com.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Start with an <span className="text-primary">assessment.</span>
          </>
        }
        lead="Tell us where the premises is and what it holds. We will assess the site and come back with a deployment proposal covering officer numbers, shifts and the technology to support them."
        image={img.residential}
        imageAlt="ANKA officer at the gate of a walled residential compound"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Enquiry</Eyebrow>
              <Display level={2} className="mt-8">
                Send us the details.
              </Display>
              <ContactForm />
            </Reveal>

            <Reveal delay={120} className="space-y-10">
              <div className="border-t border-border pt-6">
                <Eyebrow>Call</Eyebrow>
                <ul className="mt-5 space-y-2 font-display text-xl tracking-tight">
                  <li>
                    <a className="link-underline" href={telHref(company.phone)}>
                      {company.phone}
                    </a>
                  </li>
                  <li>
                    <a className="link-underline" href={telHref(company.altPhone)}>
                      {company.altPhone}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border-t border-border pt-6">
                <Eyebrow>WhatsApp</Eyebrow>
                <a
                  className="link-underline mt-5 inline-block font-display text-xl tracking-tight"
                  href={waHref(company.whatsapp)}
                >
                  {company.whatsapp}
                </a>
              </div>
              <div className="border-t border-border pt-6">
                <Eyebrow>Email</Eyebrow>
                <a
                  className="link-underline mt-5 inline-block font-display text-xl tracking-tight"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </div>
              <div className="border-t border-border pt-6">
                <Eyebrow>Head office</Eyebrow>
                <address className="mt-5 space-y-1 not-italic text-muted-foreground">
                  <p>{company.address.line1}</p>
                  <p>{company.address.line2}</p>
                  <p>{company.address.box}</p>
                  <p>{company.address.city}</p>
                </address>
              </div>
              <div className="border-t border-border pt-6">
                <Eyebrow>Operating in</Eyebrow>
                <p className="mt-5 font-display text-xl tracking-tight">
                  {company.locations.join(" / ")}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "w-full border border-input bg-transparent px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const organisation = get("organisation");
    const location = get("location");
    const service = get("service");
    const message = get("message");

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please tell us a little about the premises.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Site location: ${location || "Not provided"}`,
      `Service of interest: ${service || "Not provided"}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Security enquiry: ${organisation || name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input name="name" className={fieldClass} placeholder="Your full name" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            name="email"
            type="email"
            className={fieldClass}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            className={fieldClass}
            placeholder="+256 …"
            autoComplete="tel"
            inputMode="tel"
          />
        </Field>
        <Field label="Organisation">
          <input name="organisation" className={fieldClass} placeholder="Company or estate" />
        </Field>
        <Field label="Site location">
          <input name="location" className={fieldClass} placeholder="Area, district" />
        </Field>
        <Field label="Service of interest">
          <select name="service" className={cn(fieldClass, "appearance-none")} defaultValue="">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="About the premises" error={errors.message}>
        <textarea
          name="message"
          rows={5}
          className={cn(fieldClass, "resize-y")}
          placeholder="Type of site, current security arrangements, what concerns you."
        />
      </Field>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-primary px-7 py-4 font-display text-[0.8rem] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-green-deep"
        >
          Send enquiry
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &#8594;
          </span>
        </button>
        <p className="text-sm text-muted-foreground">
          Or WhatsApp us on{" "}
          <a className="link-underline text-foreground" href={waHref(company.whatsapp)}>
            {company.whatsapp}
          </a>
        </p>
      </div>

      <p aria-live="polite" className="min-h-6 text-sm text-primary">
        {sent
          ? `Your email app should now be open with the enquiry addressed to ${company.email}. If nothing opened, email us directly.`
          : ""}
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label block text-muted-foreground">{label}</span>
      <span className="mt-3 block">{children}</span>
      {error ? <span className="mt-2 block text-sm text-destructive">{error}</span> : null}
    </label>
  );
}
