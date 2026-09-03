import React, { useState } from 'react';
import { Code2, Laptop, Server, Database, Wrench, Cpu } from 'lucide-react';

export default function TechEcosystem({ ecosystem }) {
  const [hoveredCat, setHoveredCat] = useState(null);

  const icons = {
    languages: Code2,
    frontend: Laptop,
    backend: Server,
    databases: Database,
    tools: Wrench,
    core_cs: Cpu
  };

  return (
    <section id="tech-ecosystem" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F2FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>02 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC'}}>TECHNOLOGY ECOSYSTEM</h2>
        </div>
        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#0D1420', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)'}}>
          6 Connected Engineering Domains
        </span>
      </div>

      <div style={{position: 'relative'}}>
        <div style={{
          background: 'linear-gradient(180deg, rgba(15, 22, 34, 0.9) 0%, rgba(8, 12, 18, 0.95) 100%)',
          border: '1px solid rgba(38, 189, 248, 0.28)',
          borderRadius: '16px',
          padding: '24px 20px',
          marginBottom: '24px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00F0FE', fontWeight: '700', letterSpacing: '2px'}}>CENTRAL CORE</span>
          <h3 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '2px', color: '#F8FAFC', margin: '6px 0'}}>
            {ecosystem.center.title}
          </h3>
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#38BDF8', letterSpacing: '1.5px'}}>
            {ecosystem.center.subtitle}
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {ecosystem.categories.map((cat) => {
            const IconComp = icons[cat.id] || Code2;
            const isHovered = hoveredCat === cat.id;
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredCat(cat.id)}
                onMouseLeave={() => setHoveredCat(null)}
                className="glass-card"
                style={{
                  background: '#0D1420',
                  border: '1px solid ' + (isHovered ? cat.color : 'rgba(56, 189, 248, 0.2)'),
                  borderRadius: '12px',
                  padding: '18px',
                  boxShadow: isHovered ? ('0 0 20px ' + cat.color + '30') : 'none'
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <div style={{width: '28px', height: '28px', borderRadius: '6px', background: cat.color + '20', border: '1px solid ' + cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color}}>
                      <IconComp size={16} />
                    </div>
                    <h3 style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: cat.color, fontWeight: '700', letterSpacing: '1px', margin: 0}}>
                      {cat.name}
                    </h3>
                  </div>
                  <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>{cat.skills.length} items</span>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                  {cat.skills.map((sk, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: '#121A26',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        color: '#CBD5E1',
                        fontFamily: 'JetBrains Mono',
                        fontSize: '11.5px'
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}