"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function ExperienceCard() {
  return (
    <motion.div
      className="bg-red-600 rounded-3xl p-6 md:p-8 card-glow relative overflow-hidden md:col-span-3 lg:col-span-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.01, y: -3 }}
      tabIndex={0}
      role="region"
      aria-label="Work experience"
    >
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-400/15 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-1">
          <Briefcase className="w-7 h-7 text-white/90" strokeWidth={1.5} />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            {experience.title}
          </h2>
        </div>
        <p className="text-white/80 text-sm mb-1">
          {" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            {experience.company}
          </a>
        </p>
        <p className="text-white/60 text-xs mb-5">{experience.period}</p>

        {/* Achievement blocks */}
        <div className="space-y-2 mb-6">
          {experience.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              className="inner-block text-white/90 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
            >
              {achievement}
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
