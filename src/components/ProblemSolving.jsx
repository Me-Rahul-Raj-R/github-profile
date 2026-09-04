import React from 'react';
import { Award, Flame, Calendar, CheckCircle2, TrendingUp, ExternalLink, Code2 } from 'lucide-react';

export default function ProblemSolving({ leetcode }) {
  const easyPercent = Math.round((leetcode.easy / leetcode.easyTotal) * 100);
  const medPercent = Math.round((leetcode.medium / leetcode.mediumTotal) * 100);
  const hardPercent = Math.round((leetcode.hard / leetcode.hardTotal) * 100);

  return (
    <section id="problem-solving" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700'}}>06 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC'}}>DSA &amp; PROBLEM SOLVING</h2>
        </div>
        <a 
          href={leetcode.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontFamily: 'JetBrains Mono', 
            fontSize: '11px', 
            color: '#F59E0B', 
            textDecoration: 'none', 
            fontWeight: '700',
            background: 'rgba(245, 158, 11, 0.12)',
            padding: '6px 14px',
            borderRadius: '6px',
            border: '1px solid rgba(245, 158, 11, 0.35)'
          }}
        >
          <Code2 size={13} color="#F59E0B" />
          @{leetcode.username || 'Rahul-Raj-R'} ON LEETCODE <ExternalLink size={12} />
        </a>
      </div>

      <div style={{
        background: 'linear-gradient(180deg, #090E16 0%, #06090E 100%)',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.55)'
      }}>
        {/* Top Stat Grid */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', marginBottom: '20px'}}>
          {/* Main Solved Circular Card */}
          <div style={{
            background: '#0D1420', 
            border: '1px solid rgba(0, 240, 255, 0.35)', 
            borderRadius: '12px', 
            padding: '18px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B', letterSpacing: '1px'}}>TOTAL SOLVED</span>
            <div style={{display: 'flex', alignItems: 'baseline', gap: '4px', margin: '6px 0'}}>
              <h3 style={{fontSize: '38px', fontWeight: '900', color: '#F8FAFC', lineHeight: 1}}>{leetcode.totalSolved}</h3>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#64748B'}}>/{leetcode.totalAvailable || 1042}</span>
            </div>
            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#10B981', fontWeight: '700'}}>{leetcode.acceptanceRate}</span>
              <span style={{fontSize: '10px', color: '#64748B'}}>? {leetcode.totalSubmissions || 450} Submissions</span>
            </div>
          </div>

          {/* Easy Card */}
          <div style={{background: '#0D1420', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '18px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#10B981', fontWeight: '700'}}>EASY</span>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>{easyPercent}%</span>
            </div>
            <h4 style={{fontSize: '24px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>
              {leetcode.easy} <span style={{fontSize: '12px', color: '#64748B'}}>/ {leetcode.easyTotal}</span>
            </h4>
            <div style={{height: '5px', background: '#1E293B', borderRadius: '3px', overflow: 'hidden'}}>
              <div style={{width: easyPercent + '%', height: '100%', background: '#10B981'}}></div>
            </div>
          </div>

          {/* Medium Card */}
          <div style={{background: '#0D1420', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '18px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#F59E0B', fontWeight: '700'}}>MEDIUM</span>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>{medPercent}%</span>
            </div>
            <h4 style={{fontSize: '24px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>
              {leetcode.medium} <span style={{fontSize: '12px', color: '#64748B'}}>/ {leetcode.mediumTotal}</span>
            </h4>
            <div style={{height: '5px', background: '#1E293B', borderRadius: '3px', overflow: 'hidden'}}>
              <div style={{width: medPercent + '%', height: '100%', background: '#F59E0B'}}></div>
            </div>
          </div>

          {/* Hard Card */}
          <div style={{background: '#0D1420', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '18px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#EF4444', fontWeight: '700'}}>HARD</span>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>{hardPercent}%</span>
            </div>
            <h4 style={{fontSize: '24px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>
              {leetcode.hard} <span style={{fontSize: '12px', color: '#64748B'}}>/ {leetcode.hardTotal}</span>
            </h4>
            <div style={{height: '5px', background: '#1E293B', borderRadius: '3px', overflow: 'hidden'}}>
              <div style={{width: hardPercent + '%', height: '100%', background: '#EF4444'}}></div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div style={{
          background: 'rgba(15, 22, 34, 0.9)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '16px',
          marginBottom: '20px'
        }}>
          <div>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B', display: 'block', marginBottom: '2px'}}>GLOBAL RANK</span>
            <p style={{fontFamily: 'JetBrains Mono', fontSize: '16px', color: '#00F0FF', fontWeight: '800', margin: 0}}>#{leetcode.rank}</p>
          </div>
          <div>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px'}}>
              <Calendar size={11} /> 1-YR SUBMISSIONS
            </span>
            <p style={{fontFamily: 'JetBrains Mono', fontSize: '16px', color: '#F8FAFC', fontWeight: '800', margin: 0}}>{leetcode.submissionsYear}</p>
          </div>
          <div>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px'}}>
              <CheckCircle2 size={11} color="#10B981" /> ACTIVE DAYS
            </span>
            <p style={{fontFamily: 'JetBrains Mono', fontSize: '16px', color: '#F8FAFC', fontWeight: '800', margin: 0}}>{leetcode.activeDays} Days</p>
          </div>
          <div>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px'}}>
              <Flame size={11} color="#F59E0B" /> MAX STREAK
            </span>
            <p style={{fontFamily: 'JetBrains Mono', fontSize: '16px', color: '#F59E0B', fontWeight: '800', margin: 0}}>{leetcode.maxStreak} Days</p>
          </div>
          <div>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px'}}>
              <Award size={11} color="#A78BFA" /> BADGES ({leetcode.badgesCount || 4})
            </span>
            <p style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#A78BFA', fontWeight: '700', margin: 0}}>{leetcode.mostRecentBadge || '50 Days Badge 2026'}</p>
          </div>
        </div>

        {/* Recent Solved Problems & Skills Tags */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px'}}>
          {/* Recent Accepted Problems */}
          <div style={{background: '#0D1420', border: '1px solid #1E293B', borderRadius: '12px', padding: '16px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#38BDF8', fontWeight: '700', letterSpacing: '0.5px'}}>
                RECENT ACCEPTED SOLUTIONS
              </span>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>Latest AC</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              {(leetcode.recentAccepted || []).map((problem, idx) => (
                <a 
                  key={idx} 
                  href={problem.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: '#111927', 
                    padding: '8px 12px', 
                    borderRadius: '6px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <div>
                    <span style={{fontFamily: 'Inter', fontSize: '13px', fontWeight: '600', color: '#F8FAFC', display: 'block'}}>
                      {problem.title}
                    </span>
                    <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>
                      {problem.tag} ? {problem.time}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'JetBrains Mono', 
                    fontSize: '10px', 
                    fontWeight: '700',
                    color: problem.difficulty === 'Hard' ? '#EF4444' : problem.difficulty === 'Medium' ? '#F59E0B' : '#10B981',
                    background: problem.difficulty === 'Hard' ? 'rgba(239, 68, 68, 0.15)' : problem.difficulty === 'Medium' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}>
                    {problem.difficulty}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Focus & Skills */}
          <div style={{background: '#0D1420', border: '1px solid #1E293B', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <div style={{marginBottom: '12px'}}>
                <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#10B981', fontWeight: '700', letterSpacing: '0.5px'}}>
                  SOLVING DOMAINS &amp; SKILLS
                </span>
              </div>
              <p style={{fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '14px'}}>
                Active daily problem solver specializing in Algorithmic Optimization, Dynamic Programming, Graph Traversal, Two Pointers, and Database querying with high acceptance accuracy.
              </p>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                {(leetcode.skills || ['Java', 'Full stack web development', 'SQL']).map((skill, idx) => (
                  <span 
                    key={idx}
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '11px',
                      color: '#00F0FF',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#F59E0B'}}>
                &#9670; 2 Problems Currently Attempting
              </span>
              <a 
                href={leetcode.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#38BDF8', textDecoration: 'none', fontWeight: '600'}}
              >
                Full History &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
