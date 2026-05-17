import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] rounded-full border transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          transform: "translate(-50%, -50%)",
          borderColor: "oklch(0.96 0.005 90 / 0.4)",
        }}
      />
      <div
        className="pointer-events-none fixed z-[100] h-1.5 w-1.5 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          background: "oklch(0.78 0.07 75)",
        }}
      />
    </>
  );
}
