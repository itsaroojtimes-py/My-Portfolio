import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "./SectionTitle";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

const works = [
  { img: w1, title: "Neon Social Series", category: "Social Media", tag: "Instagram Campaign" },
  { img: w2, title: "Flow State", category: "Digital Art", tag: "Original Artwork" },
  { img: w3, title: "Future Classroom", category: "Teaching", tag: "EdTech Project" },
  { img: w4, title: "Brand Identity", category: "Graphic Design", tag: "Visual System" },
];

function TiltCard({ work, i }: { work: (typeof works)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], ["12deg", "-12deg"]), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], ["-12deg", "12deg"]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        data-hover
        className="group glass-strong relative cursor-none overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={work.img}
            alt={work.title}
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "linear-gradient(135deg, oklch(0.78 0.07 75 / 0.18), transparent)" }} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6" style={{ transform: "translateZ(40px)" }}>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">{work.category}</span>
          <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{work.title}</h3>
          <span className="mt-2 inline-block text-xs text-muted-foreground">{work.tag}</span>
        </div>
        <div className="absolute right-4 top-4 glass flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100">
          <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle kicker="Portfolio" title="Selected Works" subtitle="A glimpse into the worlds I create — from posts to paintings to lessons." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
          {works.map((w, i) => (
            <TiltCard key={w.title} work={w} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
