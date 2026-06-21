"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.07 * i,
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function SkillCards() {
  return (
    <>
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.category}
            className={`rounded-lg shadow-sm ${skill.color} border-0 text-white`}
            variants={itemVariants}
            custom={i}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="p-4 h-full flex flex-col items-center justify-center text-center">
              <Icon className="h-8 w-8 mb-2" strokeWidth={1.5} />
              <p className="text-xs font-semibold">{skill.category}</p>
              <p className={`text-xs ${skill.textColor} mt-1`}>{skill.items}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
