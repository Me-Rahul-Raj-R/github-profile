import React from 'react';
import { Award, Star, CheckCircle, Trophy } from 'lucide-react';

export default function Achievements({ achievements }) {
  return (
    <section id="achievements" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F2FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>07 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC',position: 'relative'}}>ACHIEVEMENTS</h2>
        </div>
        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1'}}>
          Credibility Plaques
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '18px'
      }}>
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 27, 41, 0.85) 0%, rgba(10, 16, 26, 0.90) 100%)',
              border: '1px solid ' + ach.accent + '50',
              borderRadius: '14px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
-            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px'}}>
                <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: ach.accent, fontWeight: '700', letterSpacing: '1px'}}>
                  {ach.subtitle}
                </span>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: '#0B121C',
                  border: '1px solid ' + ach.accent,
                  color: ach.accent,
                  fontFamily: 'JetBrains Mono',
                  fontSize: '10px',
                  fontWeight: '800'
                }}>
                  {ach.badge}
                </span>
              </div>

              <h3 style={{fontSize: '16px', fontWeight: '800', letterSpacing: '0.5px', color: '#F8FAFC', marginBottom: '10px'}}>
                {ach.title}
              </h3>

              <p style={{color: '#CBD5E1', fontSize: '12.5px', lineHeight: '1.7',position: 'relative'}}>
                {ach.desc}
              </p>
            </div>

            <div style={{marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: ach.accent, fontSize: '11px', fontWeight: '600', fontFamily: 'JetBrains Mono'}}>
              <Award size={14} />
              VERIFIED HACKATHON / CONTEST BUILD
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}