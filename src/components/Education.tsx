'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import educationData from '@/data/education.json';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: {
    value: string;
    type: 'gpa' | 'percentage';
  };
}

export default function Education() {
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section
      id="education"
      ref={educationRef}
      className="relative bg-[#0d1117] text-[#e2e8f0] py-20 md:py-32"
    >
      {/* Top gradient section divider */}
      <div className="absolute -top-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#e2e8f0]/80">
            Academic foundation that drives my passion for technology and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={educationInView ? "show" : "hidden"}
          className="space-y-8"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(40,50,80,0.18)"
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-[#161b22] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#23272e] relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {education.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-100 mb-2">
                        {education.institution}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-blue-200/90">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <p className="text-sm font-mono tracking-wide">
                            {education.duration}
                          </p>
                        </div>
                        <p className="text-sm">
                          {education.location}
                        </p>
                      </div>
                    </div>
                    
                    {education.grade && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.3 + 0.5, type: "spring" }}
                        className="flex-shrink-0"
                      >
                        <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center">
                          <p className="text-xs text-blue-100 uppercase tracking-wide mb-1">
                            {education.grade.type === 'gpa' ? 'GPA' : 'Grade'}
                          </p>
                          <p className="text-xl font-bold text-white">
                            {education.grade.value}
                            {education.grade.type === 'percentage' && '%'}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
