import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const services = [
  {
    icon: "🎨",
    title: "Social Media Design",
    desc: "Scroll-stopping posts, reels covers, and brand kits that turn feeds into experiences.",
    items: ["Instagram Feeds", "Reels Covers", "Brand Templates"],
  },
  {
    icon: "🎓",
    title: "Teaching & Mentoring",
    desc: "One-on-one and group sessions for students stepping into design, art, and tech.",
    items: ["Design Bootcamps", "Art Mentorship", "Career Coaching"],
  },
  {
    icon: "🖌️",
    title: "Digital Art Commissions",
    desc: "Custom illustrations, portraits, and concept pieces with a luminous editorial touch.",
    items: ["Portraits", "Concept Art", "Editorial Pieces"],
  },
  {
    icon: "💻",
    title: "Web & Product UI",
    desc: "From a BSSE student's lens — interfaces that feel artful and engineered.",
    items: ["Landing Pages", "UI Kits", "Prototypes"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker="Services"
          title="What I Offer"
          subtitle="A studio of one — wearing four hats so your project gets every ounce of craft."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              data-hover
              className="glass-strong group relative overflow-hidden rounded-3xl p-8"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "oklch(0.78 0.07 75)" }} />
              <div className="relative">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
