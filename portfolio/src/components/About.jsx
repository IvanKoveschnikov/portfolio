import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Обо мне</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Workspace" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Разработка мобильных приложений с фокусом на результат</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Мой главный принцип: <strong>«Нет четкого ТЗ — нет четкого результата»</strong>. Я верю, что грамотное планирование — это уже 20% успеха. 
              Помогаю не просто написать код, а найти лучшее техническое решение, предусмотреть подводные камни и выбрать оптимальный стек технологий.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Если задача новая, я глубоко погружаюсь в изучение, анализирую существующие практики и предлагаю самый надежный вариант. 
              Моя цель — чтобы ваше приложение работало стабильно и решало задачи бизнеса.
            </p>
            
            <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
               <div className="p-2 md:p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center h-full">
                  <span className="block text-2xl md:text-3xl font-bold text-blue-600">4+</span>
                  <span className="text-xs md:text-sm text-gray-500 leading-tight">Года опыта</span>
               </div>
               <div className="p-2 md:p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center h-full">
                  <span className="block text-2xl md:text-3xl font-bold text-blue-600">7+</span>
                  <span className="text-xs md:text-sm text-gray-500 leading-tight">Разработано приложений с нуля</span>
               </div>
               <div className="p-2 md:p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center h-full">
                  <span className="block text-2xl md:text-3xl font-bold text-blue-600">320+</span>
                  <span className="text-xs md:text-sm text-gray-500 leading-tight">Экранов создано</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
