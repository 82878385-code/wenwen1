import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-corporate-900 to-corporate-800 text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className="inline-block px-4 py-2 mb-6 border border-blue-300/30 rounded-full bg-blue-900/30 backdrop-blur-sm text-blue-200 text-sm tracking-wider uppercase">
          集团内部培训资料 · 绝密
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
          复盘 2025，决胜 2026
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-8 rounded-full"></div>
        <h2 className="text-xl md:text-3xl font-serif text-blue-100 mb-12 font-light">
          穿越行业寒夜的生存与发展策略
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-blue-200">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest opacity-70 mb-1">主讲人</span>
            <span className="text-lg font-semibold text-white">王凤全</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-blue-500/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest opacity-70 mb-1">日期</span>
            <span className="text-lg font-mono">2025.12.2</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 animate-bounce">
        <a href="#review" className="flex flex-col items-center text-blue-300 hover:text-white transition-colors">
          <span className="text-xs mb-2">开始复盘</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
