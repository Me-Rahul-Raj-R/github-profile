const fs = require('fs');
const esbuild = require('esbuild');

const files = {};


files['AboutMe.jsx'] = `	import React from 'react';
import { User } from 'lucide-react';

export default function AboutMe({ profile }) {
  return (
    <section id="about" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F2FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>01 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC'}}>FOUNDATION & PROFILE</h2>
        </div>
        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#0D1420', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)'}}>
          Command Center // Interactive
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          background: '#0D131C',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.5)'
        }}>
          <div style={{
            background: '#131B26',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1E293B'
          }}>
            <div style={{display: 'flex', gap: '6px'}}>
              <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444'}}></span>
              <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B'}}></span>
              <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#10B981'}}></span>
            </div>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B'}}>
              rahul@command-center:~ (bash)
            </span>
          </div>

          <div style={{padding: '20px', fontFamily: 'JetBrains Mono', fontSize: '12px', lineHeight: '1.8'}}>
            <div style={{color: '#00F0FF', marginBottom: '4px'}}{'> whoami'}</div>
            <div style={{color: '#F8FAFC',paddingLeft: '10px', marginBottom: '14px'}}>
              {profile.roles.map((r, i) => (
                <div key={ig}{'> ' + r}</div>
              ))}
            </div>

            <div style={{color: '#00F0FE', marginBottom: '4px'}}>{'> status --current'}</div>
            <div style={{color: '#CBD5E1', paddingLeft: '10px', marginBottom: '14px'}}>
              Building scalable backend APIs & full-stack systems
            </div>

            <div style={{color: '#00F0FF'}}{'> ready_for_action '}<span style={{color: '#10B981'}}true</span><span className="blink">_</span></div>
          </div>
        </div>

        <div className="glass-panel" style={{padding: '24px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
              <User size=ter18} color="#00F0FE" />
              <h3 style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#00F0FF', fontWeight: '700', letterSpacing: '1px', margin: 0}}>
                CORE ENGINEERING FOCUS
              </h3>
            </div>

            <p style={{color: '#CBD5E1', fontSize: '13px', lineHeight: '1.7', marginBottom: '20px'}}>
              {profile.summary}
            </p>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {profile.identityTags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: '#0D1420',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: '#38BDF8',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`;



files['BuildLogGallery.jsx'] = `	import React, { useState } from 'react';
import { Folder, ExternalLink } from 'lucide-react';

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
                <a href={repo.github} target="_blank"
                   rel="noopener noreferrer"
                   style={{color: '#38BDF8'}}>
                  <ExternalLink size={15} />
                </a>
              </div>

              <p style={{color: '#CBD5E1', fontSize: '12px', lineHeight: '1.6', marginBottom: '14px'}}>
                {repo.description}
              </p>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00F0FE', padding: '2px 8px', borderRadius: '4px', background: '#121A26'}}>
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
}`;



Object.entries(files).forEach(([fn, code]) => {
  try {
    esbuild.transformSync(code, { loader: 'jsx' });
    fs.writeFileSync('src/components/' + fn, code, 'utf8');
    console.log('  [SUCCESS]  ' + fn);
  } catch (err) {
    console.log('  [INVALID]  ' + fn + ': ' + err.message);
  }
});
