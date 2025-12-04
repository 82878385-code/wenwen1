import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { COMPETITORS } from '../constants';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const Review2025: React.FC = () => {
  const sortedByProfit = [...COMPETITORS].sort((a, b) => b.netProfit - a.netProfit);

  return (
    <div className="space-y-12">
      {/* Key Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Municipal Group */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-sm border border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-corporate-900">市政集团 (1-10月)</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">压舱石</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500">应收账款</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900">45.52 亿</span>
                <span className="text-sm text-red-600 font-medium flex items-center">
                   <TrendingUp size={14} className="mr-1"/> +25.13%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">占集团 97.64%</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">营收</p>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-bold">45.49 亿</span>
                  <span className="text-xs text-green-600">+13.20%</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-500">税后净利</p>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-bold">5.97 亿</span>
                  <span className="text-xs text-green-600">+14.11%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yuhetian Group */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">玉禾田集团 (1-9月)</h3>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">增收不增利</span>
          </div>
           <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500">营收</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900">56.40 亿</span>
                <span className="text-sm text-green-600 font-medium flex items-center">
                   <TrendingUp size={14} className="mr-1"/> +7.96%
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                <p className="text-sm text-slate-500">归母净利润</p>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-bold">4.31 亿</span>
                  <span className="text-xs text-red-500 flex items-center">
                    <TrendingDown size={12} className="mr-1"/> -13.03%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-500">有息负债</p>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-bold text-red-600">28.43 亿</span>
                  <span className="text-xs text-red-500">+37.63%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
        <h3 className="text-lg font-semibold mb-6 flex items-center">
          <AlertCircle className="text-corporate-800 mr-2" size={20}/>
          6大上市环卫企业 2025 Q3 横向对比 (亿元)
        </h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedByProfit}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="revenue" name="营收 (亿元)" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={30} />
              <Bar dataKey="receivables" name="应收账款 (亿元)" fill="#f87171" radius={[4, 4, 0, 0]} barSize={30} />
              <Bar dataKey="netProfit" name="归母净利 (亿元)" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          综合表现排第2位。行业性“寒夜”，6家企业应收合计214.69亿，达营收的82.5%。
        </p>
      </div>
    </div>
  );
};

export default Review2025;
