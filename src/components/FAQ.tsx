import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  { q: "What's your turnaround time?", a: "Most social posts ship within 3–5 days. Larger projects are scoped on a call." },
  { q: "Do you work with international clients?", a: "Absolutely — I work async with clients across time zones." },
  { q: "Can you teach beginners?", a: "Yes! I love starting from zero. My students range from kids to working adults." },
  { q: "What tools do you use?", a: "Figma, Photoshop, Procreate, and a sprinkle of code when needed." },
  { q: "Do you take on long-term retainers?", a: "Yes — monthly retainers are available for brands needing consistent content." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="FAQ" title="Good Questions" subtitle="Things people often ask before reaching out." />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-strong overflow-hidden rounded-2xl"
              >
                <button
                  data-hover
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold">{f.q}</span>
                  <span className={`ml-4 text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
