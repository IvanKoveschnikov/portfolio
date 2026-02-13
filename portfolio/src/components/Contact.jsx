import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle, Eye, EyeOff, Terminal, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(null);

  const phoneNumber = "+79507777510";
  const email = "ivan.kove776@gmail.com";
  const telegram = "@koveschnikov";
  const vkLink = "https://vk.com/harmful_pie";

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-4">
            <Terminal className="w-4 h-4" />
            <span>./contact_me.sh</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Связаться <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">со мной</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Открыт для предложений и интересных проектов.
          </p>
        </motion.div>

        <div className="bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-slate-400 text-xs font-mono">bash — 80x24</div>
          </div>

          <div className="p-6 md:p-8 font-mono space-y-8">
            {/* Command Input */}
            <div className="flex items-center gap-2 text-lg">
              <span className="text-emerald-400">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-300">cat contacts.json</span>
            </div>

            {/* JSON Output */}
            <div className="text-slate-300 space-y-4">
              <div>
                <span className="text-yellow-400">{`{`}</span>
              </div>
              
              {/* Email Block */}
              <div className="pl-4 md:pl-8 group">
                <span className="text-sky-300">"email"</span>: <span className="text-white">
                  {showEmail ? `"${email}"` : '"**********************"'}
                </span>
                <span className="text-slate-500">,</span>
                
                <div className="inline-flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button 
                     onClick={() => setShowEmail(!showEmail)}
                     className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                     title={showEmail ? "Скрыть" : "Показать"}
                   >
                     {showEmail ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                   </button>
                   {showEmail && (
                     <button 
                       onClick={() => copyToClipboard(email, 'email')}
                       className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                       title="Копировать"
                     >
                       {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                     </button>
                   )}
                </div>
              </div>

              {/* Phone Block */}
              <div className="pl-4 md:pl-8 group">
                <span className="text-sky-300">"phone"</span>: <span className="text-emerald-300">
                  {showPhone ? `"${phoneNumber}"` : '"***********"'}
                </span>
                <span className="text-slate-500">,</span>

                <div className="inline-flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button 
                     onClick={() => setShowPhone(!showPhone)}
                     className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                     title={showPhone ? "Скрыть" : "Показать"}
                   >
                     {showPhone ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                   </button>
                   {showPhone && (
                     <button 
                       onClick={() => copyToClipboard(phoneNumber, 'phone')}
                       className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                       title="Копировать"
                     >
                       {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                     </button>
                   )}
                </div>
              </div>

              {/* Social Links */}
              <div className="pl-4 md:pl-8">
                <span className="text-sky-300">"telegram"</span>: <a href={`https://t.me/${telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline">"{telegram}"</a><span className="text-slate-500">,</span>
              </div>
              <div className="pl-4 md:pl-8">
                <span className="text-sky-300">"vk"</span>: <a href={vkLink} target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline">"{vkLink}"</a>
              </div>

              <div>
                <span className="text-yellow-400">{`}`}</span>
              </div>
            </div>

            {/* Cursor */}
            <div className="flex items-center gap-2 text-lg pt-4">
              <span className="text-emerald-400">➜</span>
              <span className="text-blue-400">~</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-slate-400 block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
