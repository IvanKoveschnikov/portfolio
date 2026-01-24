import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle, Eye, EyeOff } from 'lucide-react';

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showTelegram, setShowTelegram] = useState(false);
  const [showVk, setShowVk] = useState(false);

  const phoneNumber = "+79507777510";
  const email = "ivan.kove776@gmail.com";
  const telegram = "@koveschnikov";
  const vkLink = "https://vk.com/harmful_pie";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Связаться со мной</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600">Выберите удобный способ связи.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4 w-full">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-600 break-all">
                  {showEmail ? (
                    <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
                      {email}
                    </a>
                  ) : (
                    "**********************"
                  )}
                </span>
                <button 
                  onClick={() => setShowEmail(!showEmail)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                  title={showEmail ? "Скрыть" : "Показать"}
                >
                  {showEmail ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4 w-full">
              <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-600">
                  {showPhone ? (
                    <a href={`tel:${phoneNumber}`} className="hover:text-green-600 transition-colors">
                      {phoneNumber}
                    </a>
                  ) : (
                    "***********"
                  )}
                </span>
                <button 
                  onClick={() => setShowPhone(!showPhone)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                  title={showPhone ? "Скрыть" : "Показать"}
                >
                  {showPhone ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Telegram */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
              <Send className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-4 w-full">
              <h3 className="text-lg font-medium text-gray-900">Telegram</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-600">
                  {showTelegram ? (
                    <a href={`https://t.me/${telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                      {telegram}
                    </a>
                  ) : (
                    "*************"
                  )}
                </span>
                <button 
                  onClick={() => setShowTelegram(!showTelegram)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                  title={showTelegram ? "Скрыть" : "Показать"}
                >
                  {showTelegram ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg">
              <MessageCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-4 w-full">
              <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-600">
                  {showWhatsapp ? (
                    <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                      {phoneNumber}
                    </a>
                  ) : (
                    "***********"
                  )}
                </span>
                <button 
                  onClick={() => setShowWhatsapp(!showWhatsapp)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                  title={showWhatsapp ? "Скрыть" : "Показать"}
                >
                  {showWhatsapp ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* VK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow md:col-span-2 md:w-1/2 md:mx-auto"
          >
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
              <span className="h-6 w-6 text-blue-700 font-bold flex items-center justify-center">VK</span>
            </div>
            <div className="ml-4 w-full">
              <h3 className="text-lg font-medium text-gray-900">ВКонтакте</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-600">
                  {showVk ? (
                    <a href={vkLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                      harmful_pie
                    </a>
                  ) : (
                    "***********"
                  )}
                </span>
                <button 
                  onClick={() => setShowVk(!showVk)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                  title={showVk ? "Скрыть" : "Показать"}
                >
                  {showVk ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
