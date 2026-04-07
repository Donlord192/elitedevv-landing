import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  // Варианты анимации линий
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.3, duration: 0.3 },
      },
    }),
  };

  // Варианты анимации треугольника (заливка + рамка)
  const triangleVariants = {
    hidden: { pathLength: 0, opacity: 0, fillOpacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      fillOpacity: 1,
      transition: {
        pathLength: { delay: 1.2, duration: 1.5, ease: "easeInOut" },
        opacity: { delay: 1.2, duration: 0.5 },
        fillOpacity: { delay: 2.2, duration: 1.5 },
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={120}
      height={120}
      style={{ display: "block", margin: "0 auto", cursor: "default" }}
    >
      {/* Три линии */}
      {[20, 50, 80].map((y, i) => (
        <motion.line
          key={y}
          x1="10"
          y1={y}
          x2={i === 1 ? "50" : "60"} // средняя линия чуть короче
          y2={y}
          custom={i}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          stroke="white"
        />
      ))}

      {/* Треугольник */}
      <motion.path
        d="M65 20 L65 80 Q85 50 65 20 Z"
        stroke="white"
        fill="white"
        initial="hidden"
        animate="visible"
        variants={triangleVariants}
      />
    </motion.svg>
  );
}
