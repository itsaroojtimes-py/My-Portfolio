import { motion, useScroll, useTransform } from "framer-motion";

export function FloatingShapes() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -200]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-32 top-[8%] h-[28rem] w-[28rem] rounded-full opacity-[0.07] blur-3xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "oklch(0.78 0.07 75)" }} />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 top-[45%] h-[32rem] w-[32rem] rounded-full opacity-[0.06] blur-3xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "oklch(0.96 0.005 90)" }} />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[35%] top-[120%] h-[24rem] w-[24rem] rounded-full opacity-[0.05] blur-3xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "oklch(0.78 0.07 75)" }} />
      </motion.div>
    </div>
  );
}
