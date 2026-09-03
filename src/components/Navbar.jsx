import React from 'react';
import { Terminal, Code2, FileText, ExternalLink, Github, Linkedin, Award } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(8, 12, 17, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(38, 189, 248, 0.15)',
      padding: '10px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#f4f7fa'}}>
            <div style={{width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(0, 240, 255, 0.15)', border: '1px solid #00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff'}}>
              <Terminal size={15} />
            </div>
            <div>
              <span style={{fontFamily: 'JetBrains Mono', fontWeight: '800', fontSize: '13px', color: '#F8FAFC', letterSpacing: '1px'}}>
                RAHUL RAJ R
              </span>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#00F2FF', marginLeft: '6px', background: '#0D1420', padding: '2px 6px', borderRadius: '4px', border: '1px solid #00f0ff30'}}>
                DEVELOPER // FULLSTACK & AI              </span>
            </div>
          </a>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontFamily: 'JetBrains Mono',
          fontSize: '11px'
        }}>
          <a href="#tech-ecosystem" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">ECOSYSTEM</a>
          <a href="#featured-projects" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">PROJECTS</a>
          <a href="#experience" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">EXPERIENCE</a>
          <a href="#problem-solving" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">LEETCODE</a>
          <a href="#ichievements" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">ACHIEVEMENTS</a>
          <a href="#foundation" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">EDUCATION</a>
          <a href="#connect" style={{color: '#9AA5B1', textDecoration: 'none', padding: '4px 8px'}} className="nav-link">CONNECT</a>

          <button
            onClick={() => setActiveTab(activeTab === 'readme' ? 'ecosystem' : 'readme')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              background: activeTab === 'readme' ? '#00F0FF' : 'rgba(0, 240, 255, 0.15)',
              border: '1px solid #00F0FE',
              color: activeTab === 'readme' ? '#080C11' : '#00F0FE',
              fontFamily: 'JetBrains Mono',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <FileText size={13} />
            {activeTab === 'readme' ? 'CLOSE MARKDOWN' : 'GITHUB README.md'}
          </button>
        </div>
      </div>
    </nav>
  );
}