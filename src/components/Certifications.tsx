"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import certs from "@/data/certifications.json";
import siteText from "@/data/siteText.json";

type Certification = {
  id: string;
  name: string;
  issuer?: string;
  issued?: string;      // e.g., "2024-06"
  badgeUrl: string;     // local path like "/badges/xxx.png"
  verifyUrl?: string;   // optional
};

// local motion variants
const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.08 },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Certifications() {
  const items = certs as Certification[];
  if (!items?.length) return null;

  const gridRef = useRef<HTMLUListElement | null>(null);
  const inView = useInView(gridRef, { once: true, margin: "-120px 0px" });

  const heading = (siteText as any)?.certifications?.heading ?? "Certifications";
  const desc =
    (siteText as any)?.certifications?.description ??
    "Industry-recognized certifications that validate my expertise and commitment to continuous learning";

  return (
    <section id="certifications" className="relative bg-[#161b22] text-[#e2e8f0] py-20 md:py-32">
      {/* Top gradient section divider */}
      <div className="absolute -top-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {heading}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#e2e8f0]/80">{desc}</p>
        </motion.div>

        {/* Grid of badges */}
        <motion.ul
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {items.map((c) => (
            <motion.li key={c.id} variants={item} className="flex flex-col items-center text-center group">
              {/* Badge container with dark theme */}
              <div className="relative h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-lg bg-[#0d1117] border border-[#23272e] transition-all duration-300 hover:scale-105 hover:border-indigo-400/50 p-2">
              <Image
                src={c.badgeUrl}
                alt={`${c.name} badge`}
                width={96}
                height={96}
                sizes="(min-width:1024px) 128px, (min-width:768px) 112px, 96px"
                className="object-contain rounded-md w-full h-full"
                priority={false}
                unoptimized
              />
              </div>

              {/* Title + meta */}
              <h3 className="mt-3 text-sm md:text-base text-white leading-tight group-hover:text-blue-200 transition-colors duration-300">
                {c.name}
              </h3>
              <p className="text-xs md:text-sm text-[#e2e8f0]/70">
                {[c.issuer, c.issued].filter(Boolean).join(" • ")}
              </p>

              {/* Optional link */}
              {c.verifyUrl && (
                <Link
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs underline text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  aria-label={`View certificate: ${c.name}`}
                >
                  <span>View certificate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                    <path d="M5 5h6v2H7v10h10v-4h2v6H5z" />
                  </svg>
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
