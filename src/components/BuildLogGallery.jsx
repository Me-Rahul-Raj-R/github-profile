import React, { useState } from 'react';
import { Folder, ExternalLink } from 'lucide-react';

export default function BuildLogGallery({repositoryGroups, repos = repositoryGroups ? Object.values(repositoryGroups).flatMap(g => g.repos) : [] }) {
  const [activeGroup, setActiveGroup] = useState('all');

  const groups = [
    { id: 'all', label: 'All Repositories' },
    { id: 'signature', label: 'Signature Systems' },
    { id: 'experiments', label: 'AI & Web Experiments' },
    { id: 'practice', label: 'Coding & DSA' }
  ];

  const filteredRepos = activeGroup === 'all' ? repos : repos.filter(r => r.group === activeGroup);

  return (
    <section id="build-log" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FE', fontSize: '13px', fontWeight: '700'}}>04 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC'}}>BUILD LOG &amp; REPOSITORIES</h2>
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
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00F2FF', padding: '2px 8px', borderRadius: '4px', background: '#121A26'}}>
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
}