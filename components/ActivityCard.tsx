"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { activities } from "@/data/portfolio";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ActivityCard() {
  return (
    <motion.div
      className="rounded-lg shadow-sm col-span-2 row-span-2 bg-cyan-600 border-0 text-white overflow-hidden"
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="h-8 w-8" strokeWidth={1.5} />
          <h2 className="text-xl font-bold">ACTIVITIES</h2>
        </div>

        <div className="space-y-3 text-sm">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              className="bg-cyan-700/30 p-3 rounded"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <p className="font-semibold">{activity.role}</p>
              <p className="text-cyan-200 text-xs">{activity.organization}</p>
              <p className="text-cyan-300 text-xs">{activity.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
