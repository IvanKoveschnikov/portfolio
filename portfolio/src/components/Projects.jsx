import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Play, Code, Smartphone, Layout, Database } from 'lucide-react';

const projects = [
  {
    title: 'Card-QR',
    description: 'Приложение для создания динамических QR-кодов со своим дизайном и хранением необходимой информации. Включает функционал сканирования QR-кодов.',
    technologies: ['Flutter', 'BLoC', 'Firebase'],
    type: 'Mobile App',
    icon: <Smartphone className="w-5 h-5 text-blue-400" />,
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
    type: 'Social Platform',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
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
    type: 'E-commerce',
    icon: <Layout className="w-5 h-5 text-purple-400" />,
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
    <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9),rgba(15,23,42,0.9)),url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover bg-center opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-4">
            <Code className="w-4 h-4" />
            <span>git checkout projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Избранные <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Проекты</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Примеры реализации сложных мобильных интерфейсов и архитектурных решений.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-[#1e1e1e]/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
                {/* Window Controls */}
                <div className="h-8 bg-[#252526] border-b border-slate-700/50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2">
                     {project.icon}
                     <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.dart</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 lg:gap-12">
                   {/* Info Column */}
                   <div className="flex flex-col justify-center order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                           {project.type}
                         </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-md text-sm font-mono border border-blue-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>

                   {/* Gallery Column */}
                   <div className="order-1 md:order-2 relative group/gallery">
                      <div className="relative rounded-xl overflow-hidden bg-[#0f172a] aspect-video border border-slate-700 shadow-2xl">
                         {/* Emulator Frame */}
                         <div className="absolute inset-0 flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 to-slate-900">
                            <div 
                              ref={el => scrollContainerRefs.current[index] = el}
                              className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide h-full items-center pb-4 px-4"
                              style={{ scrollBehavior: 'smooth' }}
                            >
                               {project.images.map((img, i) => (
                                  <motion.img 
                                    key={i}
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    className="h-full w-auto object-contain rounded-lg shadow-xl snap-center cursor-pointer hover:scale-105 transition-transform border border-slate-700"
                                    onClick={() => setSelectedImage(img)}
                                    whileHover={{ y: -5 }}
                                  />
                               ))}
                            </div>
                         </div>
                         
                         {/* Scroll Controls */}
                         <button 
                            onClick={() => scroll(index, 'left')}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 text-white rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-blue-600"
                         >
                            <ChevronLeft className="w-5 h-5" />
                         </button>
                         <button 
                            onClick={() => scroll(index, 'right')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 text-white rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-blue-600"
                         >
                            <ChevronRight className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Full size preview" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-slate-700"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
