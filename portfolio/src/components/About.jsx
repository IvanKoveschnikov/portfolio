import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Layout, Database, Terminal, GitBranch, Layers, Cpu, CheckCircle2 } from 'lucide-react';

const About = () => {
  const techStack = [
    { 
      category: "Mobile Core", 
      icon: <Smartphone className="w-5 h-5 text-blue-400"/>,
      skills: ["Flutter", "Dart", "Swift (iOS)", "Kotlin (Android)", "React Native"] 
    },
    { 
      category: "Backend & Cloud", 
      icon: <Database className="w-5 h-5 text-emerald-400"/>,
      skills: ["Firebase", "Supabase", "Node.js", "REST API", "GraphQL"] 
    },
    { 
      category: "Tools & DevOps", 
      icon: <Terminal className="w-5 h-5 text-purple-400"/>,
      skills: ["Git", "CI/CD", "Figma", "Jira", "Postman", "XCode", "Android Studio"] 
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.95),rgba(15,23,42,0.95)),url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
             <Code2 className="w-4 h-4" /> 
             <span>class AboutMe extends Developer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Больше, чем просто <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">код</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
               <Layers className="w-6 h-6 text-indigo-400" />
               Технический стек
            </h3>
            
            <div className="space-y-6">
               {techStack.map((group, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="bg-[#1e293b]/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-700/50 pb-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-white">
                           {group.icon}
                        </div>
                        <h4 className="font-bold text-slate-200">{group.category}</h4>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, i) => (
                           <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm font-mono rounded-md border border-slate-700 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default">
                              {skill}
                           </span>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
            
            {/* Quick Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
               <div className="text-center p-4 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400">4+</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">YEARS_EXP</div>
               </div>
               <div className="text-center p-4 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-indigo-400">7+</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">PROJECTS</div>
               </div>
               <div className="text-center p-4 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400">320+</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">SCREENS</div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
             <div className="bg-[#1e293b]/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-2">
                   <span className="text-blue-500">const</span> <span className="text-yellow-400">philosophy</span> <span className="text-white">=</span>
                </h3>
                
                <div className="space-y-6 text-slate-300 leading-relaxed relative z-10 text-lg">
                   <p>
                      Мой подход к работе строится на трех китах: <strong className="text-blue-400">стабильность</strong>, <strong className="text-indigo-400">скорость</strong>, <strong className="text-purple-400">масштабируемость</strong>. 
                      Я создаю приложения, которые не просто "работают", а приносят удовольствие пользователям и прибыль бизнесу.
                   </p>
                   <p>
                      В отличие от многих разработчиков, я уделяю огромное внимание этапу <strong className="text-emerald-400">проектирования</strong>. 
                      Прежде чем написать первую строчку кода, я продумываю архитектуру данных, навигацию и возможные краевые случаи.
                   </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400 border border-slate-700">
                      <Cpu className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-lg">Инженерное мышление</h4>
                      <p className="text-sm text-slate-400 mt-1">
                         Я всегда задаю вопрос "Зачем?" перед тем, как выбрать технологию. 
                         Если нативное решение лучше кроссплатформенного для вашей задачи — я скажу об этом честно.
                      </p>
                   </div>
                </div>
             </div>

             <div className="bg-[#1e293b] p-6 rounded-xl text-slate-200 font-mono text-sm border border-slate-700 shadow-xl relative mt-8">
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 mb-3 font-bold">
                   <span className="text-emerald-400">➜</span>
                   <span className="text-blue-400">~</span>
                   <span className="text-yellow-300">git commit -m "My Principle"</span>
                </div>
                <p className="opacity-90 text-slate-300 pl-4 border-l-2 border-emerald-500/50 py-1 italic">
                   "Важен конечный продукт, а не способ его написания. Я использую современные инструменты разработки, чтобы превращать идеи в приложения в 3 раза быстрее, чем при классическом подходе."
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
