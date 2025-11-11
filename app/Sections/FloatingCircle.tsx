"use client";

import { motion } from "framer-motion";

export default function FloatingCircle() {
  return (
    <motion.div
      className="absolute top-[100px] left-[30vw] w-[90vh] h-[90vh] rounded-full border border-gray-300 bg-[#6B21A8] blur-[42px]  shadow-2xl"
      initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [0.9, 1.1, 0.9],
        x: [0, 80, -60, 0], // subtle horizontal drift
        y: [0, -50, 60, 0], // gentle vertical drift
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
