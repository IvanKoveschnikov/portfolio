import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout, Smartphone, GitBranch, Globe, Users, FileText, CheckCircle2, Star, Download } from 'lucide-react';

const skills = [
  { 
    name: 'Flutter & Dart', 
    version: '3.19.0',
    description: 'Cross-platform mobile development kit.',
    icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    level: 95,
    downloads: '10M+',
    author: 'Google'
  },
  { 
    name: 'React.js', 
    version: '18.2.0',
    description: 'JavaScript library for building user interfaces.',
    icon: <Globe className="w-10 h-10 text-cyan-400" />,
    level: 85,
    downloads: '50M+',
    author: 'Meta'
  },
  { 
    name: 'Supabase / Firebase', 
    version: '2.39.0',
    description: 'Backend-as-a-Service platforms.',
    icon: <Database className="w-10 h-10 text-emerald-400" />,
    level: 90,
    downloads: '5M+',
    author: 'Community'
  },
  { 
    name: 'UI/UX Design', 
    version: 'Figma',
    description: 'User interface and experience design patterns.',
    icon: <Layout className="w-10 h-10 text-purple-400" />,
    level: 85,
    downloads: '2M+',
    author: 'Ivan Dev'
  },
  { 
    name: 'Team Management', 
    version: 'Agile/Scrum',
    description: 'Leading development teams and sprint planning.',
    icon: <Users className="w-10 h-10 text-orange-400" />,
    level: 90,
    downloads: '100+',
    author: 'Soft Skills'
  },
  { 
    name: 'App Publishing', 
    version: 'Store Deploy',
    description: 'AppStore, Google Play, RuStore deployment.',
    icon: <Download className="w-10 h-10 text-red-400" />,
    level: 100,
    downloads: '50+',
    author: 'DevOps'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0f172a] relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.95),rgba(15,23,42,0.95)),url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-mono mb-4">
            <Cpu className="w-4 h-4" />
            <span>extensions --list</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Установленные <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Навыки</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Технический стек и инструменты, готовые к использованию в вашем проекте.
          </p>
        </motion.div>

        {/* VS Code Extensions List Style */}
        <div className="bg-[#1e1e1e] rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
           <div className="bg-[#252526] px-4 py-3 border-b border-slate-700 flex items-center gap-4">
              <div className="text-xs text-slate-400 font-mono">INSTALLED</div>
              <div className="flex-1"></div>
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                 <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              </div>
           </div>

           <div className="divide-y divide-slate-700/50">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 hover:bg-[#2a2d2e] transition-colors group flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                   {/* Icon */}
                   <div className="flex-shrink-0 p-2 bg-slate-800 rounded-lg">
                      {skill.icon}
                   </div>

                   {/* Content */}
                   <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                         <h3 className="text-white font-bold text-lg truncate">{skill.name}</h3>
                         <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full font-mono border border-blue-500/30">
                            v{skill.version}
                         </span>
                      </div>
                      <p className="text-slate-400 text-sm truncate mb-2 sm:mb-0">
                         {skill.description} <span className="text-slate-600 mx-2">•</span> <span className="text-slate-500">{skill.author}</span>
                      </p>
                   </div>

                   {/* Stats & Actions */}
                   <div className="flex items-center gap-6 flex-shrink-0 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                         <Download className="w-4 h-4" />
                         <span>{skill.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm">
                         <Star className="w-4 h-4 fill-current" />
                         <span>{(skill.level / 20).toFixed(1)}</span>
                      </div>
                      <button className="px-3 py-1.5 bg-[#37373d] text-white text-sm rounded hover:bg-[#45454e] transition-colors border border-slate-600 font-medium">
                         Installed
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
