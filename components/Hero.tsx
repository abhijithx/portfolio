"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="text-center py-16 md:py-24 px-4 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        ABHIJITH SUDHAKARAN
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-400 font-medium tracking-wide"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Engineer | Java, Systems Design, Cloud
      </motion.p>
    </motion.section>
  );
}
