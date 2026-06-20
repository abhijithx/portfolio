"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export default function EducationCard() {
  return (
    <motion.div
      className="bg-purple-600 rounded-3xl p-6 md:p-8 card-glow relative overflow-hidden md:col-span-6 lg:col-span-6 lg:row-span-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, y: -5 }}
      tabIndex={0}
      role="region"
      aria-label="Education history"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <GraduationCap className="w-7 h-7 text-white/90" strokeWidth={1.5} />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            EDUCATION
          </h2>
        </div>

        <div className="space-y-3">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="inner-block"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <h3 className="text-white font-bold text-base">{edu.degree}</h3>
              <p className="text-white/70 text-sm">{edu.institution}</p>
              <p className="text-white/50 text-xs">
                {edu.score} • {edu.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
