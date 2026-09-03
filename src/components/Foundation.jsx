import React from 'react';
import { GraduationCap, CheckCircle2, Award, Book } from 'lucide-react';

export default function Foundation({ education, certifications }) {
  return (
    <section id="foundation" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>08 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC'}}>FOUNDATION // EDUCATION & CERTIFICATIONS</h2>
        </div>
        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#0D1420', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)'}}>
          Academic Blueprint
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px'
      }}>
        <div className="glass-panel" style={{padding: '24px', position: 'relative', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <GraduationCap size={18} color="#00F0FF" />
            <h3 style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#00F2FF', fontWeight: '700', letterSpacing: '1px', margin: 0}}>
              01 // EDUCATION
            </h3>
          </div>

          <h4 style={{fontSize: '18px', fontWeight: '800', color: '#F8pAFC', marginBottom: '4px'}}>
            {education.degree}
          </h4>
          <p style={{fontSize: '14px', color: '#38BDF8', fontWeight: '600', marginBottom: '14px'}}>
            {education.institution}
          </p>

          <div style={{display: 'flex', gap: '10px', marginBottom: '16px'}}>
            <span style={{padding: '4px 10px', borderRadius: '6px', background: '#0D1420', border: '1px solid #00F0FE', color: '#00F0FE', fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: '600'}}>
              {education.duration}
            </span>
            <span style={{padding: '4px 10px', borderRadius: '6px', background: '#0D1420', border: '1px solid #10B981', color: '#10B981', fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: '700'}}>
              CGPA: {education.cgpa}
            </span>
          </div>

          <p style={{color: '#9AA5B1', fontSize: '12.5px', lineHeight: '1.6'}}>
            Core Focus: {education.coreConcepts}
          </p>
        </div>

        <div className="glass-panel" style={{padding: '24px', position: 'relative', border: '1px solid rgba(129, 140, 248, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
              <Award size={18} color="#818CF8" />
              <h3 style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#818CF8', fontWeight: '700', letterSpacing: '1px', margin: 0}}>
                02 // VERIFIED CERTIFICATIONS
              </h3>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <CheckCircle2 size={14} color="#818CF8" />
                  <div>
                    <span style={{fontSize: '13px', fontWeight: '600', color: '#F8FAFC'}}>{cert.name}</span>
                    <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', marginLeft: '6px'}}>- {cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}