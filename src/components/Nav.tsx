import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/about" as const, label: "About" },
  { to: "/skills" as const, label: "Skills" },
  { to: "/portfolio" as const, label: "Work" },
  { to: "/services" as const, label: "Services" },
  { to: "/education" as const, label: "Education" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all ${scrolled ? "glass-strong mx-4 sm:mx-auto" : ""}`}>
        <Link to="/" data-hover className="font-display text-lg font-black tracking-widest">
          <span className="text-gradient-neon">AROOJ</span>
          <span className="text-accent">.</span>
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                data-hover
                activeProps={{ className: "text-accent" }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            to="/hire"
            data-hover
            className="hidden rounded-full bg-gradient-neon px-5 py-2 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-neon-purple md:inline-block"
          >
            Hire Me
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          >
            <span className="text-accent">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong mx-4 mt-3 rounded-3xl p-6 lg:hidden"
        >
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-[0.2em] text-foreground hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/hire"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-gradient-neon px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
