import React from 'react';
import { GitBranch, Wifi, CheckCircle2, Bell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800">
      {/* VS Code Status Bar Style */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#007acc] text-white text-xs font-mono select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
            <GitBranch className="w-3.5 h-3.5" />
            <span>main</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>0 errors, 0 warnings</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            <span>Ready to work</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
             <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
             <span>React</span>
          </div>
          <div className="hover:bg-white/10 p-1 rounded cursor-pointer transition-colors">
             <Bell className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-tight">Ivan Dev</span>
            <p className="text-slate-500 text-sm mt-1">
               Build with <span className="text-blue-400">React</span> & <span className="text-emerald-400">Tailwind</span>
            </p>
          </div>
          
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Ivan Koveschnikov. MIT License.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
