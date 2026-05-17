import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/CTA";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire Me — Arooj Shahzadi" },
      { name: "description", content: "Book Arooj Shahzadi for design, art, teaching, or product UI work. Available worldwide." },
      { property: "og:title", content: "Hire Me — Arooj Shahzadi" },
      { property: "og:description", content: "Open for collaborations — let's build something glowing." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/hire" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/hire" }],
  }),
  component: () => (
    <div className="pt-32">
      <CTA />
      <Services />
      <Process />
      <Contact />
    </div>
  ),
});
