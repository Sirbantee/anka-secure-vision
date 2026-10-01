import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/site/LegalDocument";
import { PageHeader } from "@/components/site/Primitives";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { img } from "@/content/images";
import content from "@/content/privacy-policy.md?raw";

const title = "Privacy Policy | ANKA Security Services";
const description = "How ANKA Security Services Limited collects, uses and protects personal information.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ankasecurityug.com/privacy" }],
    scripts: [{ type: "application/ld+json", children: breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }]) }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <><PageHeader crumbs={[{ label: "Privacy Policy" }]} eyebrow="Legal" title="Privacy Policy" lead="How ANKA handles and protects personal information." image={img.controlRoom} imageAlt="ANKA security monitoring equipment" /><LegalDocument content={content} /></>;
}