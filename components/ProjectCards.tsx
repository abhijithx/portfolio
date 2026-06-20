"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { projects } from "@/data/portfolio";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function ProjectCards() {
  return (
    <>
      {projects.map((project, idx) => {
        const spanClass = project.title.includes("SuSHi") ? "md:col-span-6 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
        return (
          <motion.div
            key={project.title}
            className={`${project.color} rounded-3xl p-6 md:p-8 card-glow relative overflow-hidden ${spanClass}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: idx * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{ scale: 1.02, y: -5 }}
          tabIndex={0}
          role="region"
          aria-label={`Project: ${project.title}`}
        >
          {/* External link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 z-20"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ExternalLink className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
          </a>

          {/* Decorative glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-1">
              <Terminal className="w-6 h-6 text-white/90" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                {project.title}
              </h3>
            </div>
            <p className="text-white/70 text-sm mb-4">{project.subtitle}</p>

            <ul className="space-y-1.5 mb-5">
              {project.features.map((feature, i) => (
                <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub icon */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-20 opacity-30 hover:opacity-80 transition-opacity"
            aria-label={`${project.title} GitHub repository`}
          >
            <GitHubIcon className="w-6 h-6 text-white" />
          </a>
        </motion.div>
        );
      })}
    </>
  );
}
