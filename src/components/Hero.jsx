import React from 'react';
import { Github, Code2, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section id="hero" style={{paddingTop: '90px', paddingBottom: '20px', textAlign: 'center', position: 'relative'}}>
      <div style={{maxWidth: '980px', margin: '0 auto', padding: '0 20px'}}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(14, 22, 34, 0.90) 0%, rgba(8, 12, 18, 0.95) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          borderRadius: '20px',
          padding: '40px 20px',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 0 40px rgba(0, 240, 255, 0.05)',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(0, 240, 255, 0.08) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div style={{position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', background: '#09111C', border: '1px solid rgba(0, 240, 255, 0.4)', marginBottom: '20px'}}>
            <span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981'}}></span>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#00F0FF', fontWeight: '600', letterSpacing: '1.5px'}}>{"< developer.profile />"}</span>
          </div>

          <h1 style={{
            position: 'relative',
            zIndex: 1,
            fontSize: 'clamp(32px, 6vw, 52px)',
            fontWeight: '900',
            letterSpacing: '3px',
            background: 'linear-gradient(90deg, #00F2FF 0%, #C084FC 40%, #EC4899 70%, #38BDF8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            {profile.name}
          </h1>

          <p style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(12px, 2vw, 14.5px)',
            color: '#9AA5B1',
            letterSpacing: '1px',
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            SOFTWARE DEVELOPER &nbsp;|&nbsp; Java Developer &nbsp;|&nbsp; Full Stack Web Developer
          </p>

          <div style={{position: 'relative', zIndex: 1, display: 'inline-block', padding: '5px 18px', borderRadius: '999px', background: '#0E1724', border: '1px solid rgba(56, 189, 248, 0.35)', marginBottom: '28px'}}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#38BDF8', fontWeight: '600', letterSpacing: '2px'}}>
              {profile.domains}
            </span>
          </div>

          <div style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '8px', background: 'rgba(19, 27, 40, 0.9)', border: '1px solid rgba(0, 240, 255, 0.4)', color: '#f4f7fa', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}} className="glass-card">
              <Github size={16} color="#00F0FF" />
              GitHub
              <ArrowUpRight size={14} color="#00F0FF" />
            </a>

            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '8px', background: 'rgba(19, 27, 40, 0.9)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#f4f7fa', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}} className="glass-card">
              <Code2 size={16} color="#F59E0B" />
              LeetCode <span style={{fontSize: '10px', color: '#F59E0B', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 6px', borderRadius: '4px'}}>318 Solved</span>
              <ArrowUpRight size={14} color="#F59E0B" />
            </a>

            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '8px', background: 'rgba(19, 27, 40, 0.9)', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#f4f7fa', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}} className="glass-card">
              <Linkedin size={16} color="#38BDF8" />
              LinkedIn
              <ArrowUpRight size={14} color="#38BDF8" />
            </a>

            <a href={profile.links.portfolio} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '8px', background: 'rgba(19, 27, 40, 0.9)', border: '1px solid rgba(167, 139, 250, 0.4)', color: '#f4f7fa', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: '600'}} className="glass-card">
              <Globe size={16} color="#A78BFA" />
              Portfolio v2
              <ArrowUpRight size={14} color="#A78BFA" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}