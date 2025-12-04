import { CompetitorData, ActionItem } from './types';

export const COMPETITORS: CompetitorData[] = [
  { name: "福龙马", code: "603686", revenue: 35.99, revenueGrowth: -5.07, netProfit: 1.13, netProfitGrowth: -1.83, receivables: 26.07 },
  { name: "玉禾田", code: "300815", revenue: 56.40, revenueGrowth: 7.96, netProfit: 4.31, netProfitGrowth: -13.03, receivables: 46.60 },
  { name: "侨银股份", code: "002973", revenue: 27.66, revenueGrowth: -5.87, netProfit: 1.50, netProfitGrowth: -38.08, receivables: 25.20 },
  { name: "劲旅环境", code: "001230", revenue: 11.76, revenueGrowth: 2.53, netProfit: 1.25, netProfitGrowth: 9.36, receivables: 12.21 },
  { name: "盈峰环境", code: "000967", revenue: 95.44, revenueGrowth: 2.87, netProfit: 4.71, netProfitGrowth: -21.92, receivables: 62.12 },
  { name: "启迪环境", code: "000826", revenue: 33.04, revenueGrowth: -10.57, netProfit: -6.83, netProfitGrowth: 38.6, receivables: 42.49 }
];

export const INTERNAL_DEFICIENCIES = [
  "缺创新", "缺亮点", "缺担当", "缺认识", "缺专业",
  "缺新血", "缺规划", "缺传统", "缺标准", "缺培训",
  "缺考核", "缺编制", "缺视野", "缺理想", "缺目标",
  "缺激励", "缺品德", "缺人才", "缺狼性", "缺智慧"
];

export const ACTION_ITEMS: ActionItem[] = [
  {
    title: "阿米巴模式落地",
    icon: "Grid",
    content: ["缩小经营管理“颗粒度”", "穿透下沉到基层成本责任单元、价值创造单元"]
  },
  {
    title: "全面预算管理",
    icon: "Calculator",
    content: ["锁定目标利润，反向减法倒逼总成本", "实现10字目标：双增（增收、增利）、双提（提质、提效）、一降（降本）"]
  },
  {
    title: "组织架构优化",
    icon: "Users",
    content: ["保障一线、优化辅助", "能合就并、精简管服", "一岗多责、一专多能"]
  },
  {
    title: "人力资源配置 (8定)",
    icon: "UserCheck",
    content: ["定部门、定岗位、定编制", "定薪酬、定起止时间、定地点", "定工作内容、定责任"]
  },
  {
    title: "监管与风控",
    icon: "ShieldAlert",
    content: ["监管提醒警示、责任约谈", "外部损失内部连带责任追偿", "内部模拟审计自查自纠"]
  },
  {
    title: "合同与市场",
    icon: "FileText",
    content: ["2026年到期合同66个，确保续标成功", "坚守“不借款、少投资、好回款、保利润、千万起”"]
  },
  {
    title: "应收账款催收",
    icon: "Banknote",
    content: ["纵使千难万险，也要“要钱、要钱、要钱！”"]
  },
  {
    title: "人才梯队建设",
    icon: "TrendingUp",
    content: ["四级人才培养体系：育龙、潜龙、腾龙", "打造敢战能赢的“狼性”团队"]
  }
];
