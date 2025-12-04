import React from 'react';
import { INTERNAL_DEFICIENCIES } from '../constants';
import { ShieldAlert, AlertTriangle, CloudRain } from 'lucide-react';

const MarketAnalysis: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Quote */}
      <div className="text-center max-w-2xl mx-auto py-8">
        <CloudRain size={48} className="mx-auto text-corporate-800 mb-4 opacity-50" />
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-2">
          “寒夜漫漫，不知所终！”
        </h3>
        <p className="text-slate-500 italic">—— 市场内卷愈加严重，面临内外双重严峻挑战</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* External Challenges */}
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <ShieldAlert className="text-red-600" size={20} />
            </div>
            <h4 className="text-xl font-bold text-red-900">外部环境：五大危机</h4>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></span>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong className="block text-red-900">恶性竞争</strong>
                恶意低价、不择手段，甲方毫无道理的巨额有偿出让经营权。
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></span>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong className="block text-red-900">国企回购倾向</strong>
                甲方倾向给“亲儿子”国企做，续标压力巨大，营收刚性降低风险。
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></span>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong className="block text-red-900">回款艰难</strong>
                欠款居高不下且持续增长，尚无破解良方。
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></span>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong className="block text-red-900">审巡压价</strong>
                “审巡”终极目的就是压价、找后账，潜藏重大风险。
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></span>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong className="block text-red-900">无理考核</strong>
                “无厘头”降低单价或恶意高额考核扣款，挤压盈利空间。
              </p>
            </li>
          </ul>
        </div>

        {/* Internal Deficiencies */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-4">
              <AlertTriangle className="text-slate-600" size={20} />
            </div>
            <h4 className="text-xl font-bold text-slate-900">内部痛点：20个“缺”</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {INTERNAL_DEFICIENCIES.map((item, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg">
            <p className="text-orange-800 font-bold">
              我们的同志在困难的时候，要看到成绩，要看到光明，要提高我们的勇气。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
