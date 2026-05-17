import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden rounded-[2rem] p-12 text-center lg:p-20"
        >
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-radial)" }} />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Let's collaborate</p>
            <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl lg:text-6xl">
              <span className="text-gradient-neon">Have an idea worth glowing?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
              Whether it's a brand, a class, or a one-off illustration — I'd love to build it with you.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                data-hover
                className="rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-neon-purple transition-transform hover:scale-105"
                style={{ background: "var(--gradient-neon)" }}
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                data-hover
                className="glass rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:shadow-neon-cyan"
              >
                See My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
