import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { SketchArt } from "@/components/SketchArt";
import { Testimonials } from "@/components/Testimonials";
import { Education } from "@/components/Education";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arooj Shahzadi — Teacher · Artist · Designer · BSSE Student" },
      { name: "description", content: "Futuristic luxury portfolio of Arooj Shahzadi — teacher, social media designer, digital artist, and Software Engineering student." },
      { property: "og:title", content: "Arooj Shahzadi — Creative Tech Portfolio" },
      { property: "og:description", content: "A luxe portfolio at the intersection of art, education, and engineering." },
      { property: "og:url", content: "https://aroojshahzadi.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://aroojshahzadi.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Skills />
      <Process />
      <Portfolio />
      <SketchArt />
      <Testimonials />
      <Education />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
