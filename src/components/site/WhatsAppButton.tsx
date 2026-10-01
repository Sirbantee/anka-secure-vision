import { MessageCircle } from "lucide-react";
import { company, waHref } from "@/content/anka";

export function WhatsAppButton() {
  return (
    <a
      href={`${waHref(company.whatsapp)}?text=${encodeURIComponent("Hello ANKA, I would like to request a security assessment.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contact ANKA on WhatsApp at ${company.whatsapp}`}
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle aria-hidden="true" className="size-6" strokeWidth={2} />
    </a>
  );
}