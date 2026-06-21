"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, User } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ProfileCard() {
  return (
    <motion.div
      className="rounded-lg shadow-sm col-span-2 row-span-2 bg-blue-600 border-0 text-white overflow-hidden relative group"
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <User className="h-12 w-12 mb-4 opacity-80" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold mb-2">PROFILE</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            MCA Student at College of Engineering Trivandrum. Passionate about
            Java, Systems Design, and Cloud Infrastructure.
          </p>
        </div>

        <div className="text-xs text-blue-200 space-y-1">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 shrink-0" />
            Kerala, India
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 shrink-0" />
            abhijithsudhakaran.in@gmail.com
          </div>
        </div>
      </div>
    </motion.div>
  );
}
