import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Привет, я <span className="text-blue-600">Иван</span>. <br />
            Разработчик мобильных приложений.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0"
          >
            Веду проекты полного цикла: от идеи до релиза. Управляю разработкой, подбираю команду (дизайн, web) и интегрирую готовые Backend-решения.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="projects" smooth={true} offset={-70} duration={500} className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer">
              Смотреть работы <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="contact" smooth={true} offset={-70} duration={500} className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center cursor-pointer">
              Связаться со мной
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/hero.jpg" 
            alt="Иван" 
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
