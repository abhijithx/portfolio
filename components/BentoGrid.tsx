"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import SocialCards from "./SocialCards";
import SkillCards from "./SkillCards";
import EducationCard from "./EducationCard";
import ActivityCard from "./ActivityCard";
import FunCards from "./FunCards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px] [grid-auto-flow:dense]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ProfileCard />
      <SocialCards />
      <EducationCard />
      <SkillCards />
      <ActivityCard />
      <FunCards />
    </motion.div>
  );
}
