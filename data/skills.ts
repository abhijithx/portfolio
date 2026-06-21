import { Code2, Database, Cloud, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  category: string;
  items: string;
  icon: LucideIcon;
  color: string;
  textColor: string; // secondary text color for items
}

// Colors match aswinbenny.in exactly:
// Languages → teal-600, Databases → indigo-600, Cloud → yellow-600, Tools → pink-600
export const skills: Skill[] = [
  {
    category: "LANGUAGES",
    items: "JAVA • C • Go",
    icon: Code2,
    color: "bg-teal-600",
    textColor: "text-teal-200",
  },
  {
    category: "DATABASES",
    items: "PostgreSQL • MongoDB",
    icon: Database,
    color: "bg-indigo-600",
    textColor: "text-indigo-200",
  },
  {
    category: "CLOUD",
    items: "AWS • Docker",
    icon: Cloud,
    color: "bg-yellow-600",
    textColor: "text-yellow-200",
  },
  {
    category: "TOOLS",
    items: "Git • Linux",
    icon: Wrench,
    color: "bg-pink-600",
    textColor: "text-pink-200",
  },
];
