import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Tailwind', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 60 },
  { name: 'Node.js', level: 60 },
  { name: 'MongoDB', level: 65 },
  { name: 'Office Package', level: 80 },
];

const SkillsGraph = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="p-6" ref={ref}>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="text-lg font-medium">{skill.name}</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-4 lg:h-5">
            <motion.div
              className="bg-blue-600 h-2.5 md:h-4 lg:h-5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: inView ? `${skill.level}%` : '0%' }}
              transition={{ duration: 4 }}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGraph;
