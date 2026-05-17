import { motion } from "framer-motion";

export function SectionTitle({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-accent">
        <span className="h-px w-8 bg-accent" />
        {kicker}
        <span className="h-px w-8 bg-accent" />
      </div>
      <h2 className="font-display text-4xl font-black sm:text-5xl lg:text-6xl">
        <span className="text-gradient-neon">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
