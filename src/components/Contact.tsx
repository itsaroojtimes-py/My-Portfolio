import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const socials = [
  { name: "Instagram", href: "#", icon: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6a1 1 0 110 2 1 1 0 010-2z" },
  { name: "LinkedIn", href: "#", icon: "M4.98 3.5a2.5 2.5 0 11.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7.5 0H14v1.71h.05c.5-.94 1.7-1.93 3.5-1.93 3.74 0 4.43 2.46 4.43 5.66V21h-4v-5.36c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.83V21h-4V9z" },
  { name: "Behance", href: "#", icon: "M7.5 4C9.43 4 11 5.57 11 7.5c0 1-.4 1.91-1.05 2.56C11.2 10.83 12 12.07 12 13.5 12 15.99 9.99 18 7.5 18H2V4h5.5zm-3 5h3a1.5 1.5 0 000-3h-3v3zm0 6h3a2 2 0 000-4h-3v4zM18 8c2.21 0 4 1.79 4 4 0 .35-.04.69-.13 1H15.4c.18.85.93 1.5 1.85 1.5.6 0 1.14-.27 1.5-.7l1.6 1c-.7 1.04-1.88 1.7-3.1 1.7-2.21 0-4-1.79-4-4s1.79-4 4-4zm0 1.8a1.8 1.8 0 00-1.7 1.2h3.4A1.8 1.8 0 0018 9.8zM14 5h6v1.5h-6V5z" },
  { name: "GitHub", href: "https://github.com/itsaroojtimes-py", icon: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="Contact" title="Let's Create Something Glowing" subtitle="Got a project, idea, or just want to say hi? I'd love to hear from you." />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-strong rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-accent">Email</p>
              <a href="mailto:its.aroojtimes@gmail.com" className="mt-2 block font-display text-lg break-all hover:text-accent">its.aroojtimes@gmail.com</a>
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-accent">Location</p>
              <p className="mt-2 font-display text-lg">Pakistan · Open Worldwide</p>
            </div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  data-hover
                  className="glass group flex h-12 w-12 items-center justify-center rounded-full transition-all hover:shadow-neon-pink"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-foreground transition-colors group-hover:text-accent">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass-strong lg:col-span-3 space-y-5 rounded-3xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" placeholder="you@email.com" type="email" />
            </div>
            <Input label="Subject" placeholder="What's this about?" />
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-accent">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-input/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <button
              type="submit"
              data-hover
              className="group relative w-full overflow-hidden rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-neon-purple transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-neon)", backgroundSize: "200% 200%" }}
            >
              {sent ? "✓ Message Sent" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-accent">{label}</label>
      <input
        required
        {...rest}
        className="w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
