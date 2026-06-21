"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="mb-8 text-center py-8 md:py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
          ABHIJITH
        </span>{" "}
        <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-purple-400 bg-clip-text text-transparent">
          SUDHAKARAN
        </span>
      </motion.h1>

      <motion.p
        className="mt-3 text-base md:text-xl text-gray-400 font-medium tracking-wide"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Engineer · Java, Systems Design, Cloud
      </motion.p>

      {/* Animated accent line */}
      <motion.div
        className="mt-5 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      />
    </motion.div>
  );
}
