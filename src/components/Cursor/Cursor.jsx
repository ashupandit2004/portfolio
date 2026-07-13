import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 15,
        y: position.y - 15,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="fixed top-0 left-0 z-[9999]
      w-8 h-8 rounded-full
      bg-cyan-400/20
      border border-cyan-400
      pointer-events-none
      shadow-[0_0_30px_#06b6d4]"
    />
  );
}