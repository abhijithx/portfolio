"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import SocialCards from "./SocialCards";
import SkillCards from "./SkillCards";
import ExperienceCard from "./ExperienceCard";
import ProjectCards from "./ProjectCards";
import EducationCard from "./EducationCard";
import ActivityCard from "./ActivityCard";
import FunCards from "./FunCards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 max-w-7xl mx-auto px-4 md:px-6 pb-12 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ProfileCard />
      <SocialCards />
      <EducationCard />
      <SkillCards />
      {/* <ProjectCards />
      <ExperienceCard /> */}
      <ActivityCard />
      <FunCards />
    </motion.div>
  );
}
