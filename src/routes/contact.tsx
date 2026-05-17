import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arooj Shahzadi" },
      { name: "description", content: "Get in touch with Arooj Shahzadi for collaborations, classes, and creative projects." },
      { property: "og:title", content: "Contact — Arooj Shahzadi" },
      { property: "og:description", content: "Let's create something glowing — get in touch." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/contact" }],
  }),
  component: () => (
    <div className="pt-32">
      <Contact />
    </div>
  ),
});
