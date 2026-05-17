import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const timeline = [
  { year: "2021", title: "Started Teaching", desc: "Began my teaching journey, sharing knowledge with passion." },
  { year: "2022", title: "Discovered Digital Art", desc: "Fell in love with creating digital illustrations and designs." },
  { year: "2023", title: "Social Media Design", desc: "Crafted scroll-stopping visual content for brands & creators." },
  { year: "2024", title: "BSSE @ University", desc: "Started Bachelor of Software Engineering — code meets art." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="About Me" title="Where Code Meets Creativity" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 lg:p-10"
          >
            <p className="mb-6 text-lg leading-relaxed text-foreground/90">
              I'm <span className="text-gradient-neon font-semibold">Arooj Shahzadi</span> — a teacher by heart,
              an artist by soul, and a software engineer in the making. I live at the intersection of education,
              creativity, and technology.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              From designing scroll-stopping social media posts to teaching curious minds and crafting digital art
              that glows — I believe creativity is a superpower that can change how we learn, share, and connect.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Creative", "Detail-Oriented", "Curious", "Driven"].map((t) => (
                <span key={t} className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-accent">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <ul className="space-y-8">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full glass shadow-neon-purple">
                    <span className="font-display text-xs font-bold text-accent">{item.year}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
