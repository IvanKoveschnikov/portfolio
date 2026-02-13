import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Code, Terminal, MousePointer2, GitBranch } from 'lucide-react';
import CodeTerminal from './CodeTerminal';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0f172a] relative overflow-hidden pt-16">
      {/* Background Grid Pattern with animation */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '32px 32px'] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-20" 
        style={{ 
             backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
        }}>
      </motion.div>
      
      {/* Radial Gradient for Focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/90 pointer-events-none"></div>

      {/* Glow Effect behind Terminal */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center relative z-10 gap-12">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4" />
            <span>Mobile App Developer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Создаю <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 animate-pulse">современные</span> <br />
            мобильные приложения
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            От идеи до публикации в App Store и Google Play. 
            Чистый код, нативная производительность и продуманный UX.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="projects" smooth={true} offset={-70} duration={500} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 transition-all flex items-center justify-center cursor-pointer group relative overflow-hidden">
              <span className="relative z-10 flex items-center">Смотреть проекты <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="contact" smooth={true} offset={-70} duration={500} className="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white border border-slate-700 rounded-lg font-bold hover:bg-slate-700/50 hover:border-slate-500 transition-all flex items-center justify-center cursor-pointer">
              Связаться
            </Link>
          </motion.div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-slate-500">
             <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                   <Code className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-medium group-hover:text-emerald-300 transition-colors">Clean Code</span>
             </div>
             <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                   <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-medium group-hover:text-blue-300 transition-colors">iOS & Android</span>
             </div>
          </div>
        </div>

        {/* Right Side: Code Terminal */}
        <div className="md:w-1/2 w-full flex justify-center perspective-1000 relative">
          {/* Floating Elements around Terminal */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="absolute -top-6 -right-6 bg-[#252526] p-3 rounded-lg shadow-xl border border-slate-700 z-20 hidden md:flex items-center gap-2"
          >
             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-mono text-green-400">Build Success</span>
          </motion.div>

          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
             className="absolute -bottom-6 -left-6 bg-[#252526] p-3 rounded-lg shadow-xl border border-slate-700 z-20 hidden md:flex items-center gap-2"
          >
             <GitBranch className="w-4 h-4 text-purple-400" />
             <span className="text-xs font-mono text-purple-400">feature/new-ui</span>
          </motion.div>

          <CodeTerminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
