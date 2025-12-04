import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Section from './components/Section';
import Review2025 from './components/Review2025';
import MarketAnalysis from './components/MarketAnalysis';
import Strategy2026 from './components/Strategy2026';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <Hero />
      
      <main className="flex-grow">
        <Section id="review" title="2025 年度复盘" subtitle="数据说话：成绩与隐忧并存">
          <Review2025 />
        </Section>

        <Section id="market" title="形势研判" subtitle="寒夜漫漫，行业内卷与内部短板" light={false}>
          <MarketAnalysis />
        </Section>

        <Section id="strategy" title="2026 决胜战略" subtitle="低成本发展，高质量发展">
          <Strategy2026 />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
