import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">Ivan Dev</span>
            <p className="mt-2 text-gray-400 text-sm">Создаю цифровые продукты со смыслом.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ivan Dev. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
