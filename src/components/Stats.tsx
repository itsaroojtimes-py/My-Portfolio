import { motion } from "framer-motion";

const stats = [
  { n: "50+", l: "Projects Delivered" },
  { n: "120+", l: "Students Taught" },
  { n: "30+", l: "Brands Served" },
  { n: "3+", l: "Years Crafting" },
];

export function Stats() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong grid grid-cols-2 gap-6 rounded-3xl p-8 sm:p-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-black text-gradient-neon sm:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
