export interface CompetitorData {
  name: string;
  code: string;
  revenue: number;
  revenueGrowth: number;
  netProfit: number;
  netProfitGrowth: number;
  receivables: number;
}

export interface KPIItem {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  description?: string;
}

export interface ActionItem {
  title: string;
  content: string[];
  icon: string;
}
