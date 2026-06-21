"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function EducationCard() {
  return (
    <motion.div
      className="rounded-lg shadow-sm col-span-2 md:col-span-3 row-span-2 bg-violet-600 border-0 text-white overflow-hidden"
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="h-8 w-8" strokeWidth={1.5} />
          <h2 className="text-xl font-bold">EDUCATION</h2>
        </div>

        <div className="space-y-3">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="bg-violet-700/30 p-3 rounded"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <p className="font-semibold text-sm">{edu.degree}</p>
              <p className="text-violet-200 text-xs">{edu.institution}</p>
              <p className="text-violet-300 text-xs">
                {edu.score} • {edu.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
