'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import experienceData from '@/data/experience.json';

interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  tenure: string;
  responsibilities: string[];
}

export default function Experience() {
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    show: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    show: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.3
      }
    }
  };

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="relative bg-[#0d1117] text-[#e2e8f0] py-20 md:py-32"
    >
      {/* Top gradient section divider */}
      <div className="absolute -top-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#e2e8f0]/80">
            My professional journey and the experiences that shaped my expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={experienceInView ? "show" : "hidden"}
          className="relative"
        >
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-white/10">
            <motion.div 
              variants={timelineVariants}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"
              style={{ transformOrigin: "top" }}
            />
          </div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Animated Timeline Dot */}
              <motion.div 
                variants={dotVariants}
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-[#0d1117] z-10 shadow-lg"
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
              </motion.div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(40,50,80,0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-[#161b22] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#23272e] relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 opacity-50"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-100 mb-2">
                        {experience.organization}
                      </h4>
                      <p className="text-sm text-blue-200/80 font-mono tracking-wide bg-white/5 px-2 py-1 rounded inline-block">
                        {experience.tenure}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.2 + 1.2 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                          <p className="text-[#e2e8f0]/90 text-sm leading-relaxed">
                            {responsibility}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* Connection line to timeline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.4 + 1.5, duration: 0.5 }}
                className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 ${
                  index % 2 === 0 
                    ? 'left-1/2 ml-2' 
                    : 'right-1/2 mr-2'
                }`}
                style={{ transformOrigin: index % 2 === 0 ? 'left' : 'right' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
