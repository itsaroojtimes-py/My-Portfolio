import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative h-24 w-24">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{ borderTopColor: "oklch(0.78 0.07 75)", borderRightColor: "oklch(0.96 0.005 90 / 0.4)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-2 border-transparent"
                style={{ borderTopColor: "oklch(0.78 0.07 75)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-display text-2xl font-black text-gradient-neon">A</div>
            </div>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-muted-foreground">Loading</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
