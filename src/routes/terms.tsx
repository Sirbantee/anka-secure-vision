import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/site/LegalDocument";
import { PageHeader } from "@/components/site/Primitives";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { img } from "@/content/images";
import content from "@/content/terms-conditions.md?raw";

const title = "Terms & Conditions | ANKA Security Services";
const description = "Terms governing use of the ANKA Security Services Limited website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ankasecurityug.com/terms" }],
    scripts: [{ type: "application/ld+json", children: breadcrumbSchema([{ name: "Terms & Conditions", path: "/terms" }]) }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <><PageHeader crumbs={[{ label: "Terms & Conditions" }]} eyebrow="Legal" title="Terms & Conditions" lead="The terms that apply when using the ANKA website." image={img.access} imageAlt="Secured entrance protected by ANKA systems" /><LegalDocument content={content} /></>;
}