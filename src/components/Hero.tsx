import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import avatar from "@/assets/avatar.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 15 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <motion.div style={{ y: gridY }} className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-radial)" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-neon-cyan" />
            Available for collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block text-foreground/90">Hi, I'm</span>
            <span className="block text-gradient-neon text-glow-purple">Arooj Shahzadi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg font-light tracking-wide text-muted-foreground sm:text-xl"
          >
            Teacher <span className="text-accent">|</span> Social Media Expert{" "}
            <span className="text-accent">|</span> Artist <span className="text-accent">|</span> BSSE Student
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#portfolio"
              data-hover
              className="group relative overflow-hidden rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-neon-purple transition-transform hover:scale-105"
              style={{ background: "var(--gradient-neon)", backgroundSize: "200% 200%" }}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-cyber opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
            <a
              href="https://github.com/itsaroojtimes-py"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="glass flex items-center gap-2 rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:shadow-neon-pink"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="#contact"
              data-hover
              className="glass rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:shadow-neon-cyan"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
          >
            {[
              { n: "50+", l: "Projects" },
              { n: "3+", l: "Years" },
              { n: "100%", l: "Passion" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-neon">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: avatarY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md perspective-1000"
        >
          <motion.div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative aspect-[4/5] w-full"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-50 blur-3xl"
                style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.78 0.07 75 / 0.4), transparent 70%)", transform: "translateZ(-60px)" }}
              />
              <div
                className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-foreground/10"
                style={{ transform: "translateZ(40px)", boxShadow: "0 40px 80px -20px oklch(0 0 0 / 0.6)" }}
              >
                <img
                  src={avatar}
                  alt="Arooj Shahzadi"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 40%, oklch(0.96 0.005 90 / 0.18) 50%, transparent 60%)",
                  }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />
              </div>

              {/* floating chips */}
              <motion.div
                className="glass-strong absolute -left-4 top-8 rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.25em]"
                style={{ transform: "translateZ(80px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-accent">BSSE</div>
                <div className="text-muted-foreground">Engineering</div>
              </motion.div>
              <motion.div
                className="glass-strong absolute -right-6 top-1/3 rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.25em]"
                style={{ transform: "translateZ(100px)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-accent">Artist</div>
                <div className="text-muted-foreground">Digital Craft</div>
              </motion.div>
              <motion.div
                className="glass-strong absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.25em]"
                style={{ transform: "translateZ(70px)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-accent">Teacher</div>
                <div className="text-muted-foreground">Mentor</div>
              </motion.div>

              {/* corner accents */}
              <div className="absolute -left-2 -top-2 h-8 w-8 border-l border-t border-accent/60" style={{ transform: "translateZ(50px)" }} />
              <div className="absolute -right-2 -top-2 h-8 w-8 border-r border-t border-accent/60" style={{ transform: "translateZ(50px)" }} />
              <div className="absolute -left-2 -bottom-2 h-8 w-8 border-l border-b border-accent/60" style={{ transform: "translateZ(50px)" }} />
              <div className="absolute -right-2 -bottom-2 h-8 w-8 border-r border-b border-accent/60" style={{ transform: "translateZ(50px)" }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <motion.div
            className="h-10 w-[1px] bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
