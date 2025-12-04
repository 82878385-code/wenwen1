import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", light = true }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${light ? 'bg-white' : 'bg-slate-50'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-corporate-800 pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{title}</h2>
          {subtitle && <p className="text-lg text-slate-500 font-medium">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
