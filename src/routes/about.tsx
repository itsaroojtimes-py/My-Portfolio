import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arooj Shahzadi" },
      { name: "description", content: "Meet Arooj Shahzadi — a teacher, digital artist, social media designer, and BSSE student weaving art with engineering." },
      { property: "og:title", content: "About — Arooj Shahzadi" },
      { property: "og:description", content: "Meet Arooj Shahzadi — a teacher, artist, and software engineering student." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/about" }],
  }),
  component: () => (
    <div className="pt-32">
      <About />
      <Stats />
      <CTA />
    </div>
  ),
});
