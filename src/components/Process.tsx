import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const steps = [
  { n: "01", title: "Discover", desc: "We talk goals, audience, and vibe — no jargon, just clarity." },
  { n: "02", title: "Design", desc: "I sketch, iterate, and craft visuals that match your voice." },
  { n: "03", title: "Refine", desc: "Tight feedback loops until every pixel earns its place." },
  { n: "04", title: "Deliver", desc: "Polished files, source assets, and a smile on launch day." },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Process" title="How We'll Work" subtitle="A calm, transparent rhythm from kickoff to delivery." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass relative rounded-2xl p-6"
            >
              <div className="font-display text-5xl font-black text-gradient-neon opacity-40">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
