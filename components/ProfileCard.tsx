"use client";

import { motion } from "framer-motion";
import { UserCircle, MapPin, Mail } from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      className="bg-blue-600 rounded-3xl p-6 md:p-8 flex flex-col justify-between card-glow relative overflow-hidden md:col-span-6 lg:col-span-4 lg:row-span-2"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      tabIndex={0}
      role="region"
      aria-label="Profile information"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <UserCircle className="w-12 h-12 text-white/90 mb-4" strokeWidth={1.5} />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
          PROFILE
        </h2>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          MCA Student
        </p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          College of Engineering Trivandrum, Kerala
        </p>
      </div>

      <div className="relative z-10 mt-6 space-y-2">
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <MapPin className="w-4 h-4" />
          <span>Kerala, India</span>
        </div>
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <Mail className="w-4 h-4" />
          <span>abhijithsudhakaran.in@gmail.com</span>
        </div>
      </div>
    </motion.div>
  );
}
