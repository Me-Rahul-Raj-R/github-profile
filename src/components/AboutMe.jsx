import React from 'react';
import { User } from 'lucide-react';

export default function AboutMe({ profile }) {
  return (
    <section id="about" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fgWeight: '700'}}>01 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC'}}>FOUNDATION &amp; PROFILD</h2>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px'}}>
        <div style={{background: '#0D131C', border: '1px solid rgba(0, 240, 255, 0.35)', borderRadius: '12px', padding: '20px', fontFamily: 'JetBrains Mono', fontSize: '12px', lineHeight: '1.8px'}}>
          <div style={{color: '#00F0FF'}}>{'> whoami'}</div>
          <div style={{color: '#F8FAFC', paddingLeft: '10px', marginBottom: '14px'}}>
            {profile.roles.map((r, i) => (
              <div key={i}>{'> ' + r}</div>
            ))}
          </div>
          <div style={{color: '#00F0FF'}}>{'> status --current'}</div>
          <div style={{color: '#CBD5E1', paddingLeft: '10px'}}>Building scalable backend APIs &amp; full-stack systems</div>
        </div>
        <div className="glass-panel" style={{padding: '24px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <User size={18} color="#00F0FE" />
            <h3 style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#00F2FF', fontWeight: '700', margin: 0}}>CORE ENGINEERING FOCUS</h3>
          </div>
          <p style={{color: '#CBD5E1', fontSize: '13px', lineHeight: '1.7', marginBottom: '20px'}}>{profile.summary}</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {profile.identityTags.map((tag, idx) => (
              <span key={idx} style={{padding: '4px 10px', borderRadius: '6px', background: '#0D1420', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8', fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: '600'}}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}