import type { ElementType } from "react";

// Simple Icons (tech/brands)
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiR,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiPytorch,
  SiExpress,
  SiPostgresql,
  SiMongodb,        // shadcn/ui
  SiFastapi,
  SiScikitlearn
} from "react-icons/si";

// Font Awesome (general tech)
import {
    FaJava,
    FaSalesforce,
    FaProjectDiagram,
    FaLink,
    FaBrain,
    FaMagic,
  FaCubes,
  FaCode,
  FaBook,
  FaDatabase,
  FaLayerGroup,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPython,
  FaAws,
  FaGithub,
  FaTheaterMasks,
  FaShapes,
  FaWrench,    // Jenkins proxy
  FaBitbucket,
  FaGitlab,
  FaChartLine,  // Matplotlib
  FaWaveSquare, // Seaborn
  FaChartBar,   // Tableau
  FaChartArea   // ggplot2
  
} from "react-icons/fa";

/** Map JSON `iconKey` -> actual React icon component */
export const iconMap: Record<string, ElementType> = {
  // Simple Icons
  SiJavascript,
  SiTypescript,
  SiPython,
  SiR,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiHuggingface,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFastapi,
  SiScikitlearn,

  // Font Awesome
  FaJava,
  FaSalesforce,
  FaProjectDiagram,
  FaBrain,
  FaCubes,
  FaLink,
  FaMagic,
  FaReact,
  FaCode,
  FaBook,
  FaDatabase,
  FaLayerGroup,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPython,
  FaAws,
  FaGithub,
  FaTheaterMasks,
  FaShapes,
  FaWrench,    // Jenkins proxy
  FaBitbucket,
  FaGitlab,
  FaChartLine,  // Matplotlib
  FaWaveSquare, // Seaborn
  FaChartBar,   // Tableau
  FaChartArea   // ggplot2
};

/** Optional: color accents per icon (Tailwind classes). Leave empty or tweak. */
export const iconColor: Record<string, string> = {
  SiPython: "text-blue-500",
  FaBrain: "text-pink-500",
  SiPytorch: "text-orange-500",
  SiJavascript: "text-yellow-400",
  SiTypescript: "text-blue-500",
  FaReact: "text-sky-500",
  SiNextdotjs: "text-white", // Changed from text-gray-900
  FaNodeJs: "text-green-600",
  SiTailwindcss: "text-cyan-500",
  FaGitAlt: "text-orange-600", // Changed from text-orange-600 (Git icon often black)
  FaDocker: "text-blue-600",
  FaAws: "text-orange-400",
  FaGithub: "text-white", // Changed from text-gray-800
  SiExpress: "text-white", // Changed from text-gray-700
  SiPostgresql: "text-blue-700",
  SiMongodb: "text-green-700",
  SiCplusplus: "text-blue-600",
  SiHtml5: "text-orange-500",
  SiCss3: "text-blue-500",
  FaMagic: "text-fuchsia-600",
  FaCubes: "text-indigo-600",
  FaLink: "text-white", // Changed from text-gray-900
  FaProjectDiagram: "text-blue-700",
  SiTensorflow: "text-orange-600",
  SiHuggingface: "text-amber-400",
  SiNumpy: "text-blue-600",
  SiPandas: "text-indigo-600",
  FaCode: "text-white", // Changed from text-gray-900
  FaBook: "text-emerald-700",
  FaDatabase: "text-amber-600",
  SiMysql: "text-sky-600",
  FaLayerGroup: "text-teal-600",
  SiIbm: "text-blue-600",
  FaShapes: "text-violet-600",   
  SiFastapi: "text-emerald-600",
  FaTheaterMasks: "text-lime-600",
  FaBitbucket: "text-blue-700", // Changed from text-blue-700 (Bitbucket often has black elements)
  FaGitlab: "text-orange-500", // Keep this - GitLab is orange
  FaWrench: "text-white", // Changed from text-slate-700
  FaSalesforce: "text-sky-500",
  SiR: "text-blue-700",
  FaJava: "text-cyan-700",
  FaChartLine: "text-blue-600",
  FaWaveSquare: "text-cyan-600",
  FaChartBar: "text-indigo-600",
  FaChartArea: "text-rose-600",
  SiScikitlearn: "text-orange-500"
};
