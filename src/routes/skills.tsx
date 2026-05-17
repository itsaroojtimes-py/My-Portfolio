import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/Skills";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Arooj Shahzadi" },
      { name: "description", content: "The creative arsenal of Arooj Shahzadi: social media design, digital art, teaching, graphic design, and software engineering." },
      { property: "og:title", content: "Skills — Arooj Shahzadi" },
      { property: "og:description", content: "Design, art, teaching, and engineering — the full toolkit." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/skills" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/skills" }],
  }),
  component: () => (
    <div className="pt-32">
      <Skills />
      <Process />
      <CTA />
    </div>
  ),
});
