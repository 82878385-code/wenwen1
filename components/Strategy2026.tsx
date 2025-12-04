import React from 'react';
import { ACTION_ITEMS } from '../constants';
import * as Icons from 'lucide-react';

const Strategy2026: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Top Strategy Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-corporate-900">市场策略：宁缺毋滥</h3>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h4 className="font-bold text-blue-900 mb-2">5句话 15个字</h4>
            <p className="text-lg text-blue-800 font-medium">
              “不借款、少投资、好回款、保利润、千万起”
            </p>
          </div>
          <div className="space-y-3">
             <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                <span className="font-semibold text-slate-700">我们要有收入的合同</span>
             </div>
             <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                <span className="font-semibold text-slate-700">我们要有利润的收入</span>
             </div>
             <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                <span className="font-semibold text-slate-700">我们要有现金的利润</span>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-corporate-900">经管策略：长期主义</h3>
          <p className="text-slate-600">
            全面提升经营管理基础工作水平，规范经营管理行为，精细管控总成本费用，深挖提高利润的潜力空间。
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <h4 className="font-bold text-slate-900 mb-4">核心KPI考核体系 (8个字)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-yellow-600 font-bold text-xl mb-1">做好</div>
                <div className="text-xs text-slate-500">现金流量净额</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-yellow-600 font-bold text-xl mb-1">做强</div>
                <div className="text-xs text-slate-500">净利润额</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-yellow-600 font-bold text-xl mb-1">做大</div>
                <div className="text-xs text-slate-500">总收入</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-yellow-600 font-bold text-xl mb-1">做优</div>
                <div className="text-xs text-slate-500">净利润率</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items Grid */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">2026 重点行动计划</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTION_ITEMS.map((item, index) => {
            // Dynamically get icon component
            const IconComponent = (Icons as any)[item.icon] || Icons.Circle;
            
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-corporate-50 text-corporate-800 group-hover:bg-corporate-800 group-hover:text-white transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="ml-3 font-bold text-slate-800">{item.title}</h4>
                </div>
                <ul className="space-y-2">
                  {item.content.map((line, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Strategy2026;
