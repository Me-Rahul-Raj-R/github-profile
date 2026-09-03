import React from 'react';

export default function ProblemSolving({ leetcode }) {
  return (
    <section id="problem-solving" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FE', fontSize: '13px', fontWeight: '700'}}>06 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC'}}>DSA &amp; PROBLEM SOLVING</h2>
        </div>
        <a href={leetcode.url} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#F59E0B', textDecoration: 'none', fontWeight: '700'}}>
          VIEW LEETCODE PROFILE&#8594;
        </a>
      </div>

      <div style={{
        background: 'linear-gradient(180deg, #090E16 0%, #06090E 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px'}}>
          <div style={{background: '#0D1420', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '12px', padding: '18px', textAlign: 'center'}}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>TOTAL STAT</span>
            <h3 style={{fontSize: '38px', fontWeight: '900', color: '#F8FAFC', margin: '4px 0'}}>{leetcode.totalSolved}</h3>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#10B981', fontWeight: '700'}}>{leetcode.acceptanceRate} Acceptance</span>
          </div>

          <div style={{background: '#0D1420', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '18px'}}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#10B981', fontWeight: '700'}}>EASY LEVEL</span>
            <h4 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>{leetcode.easy} <span style={{fontSize: '12px', color: '#64748B'}}> / {leetcode.easyTotal}</span></h4>
            <div style={{height: '4px', background: '#1E293B', borderRadius: '2px', overflow: 'hidden'}}>
              <div style={{width: Math.round((leetcode.easy / leetcode.easyTotal) * 100) + '%', height: '100%', background: '#10B981'}}></div>
            </div>
          </div>

          <div style={{
            background: '#0D1420',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '16px',
            padding: '18px'
          }}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#F59E0B', fontWeight: '700'}}>MEDIUM LEVEL</span>
            <h4 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>{leetcode.medium} <span style={{fontSize: '12px', color: '#64748B'}}> / {leetcode.mediumTotal}</span></h4>
            <div style={{height: '4px', background: '#1E293B', borderRadius: '2px', overflow: 'hidden'}}>
              <div style={{width: Math.round((leetcode.medium / leetcode.mediumTotal) * 100) + '%', height: '100%', background: '#F59E0B'}}></div>
            </div>
          </div>

          <div style={{
            background: '#0D1420',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '16px',
            padding: '18px'
          }}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#EF4444', fontWeight: '700'}}>HARD LEVEL</span>
            <h4 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>{leetcode.hard} <span style={{fontSize: '12px', color: '#64748B'}}> / {leetcode.hardTotal}</span></h4>
            <div style={{height: '4px', background: '#1E293B', borderRadius: '2px', overflow: 'hidden'}}>
              <div style={{width: Math.round((leetcode.hard / leetcode.hardTotal) * 100) + '%', height: '100%', background: '#EF4444'}}></div>
            </div>
          </div>
        </div>

        <div style={{
          background: 'rgba(15, 22, 34, 0.85)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <div>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>GLOBAL RANK</span>
              <p style={{fontFamily: 'JetBrains Mono', fontSize: '15px', color: '#00F0FE', fontWeight: '800'}}>#{leetcode.rank}</p>
            </div>
            <div>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>YEAR SUBMISSIONS</span>
              <p style={{fontFamily: 'JetBrains Mono', fontSize: '15px', color: '#F8FAFC', fontWeight: '800'}}>{leetcode.submissionsYear}</p>
            </div>
            <div>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>ACTIVE DAYS</span>
              <p style={{fontFamily: 'JetBrains Mono', fontSize: '15px', color: '#F8FAFC', fontWeight: '800'}}>{leetcode.activeDays}</p>
            </div>
            <div>
              <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>MAX STREAK</span>
              <p style={{fontFamily: 'JetBrains Mono', fontSize: '15px', color: '#F59E0B', fontWeight: '800'}}>{leetcode.maxStreak} Days</p>
            </div>
          </div>

          <div style={{background: '#0D1420', padding: '6px 12px', borderRadius: '8px', border: '1px solid #10B981'}}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#10B981', fontWeight: '700'}}>
              &#9674; {leetcode.resumeMetric}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}