import React from 'react';
import { Folder, Star, GitCommit } from 'lucide-react';

export default function GitHubActivity({ githubStats = {}, github = githubStats || {}, url = 'https://github.com/Me-Rahul-Raj-R' }) {
  const repos = (github && (github.repositories || github.publicRepos)) || 29;
  const stars = (github && github.stars) || 9;
  const contribs = (github && github.contributions) || 54;

  return (
    <section id="github-activity" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700'}}>08 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC'}}>GITHUB ACTIVITY &amp; CONTRIBUTIONS</h2>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00F2FF', textDecoration: 'none', fontWeight: '700'}}>
          VIEW GITHUB PROFILE&#8594;
        </a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px'
      }}>
        <div className="glass-card" style={{background: '#0D1420', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center'}}>
          <Folder size={28} color="#00F2FE" style={{marginBottom: '8px'}} />
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>PUBLIC REPOSITORIES</span>
          <h3 style={{fontSize: '36px', fontWeight: '900', color: '#F8FAFC', margin: '6px 0'}}>
            {repos}
          </h3>
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00F0FE', fontWeight: '700'}}>
            Verified Open Source
          </span>
        </div>

        <div className="glass-card" style={{background: '#0D1420', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center'}}>
          <Star size={28} color="#F59E0B" style={{marginBottom: '8px'}} />
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>TOTAL STARS</span>
          <h3 style={{fontSize: '36px', fontWeight: '900', color: '#F8FAFC', margin: '6px 0'}}>
            {stars}
          </h3>
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#F59E0B', fontWeight: '700'}}>
            Community Starred
          </span>
        </div>

        <div className="glass-card" style={{background: '#0D1420', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center'}}>
          <GitCommit size={28} color="#10B981" style={{marginBottom: '8px'}} />
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>CONTRIBUTIONS (YEAR)</span>
          <h3 style={{fontSize: '36px',  fontWeight: '900', color: '#F8FAFC', margin: '6px 0'}}>
            {contribs}
          </h3>
          <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#10B981', fontWeight: '700'}}>
            Active Commits and PRs
          </span>
        </div>
      </div>
    </section>
  );
}