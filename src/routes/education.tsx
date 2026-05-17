import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/Education";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Arooj Shahzadi" },
      { name: "description", content: "Academic journey and achievements of Arooj Shahzadi, currently pursuing a Bachelor of Software Engineering." },
      { property: "og:title", content: "Education — Arooj Shahzadi" },
      { property: "og:description", content: "BSSE journey and creative achievements." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/education" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/education" }],
  }),
  component: () => (
    <div className="pt-32">
      <Education />
      <CTA />
    </div>
  ),
});
