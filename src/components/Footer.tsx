export function Footer() {
  return (
    <footer className="relative border-t border-border/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Arooj Shahzadi · Designed with neon love
        </p>
        <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
          Crafted in the future
        </p>
      </div>
    </footer>
  );
}
