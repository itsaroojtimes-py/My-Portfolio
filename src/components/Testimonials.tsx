import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const quotes = [
  {
    quote: "Arooj turned our boring feed into something people actually screenshot. Magical eye.",
    name: "Sana M.",
    role: "Founder, Bloom Studio",
  },
  {
    quote: "Patient, kind, and incredibly knowledgeable. My daughter loves her art classes.",
    name: "Hira K.",
    role: "Parent",
  },
  {
    quote: "Designs that feel like premium brands. Worth every minute.",
    name: "Daniyal R.",
    role: "Indie Founder",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Testimonials" title="Kind Words" subtitle="A few notes from the people I've had the joy of working with." />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-strong relative rounded-3xl p-8"
            >
              <div className="font-display text-6xl leading-none text-accent/60">"</div>
              <blockquote className="-mt-4 text-base leading-relaxed text-foreground/90">{q.quote}</blockquote>
              <figcaption className="mt-6 border-t border-border/50 pt-4">
                <div className="font-display font-bold">{q.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{q.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
