const fs = require('fs');

fs.writeFileSync('src/components/BuildLogGallery.jsx', `	import React, { useState } from 'react';
import { Folder, Star, GitBranch, ExternalLink } from 'lucide-react';

export default function BuildLogGallery({ repos }) {
  const [activeGroup, setActiveGroup] = useState('all');

  const groups = [
    { id: 'all', label: 'All Repositories' },
    { id: 'signature', label: 'Signature Systems' },
    { id: 'experiments', label: 'AI & Web Experiments' },
    { id: 'practice', label: 'Coding & DSA }
  ];

  const filteredRepos = activeGroup === 'all' ? repos : repos.filter(r => r.group === activeGroup);

  return (
    <section id="build-log" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>04 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC'}}>BUILD LOG &amp; REPOSITORIES</h2>
        </div>

        <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontFamily: 'JetBrains Mono',
                fontSize: '11px',
                cursor: 'pointer',
                background: activeGroup === g.id ? '#00F2FF' : '#0D1420',
                color: activeGroup === g.id ? '#080C11' : '#CBD5E1',
                border: activeGroup === g.id ? '1px solid #00F0FF' : '1px solid rgba(56, 189, 248, 0.2)',
                fontWeight: '700'
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {filteredRepos.map((repo, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              background: '#0D1420',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '12px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                  <Folder size={16} color="#00F0FE" />
                  <span style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#F8pAFC', fontWeight: '700'}}>
                    {repo.name}
                  </span>
                </div>
                <a href={repo.github} target="_blank" rel="noopener noreferrer" style={{color: '#38BDF8'}}>
                  <ExternalLink size={15} />
                </a>
              </div>

              <p style={{color: '#CBD5E1', fontSize: '12px', lineHeight: '1.6', marginBottom: '14px'}}>
                {repo.description}
              </p>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00F2FF', padding: '2px 8px', borderRadius: '4px', background: '#121A26''}}>
                {repo.technology}
              </span>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>
                {repo.domain}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`, 'utf8');

// ExperienceTimeline.jsx
fs.writeFileSync('src/components/ExperienceTimeline.jsx', `import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceTimeline({ experience }) {
  return (
    <section id="experience" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FE', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>05 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8pAFC'}}>PROFESSIONAL EXPERIENCE</h2>
        </div>
        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#0D1420', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)''}>
          Vertical Engineering Track
        </span>
      </div>

      <div style={{position: 'relative', paddingLeft: '28px', borderLeft: '2px solid {rgba(56, 189, 248, 0.3)}'}}>
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              background: '#0D1420',
              border: '1px solid ' + exp.color + '40',
              borderRadius: '14px',
              padding: '20px',
              marginBottom: '20px',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-35px',
                top: '22px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: exp.color,
                boxShadow: '0 0 10px ' + exp.color
              }}
            />

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px'}}>
              <div>
                <h3 style={{fontSize: '16px', fontWeight: '800', color: '#F8FAFC', marginBottom: '4px'}}>
                  {exp.role}
                </h3>
                <span style={{fontFamily: 'JetBrains Mono', fontSize: '12px', color: exp.color, fontWeight: '700'}}>
                  {exp.company}
                </span>
              </div>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#121A26', padding: '4px 10px', borderRadius: '6px'}}>
                {exp.period}
              </span>
            </div>

            <p style={{color: '#CBD5E1', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px'}}>
              {exp.focus}
            </p>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
              {exp.tags.map((tg, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: '#11182A',
                    border: '1px solid ' + exp.color + '30',
                    color: exp.color,
                    fontFamily: 'JetBrains Mono',
                    fontSize: '11px'
                  }}
                >
                  {tg}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`, 'utf8');

console.log('gen_2 ok');