import {
  Code2,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  category: string;
  items: string;
  icon: LucideIcon;
  color: string;
}

export const skills: Skill[] = [
  {
    category: "LANGUAGES",
    items: "JAVA • C • Go",
    icon: Code2,
    color: "bg-blue-600",
  },
  {
    category: "DATABASES",
    items: "PostgreSQL • MongoDB",
    icon: Database,
    color: "bg-indigo-600",
  },
  {
    category: "CLOUD",
    items: "AWS • Docker",
    icon: Cloud,
    color: "bg-yellow-600",
  },
  {
    category: "TOOLS",
    items: "Git • Linux",
    icon: Wrench,
    color: "bg-teal-600",
  },
];
