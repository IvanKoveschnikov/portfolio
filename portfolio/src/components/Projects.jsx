import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Play, Code, Smartphone, Layout, Database, Globe, Monitor } from 'lucide-react';

const projects = [
  // ============ MOBILE APPS ============
  {
    title: 'Card-QR',
    description: 'Приложение для создания динамических QR-кодов со своим дизайном и хранением необходимой информации. Включает функционал сканирования QR-кодов.',
    technologies: ['Flutter', 'BLoC', 'Firebase'],
    type: 'Mobile App',
    category: 'mobile',
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
    category: 'mobile',
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
    category: 'mobile',
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
  },
  {
    title: 'Nutri Scan AI',
    description: 'Приложение для сканирования еды и распознавания ее с помощью ИИ и занесения в рацион питания, с разбивкой на состав: белки, жиры и углеводы.',
    technologies: ['Flutter', 'Supabase', 'AI'],
    type: 'Mobile App',
    category: 'mobile',
    icon: <Smartphone className="w-5 h-5 text-rose-400" />,
    images: [
      './project4_1.jpeg'
    ],
    demoLink: '#',
    codeLink: '#'
  },
  // ============ WEB PROJECTS ============
  {
    title: 'SafeVPN',
    description: 'Лендинг для VPN-сервиса нового поколения. Современный тёмный дизайн с неоновыми акцентами, страницы тарифов, технологий и поддержки.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    type: 'Landing Page',
    category: 'web',
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    images: [
      './project5_1.jpg',
      './project5_2.jpg',
      './project5_3.jpg',
      './project5_4.jpg',
      './project5_5.jpg'
    ],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Янгуан',
    description: 'Сайт салона красоты и массажа. Элегантный дизайн с каталогом услуг, профилями мастеров, онлайн-записью и интеграцией с Яндекс Картами.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    type: 'Business Website',
    category: 'web',
    icon: <Monitor className="w-5 h-5 text-amber-400" />,
    images: [
      './project6.png'
    ],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'СтройМастер',
    description: 'Корпоративный сайт строительной компании. Каталог услуг, портфолио объектов, форма обратного звонка и калькулятор стоимости строительства.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    type: 'Corporate Website',
    category: 'web',
    icon: <Monitor className="w-5 h-5 text-yellow-400" />,
    images: [
      './project7_1.jpg',
      './project7_2.jpg',
      './project7_3.jpg',
      './project7_4.jpg',
      './project7_5.jpg',
      './project7_6.jpg'
    ],
    demoLink: '#',
    codeLink: '#'
  }
];

const categories = [
  { id: 'all', label: 'Все проекты', icon: <Code className="w-4 h-4" /> },
  { id: 'mobile', label: 'Мобильные', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'web', label: 'Веб-сайты', icon: <Globe className="w-4 h-4" /> },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRefs = useRef([]);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const scroll = (index, direction) => {
    const container = scrollContainerRefs.current[index];
    if (container) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getFileExtension = (category) => {
    return category === 'web' ? '.html' : '.dart';
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
            Мобильные приложения и веб-сайты — от сложных архитектурных решений до продающих лендингов.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }
                `}
              >
                {cat.icon}
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm text-slate-500 font-mono">
            // показано проектов: {filteredProjects.length} из {projects.length}
          </span>
        </motion.div>

        <div className="space-y-24">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                layout
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
                       <span>{project.title.toLowerCase().replace(/\s+/g, '-')}{getFileExtension(project.category)}</span>
                    </div>
                    {/* Category badge in window bar */}
                    <div className="ml-auto">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        project.category === 'web' 
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' 
                          : 'bg-violet-500/15 text-violet-400 border border-violet-500/30'
                      }`}>
                        {project.category === 'web' ? '🌐 Web' : '📱 Mobile'}
                      </span>
                    </div>
                  </div>

                  <div className={`p-4 sm:p-6 md:p-8 grid gap-6 lg:gap-12 ${
                    project.category === 'web' ? 'md:grid-cols-1 lg:grid-cols-5' : 'md:grid-cols-2'
                  }`}>
                     {/* Info Column */}
                     <div className={`flex flex-col justify-center ${
                       project.category === 'web' ? 'order-2 lg:order-1 lg:col-span-2' : 'order-2 md:order-1'
                     }`}>
                        <div className="flex items-center gap-3 mb-4">
                           <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                             {project.type}
                           </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-300 rounded-md text-xs sm:text-sm font-mono border border-blue-500/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                     </div>

                     {/* Gallery Column */}
                     <div className={`relative group/gallery ${
                       project.category === 'web' ? 'order-1 lg:order-2 lg:col-span-3' : 'order-1 md:order-2'
                     }`}>
                        <div className={`relative rounded-xl overflow-hidden bg-[#0f172a] border border-slate-700 shadow-2xl ${
                          project.category === 'web' ? 'aspect-[16/10]' : 'aspect-video'
                        }`}>
                           {/* Gallery Background */}
                           <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 to-slate-900">
                              <div 
                                ref={el => scrollContainerRefs.current[projects.indexOf(project)] = el}
                                className={`flex overflow-x-auto gap-3 sm:gap-4 snap-x snap-mandatory scrollbar-hide h-full items-center pb-2 sm:pb-4 px-2 sm:px-4 ${
                                  project.category === 'web' ? 'web-gallery' : ''
                                }`}
                                style={{ scrollBehavior: 'smooth' }}
                              >
                                 {project.images.map((img, i) => (
                                    <motion.img 
                                      key={i}
                                      src={img}
                                      alt={`${project.title} screenshot ${i + 1}`}
                                      className={`object-contain rounded-lg shadow-xl snap-center cursor-pointer hover:scale-105 transition-transform border border-slate-700 ${
                                        project.category === 'web' 
                                          ? 'h-full w-auto min-w-[70%] sm:min-w-[60%]' 
                                          : 'h-full w-auto'
                                      }`}
                                      onClick={() => setSelectedImage(img)}
                                      whileHover={{ y: -5 }}
                                    />
                                 ))}
                              </div>
                           </div>
                           
                           {/* Scroll Controls */}
                           {project.images.length > 1 && (
                             <>
                               <button 
                                  onClick={() => scroll(projects.indexOf(project), 'left')}
                                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-slate-900/80 text-white rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-blue-600 z-10"
                               >
                                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                               </button>
                               <button 
                                  onClick={() => scroll(projects.indexOf(project), 'right')}
                                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-slate-900/80 text-white rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-blue-600 z-10"
                               >
                                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                               </button>
                             </>
                           )}

                           {/* Image counter for multi-image galleries */}
                           {project.images.length > 1 && (
                             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                               {project.images.map((_, i) => (
                                 <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                               ))}
                             </div>
                           )}
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
