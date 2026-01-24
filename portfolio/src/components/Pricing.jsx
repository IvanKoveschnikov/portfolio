import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, ShoppingBag, Store, Headphones } from 'lucide-react';

const plans = [
  {
    name: 'Базовый',
    price: 'от 50 000 ₽',
    description: 'Для простых приложений и MVP.',
    features: ['5-10 экранов и модальных окон', '1 интеграция сервиса', 'Базовый функционал']
  },
  {
    name: 'Стандарт',
    price: 'от 150 000 ₽',
    description: 'Оптимальное решение для бизнеса.',
    features: ['До 30 экранов и модальных окон', 'До 3 интеграций с сервисами', '1 месяц поддержки после сдачи', 'Админ-панель (до 3 страниц)', 'Мониторинг 5 показателей'],
    popular: true
  },
  {
    name: 'PRO',
    price: 'от 400 000 ₽',
    description: 'Масштабные проекты "под ключ".',
    features: ['От 30 экранов', 'От 3 интеграций', '2 месяца поддержки бесплатно', 'Расширенная админ-панель', 'Публикация в AppStore, Google Play, RuStore']
  }
];

const additionalServices = [
  { 
    name: 'Публикация в RuStore', 
    price: '10 000 ₽',
    icon: ShoppingBag,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  { 
    name: 'Публикация в AppStore', 
    price: '25 000 ₽',
    icon: Store,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  { 
    name: 'Публикация в Google Play', 
    price: '35 000 ₽',
    icon: Smartphone,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  { 
    name: 'Техническая поддержка', 
    price: 'от 15 000 ₽/мес',
    icon: Headphones,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Стоимость разработки</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Стоимость ориентировочная. Итоговая цена рассчитывается после составления ТЗ и обсуждения всех деталей проекта.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-2xl p-8 shadow-lg relative flex flex-col ${plan.popular ? 'border-2 border-blue-600 transform md:-translate-y-4' : 'border border-gray-100'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Популярный
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6 text-sm">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Обсудить проект
              </a>
            </motion.div>
          ))}
        </div>

        {/* Дополнительные услуги */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Дополнительные услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${service.bg}`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className="font-medium text-gray-900 text-lg">{service.name}</span>
                </div>
                <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
