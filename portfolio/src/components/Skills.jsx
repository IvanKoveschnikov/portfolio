import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Dart / Flutter', level: '95%' },
  { name: 'React (Web)', level: '85%' },
  { name: 'Supabase / Firebase', level: '90%' },
  { name: 'PostgreSQL', level: '80%' },
  { name: 'Управление командой', level: '90%' },
  { name: 'Составление ТЗ', level: '95%' },
  { name: 'Публикация (AppStore/GooglePlay)', level: '100%' },
  { name: 'UI/UX Проектирование', level: '85%' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Мои навыки</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
