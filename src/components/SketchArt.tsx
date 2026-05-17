import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import s1 from "@/assets/sketch-1.jpg";
import s2 from "@/assets/sketch-2.jpg";
import s3 from "@/assets/sketch-3.jpg";
import s4 from "@/assets/sketch-4.jpg";
import s5 from "@/assets/sketch-5.jpg";
import s6 from "@/assets/sketch-6.jpg";

const sketches = [
  { img: s1, title: "Portrait Study", medium: "Graphite on Paper", year: "2024" },
  { img: s2, title: "The Eye", medium: "Hyper-realistic Pencil", year: "2024" },
  { img: s3, title: "Crimson Rose", medium: "Pencil + Color Accent", year: "2024" },
  { img: s4, title: "Artist's Hand", medium: "Graphite Study", year: "2023" },
  { img: s5, title: "Hooded Muse", medium: "Soft Pencil", year: "2024" },
  { img: s6, title: "Peacock Feather", medium: "Fine Line Graphite", year: "2023" },
];

export function SketchArt() {
  return (
    <section id="sketches" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          kicker="Pencil Art"
          title="Sketchbook"
          subtitle="A quiet corner of my practice — pencil studies, portraits, and botanical drawings."
        />

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {sketches.map((sk, i) => (
            <motion.div
              key={sk.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              data-hover
              className="group glass-strong relative inline-block w-full overflow-hidden break-inside-avoid rounded-3xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sk.img}
                  alt={sk.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{sk.medium} · {sk.year}</span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">{sk.title}</h3>
              </div>
              <div className="absolute right-3 top-3 glass flex items-center gap-1 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
                <span>✏️</span>
                <span>Pencil</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[
            { n: "80+", l: "Sketches Made" },
            { n: "12", l: "Sketchbooks Filled" },
            { n: "6+", l: "Years of Drawing" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-4xl font-black text-gradient-neon">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
