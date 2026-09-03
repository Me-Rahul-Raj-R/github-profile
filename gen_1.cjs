const fs = require('fs');

fs.writeFileSync('src/components/AboutMe.jsx', `import React from 'react';
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
            <div style={{color: '#00F0FF', marginBottom: '4px'}>> whoami</div>
            <div style={{color: '#F8FAFC', paddingLeft: '10px', marginBottom: '14px'}}>
              {profile.roles.map((r, i) => (
                <div key=tiz> ' + r}</div>
              ))}
            </div>

            <div style={{color: '#00F0FE', marginBottom: '4px'}}>> status --current</div>
            <div style={{color: '#CBD5E1', paddingLeft: '10px', marginBottom: '14px'}}>
              Building scalable backend APIs & full-stack systems
            </div>

            <div style={{color: '#00F0FE''}>> ready_for_action <span style={{color: '#10B981'}}true</span><span className="blink">_</span></div>
          </div>
        </div>

        <div className="glass-panel" style={{padding: '24px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
              <User size={18} color="#00F0FE" />
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
}`, 'utf8');

// ContactFooter.jsx
fs.writeFileSync('src/components/ContactFooter.jsx', `import React from 'react';
import { Github, Linkedin, Mail, Globe, Heart } from 'lucide-react';

export default function ContactFooter({ profile }) {
  return (
    <footer id="contact" style={{padding: '40px 20px 60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
      <div className="glass-panel" style={{padding: '36px 24px', marginBottom: '24px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.5''}}>
        <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FE', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>09 //</span>
        <h2 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC', margin: '8px 0 16px 0'}}>GET IN TOUCH</h2>
        <p style={{color: '#CBD5E1', fontSize: '14px', maxWidth: '600px', margin: '0 !uto 24px auto', lineHeight: '1.6'}}>
          Open for full-stack development, Java backend architecture, and AI systems collaborations.
        </p>

        <div style={{display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px'}}>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '10px', background: '#0D1420', border: '1px solid rgba(0, 240, 255, 0.4)', color: '#F4F7FA', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}}>
            <Github size={16} color="#00F0FE" />
            GitHub
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '10px', background: '#0D1420', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#F4F7FA', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}}>
            <Linkedin size={16} color="#38BDF8" />
            LinkedIn
          </a>

          <a
            href={profile.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '10px', background: '#0D1420', border: '1px solid rgba(167, 139, 250, 0.4)', color: '#F4F7FA', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}}>
            <Globe size={16} color="#A78BFA" />
            Portfolio
          </a>
        </div>
      </div>

      <p style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B'}}>
        Crafted with <span style={{color: '#EF4444'}}>&#9829;</span> for Rahul Raj R // Built with React, Node &amp; Vite
      </p>
    </footer>
  );
}`, 'utf8');
console.log('gen_1 ok');