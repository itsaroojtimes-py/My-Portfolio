import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const achievements = [
  { title: "BS Software Engineering", place: "University · 2024 – Present", desc: "Studying algorithms, web technologies, and system design." },
  { title: "Top Performer", place: "Creative Arts Program", desc: "Recognized for outstanding artistic projects and consistency." },
  { title: "Social Media Certified", place: "Self-taught Specialist", desc: "Mastered visual storytelling and content strategy." },
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Education" title="Learning Never Stops" />
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              data-hover
              className="glass-strong group relative overflow-hidden rounded-2xl p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-neon" />
              <div className="font-display text-5xl font-black text-gradient-neon opacity-30">0{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-bold">{a.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-accent">{a.place}</p>
              <p className="mt-4 text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
