"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { activities } from "@/data/portfolio";

export default function ActivityCard() {
  return (
    <motion.div
      className="bg-cyan-600 rounded-3xl p-6 md:p-8 card-glow relative overflow-hidden md:col-span-3 lg:col-span-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, y: -5 }}
      tabIndex={0}
      role="region"
      aria-label="Activities and community involvement"
    >
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-300/15 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <Heart className="w-7 h-7 text-white/90" strokeWidth={1.5} />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            ACTIVITIES
          </h2>
        </div>

        <div className="space-y-3">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              className="inner-block"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <h3 className="text-white font-bold text-base">{activity.role}</h3>
              <p className="text-white/70 text-sm">{activity.organization}</p>
              <p className="text-white/50 text-xs">{activity.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
