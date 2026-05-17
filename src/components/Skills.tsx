import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const ACCENT = "oklch(0.78 0.07 75)";
const skills = [
  { name: "Social Media Design", level: 95, icon: "📱", color: ACCENT },
  { name: "Teaching & Mentoring", level: 92, icon: "🎓", color: ACCENT },
  { name: "Digital Art", level: 90, icon: "🎨", color: ACCENT },
  { name: "Graphic Design", level: 88, icon: "✨", color: ACCENT },
  { name: "Software Engineering", level: 75, icon: "💻", color: ACCENT },
  { name: "Creative Direction", level: 85, icon: "🚀", color: ACCENT },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Skills" title="My Creative Arsenal" subtitle="A blend of art, education, and engineering crafted over years of curiosity." />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              data-hover
              className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-neon-purple"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-50"
                style={{ background: skill.color }} />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="font-display text-lg font-bold">{skill.name}</h3>
                </div>
                <span className="font-display text-2xl font-black text-gradient-neon">{skill.level}%</span>
              </div>
              <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-secondary/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    background: skill.color,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
