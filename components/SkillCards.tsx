"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function SkillCards() {
  return (
    <>
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        const spanClass = skill.category === "TOOLS" ? "md:col-span-3 lg:col-span-4" : "md:col-span-3 lg:col-span-2";
        return (
          <motion.div
            key={skill.category}
            className={`${skill.color} rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center text-center card-glow ${spanClass}`}
            variants={itemVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            tabIndex={0}
            role="region"
            aria-label={`${skill.category}: ${skill.items}`}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" strokeWidth={1.5} />
            <h3 className="text-xs md:text-sm font-bold text-white tracking-widest uppercase mb-1">
              {skill.category}
            </h3>
            <p className="text-white/70 text-xs">{skill.items}</p>
          </motion.div>
        );
      })}
    </>
  );
}
