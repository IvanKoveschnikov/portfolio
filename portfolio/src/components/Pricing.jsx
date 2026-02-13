import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, ShoppingBag, Store, Headphones, Server, Zap, Shield, Database, Cloud } from 'lucide-react';

const plans = [
  {
    name: 'MVP / Start',
    price: 'от 50 000 ₽',
    description: 'Базовое решение для быстрого запуска.',
    features: ['5-10 экранов', '1 API интеграция', 'Базовая логика', 'Срок: 2-3 недели'],
    icon: <Server className="w-6 h-6" />,
    color: 'blue'
  },
  {
    name: 'Business',
    price: 'от 150 000 ₽',
    description: 'Оптимально для коммерческих проектов.',
    features: ['До 30 экранов', 'До 3 интеграций', 'Админ-панель', 'Analytics & Crashlytics', '1 месяц поддержки'],
    popular: true,
    icon: <Database className="w-6 h-6" />,
    color: 'purple'
  },
  {
    name: 'Enterprise',
    price: 'от 400 000 ₽',
    description: 'Масштабные системы "под ключ".',
    features: ['Безлимит экранов', 'Сложный Backend', 'CI/CD Pipeline', 'Расширенная админка', '3 месяца поддержки'],
    icon: <Cloud className="w-6 h-6" />,
    color: 'orange'
  }
];

const additionalServices = [
  { 
    name: 'RuStore Deploy', 
    price: '10 000 ₽',
    icon: ShoppingBag,
    color: 'text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/10'
  },
  { 
    name: 'AppStore Deploy', 
    price: '25 000 ₽',
    icon: Store,
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/10'
  },
  { 
    name: 'Google Play Deploy', 
    price: '35 000 ₽',
    icon: Smartphone,
    color: 'text-green-400',
    border: 'border-green-500/20',
    bg: 'bg-green-500/10'
  },
  { 
    name: 'Support (SLA)', 
    price: 'от 15 000 ₽/мес',
    icon: Headphones,
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/10'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0b1120] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-4">
            <Zap className="w-4 h-4" />
            <span>./estimate_cost.sh</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Стоимость <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Разработки</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Прозрачные тарифные планы. Выберите конфигурацию, подходящую под задачи вашего проекта.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-[#1e293b]/50 backdrop-blur-sm rounded-xl border p-8 flex flex-col transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-blue-900/20' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                  RECOMMENDED
                </div>
              )}
              
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  plan.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                  plan.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                  'bg-orange-500/10 text-orange-400'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 p-4 bg-[#0f172a] rounded-lg border border-slate-700/50">
                <span className="text-3xl md:text-3xl font-mono font-bold text-white">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
              }`}>
                Начать проект
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-purple-400">➜</span>
            <span>Дополнительные модули</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`p-4 rounded-lg border ${service.border} ${service.bg} backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-opacity-20`}
              >
                <div className={`p-2 rounded-md bg-white/5 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{service.name}</h4>
                  <p className={`font-mono text-xs ${service.color} mt-1`}>{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
