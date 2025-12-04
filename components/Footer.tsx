import React from 'react';
import { Ship } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-corporate-900 text-white py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-blue-500 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Ship size={64} className="mx-auto mb-8 text-blue-300 opacity-80" />
        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-relaxed">
          <span className="block mb-2 text-blue-200 text-lg md:text-xl font-normal">我相信：在董事长和总裁的有力领导下</span>
          玉禾田，这支<span className="text-yellow-400">航母特混编队</span>
        </h2>
        <p className="text-xl md:text-2xl font-light text-blue-100 mb-12">
          一定能够克服重重困难，迎风破浪、勇往直前，驶向胜利的彼岸！
        </p>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        <div className="mt-12 text-sm text-blue-400">
          © 2025 市政集团培训资料 | 内部使用
        </div>
      </div>
    </footer>
  );
};

export default Footer;
