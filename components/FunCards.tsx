"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Clapperboard, Cat } from "lucide-react";
import { funCards } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  trophy: Trophy,
  code: Code2,
  clapperboard: Clapperboard,
  cat: Cat,
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function FunCards() {
  return (
    <>
      {funCards.map((card, i) => {
        const Icon = iconMap[card.icon] || Trophy;
        return (
          <motion.div
            key={card.title}
            className={`${card.color} rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center text-center card-glow md:col-span-3 lg:col-span-3`}
            variants={itemVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            tabIndex={0}
            aria-label={`${card.title}: ${card.subtitle}`}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" strokeWidth={1.5} />
            <h3 className="text-xs md:text-sm font-bold text-white tracking-widest uppercase mb-0.5">
              {card.title}
            </h3>
            <p className="text-white/70 text-xs">{card.subtitle}</p>
          </motion.div>
        );
      })}
    </>
  );
}
