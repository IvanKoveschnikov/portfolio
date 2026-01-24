import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    title: 'Card-QR',
    description: 'Приложение для создания динамических QR-кодов со своим дизайном и хранением необходимой информации. Включает функционал сканирования QR-кодов.',
    technologies: ['Flutter', 'BLoC', 'Firebase'],
    images: [
      './project1_1.png',
      './project1_2.png',
      './project1_3.png',
      './project1_4.png',
      './project1_5.png',
      './project1_6.png',
      './project1_7.png'
    ],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Yes or No',
    description: 'Социальная сеть для голосования и принятия решений. Пользователи могут создавать опросы и голосовать в реальном времени.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions', 'Realtime'],
    images: [
      './project2_1.png',
      './project2_2.png',
      './project2_3.png',
      './project2_4.png',
      './project2_5.png',
      './project2_6.png',
      './project2_7.png',
      './project2_8.png',
      './project2_9.png'
    ],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Пиццерия',
    description: 'Приложение пиццерии для заказа еды. Удобный интерфейс выбора блюд, корзина и оформление доставки.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions', 'Realtime'],
    images: [
      './project3_1.png',
      './project3_2.png',
      './project3_3.png',
      './project3_4.png',
      './project3_5.png'
    ],
    demoLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRefs = useRef([]);

  const scroll = (index, direction) => {
    const container = scrollContainerRefs.current[index];
    if (container) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Мои Проекты</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600">Примеры моих работ в мобильной разработке.</p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-gray-100"
            >
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex gap-4">
                    {/* Ссылки временно скрыты, если их нет, или можно оставить как заглушки */}
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Горизонтальный скролл скриншотов */}
              <div className="relative group">
                {/* Кнопка влево */}
                <button 
                  onClick={() => scroll(index, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden md:block -ml-4"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <div 
                  ref={el => scrollContainerRefs.current[index] = el}
                  className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                >
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="flex-none w-[260px] md:w-[320px] snap-center rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${i + 1}`} 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Кнопка вправо */}
                <button 
                  onClick={() => scroll(index, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden md:block -mr-4"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox (Модальное окно для просмотра фото) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Full screen view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
