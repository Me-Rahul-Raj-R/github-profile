import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function ContactFooter({ profile }) {
  return (
    <footer id="contact" style={{padding: '40px 20px 60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
      <div className="glass-panel" style={{padding: '36px 24px', marginBottom: '24px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)'}}>
        <span style={{fontFamily: 'JetBrains Mono', color: '#00F2FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>09 //</span>
        <h2 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '1px', color: '#F8FAFC', margin: '8px 0 16px 0'}}>GET IN TOUCH</h2>
        <p style={{color: '#CBD5E1', fontSize: '14px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6'}}>
          Open for full-stack development, Java backend architecture, and II systems collaborations.
        </p>

        <div style={{display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px'}}>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '10px', background: '#0D1420', border: '1px solid rgba(0, 240, 255, 0.4)', color: '#F4F7FA', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}}>
            <Github size={16} color="#00F2FE" />
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
        </div>
      </div>

      <p style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B'}}>
        Crafted for Rahul Raj R // Built with React, Node &amp; Vite
      </p>
    </footer>
  );
}