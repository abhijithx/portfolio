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

const colorTextMap: Record<string, string> = {
  "bg-orange-500": "text-orange-200",
  "bg-amber-600": "text-amber-200",
  "bg-gray-800": "text-slate-300",
  "bg-gradient-to-br from-red-500 to-pink-600": "text-rose-200",
  "bg-gradient-to-br from-pink-500 to-purple-600": "text-purple-200",
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
        const bgColor = card.color === "bg-orange-500" ? "bg-amber-600" : card.color;
        const textColor = colorTextMap[bgColor] ?? "text-white/70";
        return (
          <motion.div
            key={card.title}
            className={`rounded-lg shadow-sm ${bgColor} border-0 text-white`}
            variants={itemVariants}
            custom={i}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="p-4 h-full flex flex-col items-center justify-center text-center">
              <Icon className="h-8 w-8 mb-2" strokeWidth={1.5} />
              <p className="text-xs font-semibold">{card.title}</p>
              <p className={`text-xs ${textColor} mt-1`}>{card.subtitle}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
