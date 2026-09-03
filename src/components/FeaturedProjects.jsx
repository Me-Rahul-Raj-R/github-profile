import React from 'react';
import { Folder, ExternalLink } from 'lucide-react';

export default function FeaturedProjects({ projects }) {
  return (
    <section id="featured-projects" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>03 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC'}}>FEATURED PROJECTS</h2>
        </div>
        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#0D1420', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)'}}>
          4 Signature Systems
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '20px'
      }}>
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="glass-card"
            style={{
              background: '#0D1420',
              border: '1px solid ' + proj.accent + '50',
              borderRadius: '14px',
              padding: '22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px'}}>
                <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: proj.accent, fontWeight: '700', letterSpacing: '1.5px'}}>
                  {proj.number} // {proj.subtitle}
                </span>
                {proj.badge && (
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: '#0E1820',
                    border: '1px solid #10B981',
                    color: '#10B981',
                    fontFamily: 'JetBrains Mono',
                    fontSize: '10px',
                    fontWeight: '800'
                  }}>
                    &#x2605; {proj.badge}
                  </span>
                )}
              </div>

              <h3 style={{fontSize: '20px', fontWeight: '800', letterSpacing: '0.5px', color: '#F8FAFC', marginBottom: '6px'}}>
                {proj.name}
              </h3>

              <p style={{color: '#CBD5E1', fontSize: '13px', lineHeight: '1.65', marginBottom: '16px'}}>
                {proj.description}
              </p>

              <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px'}}>
                {proj.technology.map((tk, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: '#0B121C',
                      border: '1px solid ' + proj.accent + '40',
                      color: proj.accent,
                      fontFamily: 'JetBrains Mono',
                      fontSize: '11px',
                      fontWeight: '600'
                    }}
                  >
                    {tk}
                  </span>
                ))}
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B'}}>
                {proj.theme}
              </span>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '12px',
                  color: proj.accent,
                  textDecoration: 'none',
                  fontWeight: '700'
                }}
              >
                REPOSITORY #8594;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}