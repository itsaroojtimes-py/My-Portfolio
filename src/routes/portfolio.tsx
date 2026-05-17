import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Arooj Shahzadi" },
      { name: "description", content: "Selected works by Arooj Shahzadi — social media campaigns, digital art, brand identity, and teaching projects." },
      { property: "og:title", content: "Portfolio — Arooj Shahzadi" },
      { property: "og:description", content: "Selected works across social, art, and brand." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/portfolio" }],
  }),
  component: () => (
    <div className="pt-32">
      <Portfolio />
      <Testimonials />
      <CTA />
    </div>
  ),
});
