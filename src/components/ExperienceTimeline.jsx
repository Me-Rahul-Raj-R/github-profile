import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceTimeline({ experience }) {
  return (
    <section id="experience" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fgWeight: '700'}}>05 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8pAFC'}}>PROFESSIONAL EXPERIENCE</h2>
        </div>
      </div>

      <div style={{position: 'relative', paddingLeft: '28px', borderLeft: '2px solid rgba(56, 189, 248, 0.3)'}}>
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
}