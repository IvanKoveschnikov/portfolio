import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code, Terminal } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '~/home', to: 'home' },
    { name: './about', to: 'about' },
    { name: './skills', to: 'skills' },
    { name: './projects', to: 'projects' },
    { name: './pricing', to: 'pricing' },
    { name: './contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-lg border-b border-slate-700/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo(0,0)}
          >
            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
               <Terminal className="h-6 w-6 text-blue-400" />
            </div>
            <span className="ml-3 text-xl font-bold text-white font-mono">
              <span className="text-blue-400">&lt;</span>
              DevPortfolio
              <span className="text-blue-400">/&gt;</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-4 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-all font-mono text-sm"
                activeClass="!text-blue-400 !bg-blue-500/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-3 text-base font-mono font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
                activeClass="!text-blue-400 !bg-blue-500/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
