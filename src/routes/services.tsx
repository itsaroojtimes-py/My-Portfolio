import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Arooj Shahzadi" },
      { name: "description", content: "Social media design, teaching, digital art commissions, and web UI services by Arooj Shahzadi." },
      { property: "og:title", content: "Services — Arooj Shahzadi" },
      { property: "og:description", content: "Studio services for creators, brands, and students." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/services" }],
  }),
  component: () => (
    <div className="pt-32">
      <Services />
      <Process />
      <FAQ />
      <CTA />
    </div>
  ),
});
