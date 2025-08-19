'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import data from "@/data/skillCategories.json";
import { iconMap, iconColor } from "@/utils/iconMap";

type SkillItem = { name: string; iconKey?: string; logoUrl?: string };
type Category = { title: string; items: SkillItem[] };
type SkillCats = { heading?: string; description?: string; categories: Category[] };

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] }
  }
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22, mass: 0.9 }
  }
};

export default function Skills() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: "-120px 0px" });
  const cats: SkillCats = data;

  return (
    <section className="relative bg-[#0d1117] text-[#e2e8f0] py-24" id="skills">
      {/* Top Gradient Divider */}
      <div className="absolute -top-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {cats.heading ?? "Skills"}
          </h2>
          {cats.description && (
            <p className="text-lg text-blue-100/90 max-w-2xl mx-auto font-normal">{cats.description}</p>
          )}
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {cats.categories.map((cat, idx) => (
            // NOTE: Tailwind handles hover, not framer-motion!
            <div
              key={cat.title}
              className="rounded-2xl bg-[#161b22] border border-[#23272e] shadow-lg p-6 flex flex-col gap-4 transform transition-transform duration-300 hover:scale-105 will-change-transform"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-1">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.items.map((skill) => {
                  const IconComponent = skill.iconKey ? iconMap[skill.iconKey] : null;

                  return (
                    <div key={skill.name} className="flex flex-col items-center min-w-[70px]">
                      {IconComponent ? (
                        <IconComponent
                          size={32}
                          className={`mb-2 ${iconColor[skill.iconKey ?? ''] ?? 'text-white'}`}
                          title={skill.name}
                        />
                      ) : skill.logoUrl ? (
                        <Image
                          src={skill.logoUrl}
                          alt={skill.name}
                          width={34}
                          height={34}
                          className="object-contain mb-2 rounded-lg bg-white/10"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-lg mb-2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
                          {skill.name[0]}
                        </span>
                      )}
                      <span className="text-sm text-blue-100 text-center">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}





