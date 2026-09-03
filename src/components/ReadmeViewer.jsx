import React, { useState, useEffect } from 'react';
import { Copy, Check, Download, FileText } from 'lucide-react';

export default function ReadmeViewer({ readmeContent }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{padding: '90px 20px 40px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{
        background: '#090E16',
        border: '1px solid rgba(0, 240, 255, 0.4)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
      }}>
        <div style={{
          background: '#121A26',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1E293B'
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <FileText size={18} color="#00F2FF" />
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#F8FAFC', fontWeight: '700'}}>README.md (GitHub Profile) Master</span>
          </div>
          <button
            onClick={handleCopy}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '6px',
              background: copied ? '#10B981' : '#00F2FF',
              border: 'none',
              color: '#080D11',
              fontFamily: 'JetBrains Mono',
              fontSize: '11px',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'COPIED!' : 'COPY FULLMARHDOWN'}
          </button>
        </div>
        <pre style={{
          padding: '20px',
          fontFamily: 'JetBrains Mono',
          fontSize: '12px',
          color: '#CBD5E1',
          lineHeight: '1.6',
          overflowX: 'auto',
          maxHeight: '600px',
          background: '#06090E',
          margin: 0
        }}>
          {readmeContent}
        </pre>
      </div>
    </div>
  );
}