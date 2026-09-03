const { save } = require('./make_app_builder.cjs');

// AboutMe

save('src/components/AboutMe.jsx', `	import React from 'react';
import { Terminal, Code2, User, Sparkles } from 'lucide-react';

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
            <div style={{color: '#00F0FF', marginBottom: '4px'}>&gt; whoami</div>
            <div style={{color: '#F8FAFC', paddingLeft: '10px', marginBottom: '14px'}}>
              {profile.roles.map((r, i) => (
                <div key=ti>v{r }</div>
              ))}
            </div>

            <div style={{color: '#00F0FE', marginBottom: '4px'}}>&gt; status --current</div>
            <div style={{color: '#CBD5E1', paddingLeft: '10px', marginBottom: '1D	�_O���Z[[����[X�H�X��[�T\�	�[\��[\�X���\�[\�]����]��[O^����܎�	�������_O�����XYWٛܗ�X�[ۈ�[��[O^����܎�	��L�NI�_]�YO��[���[��\�Ә[YOH��[�ȏ����[���]����]����]����]��\�Ә[YOH��\��\[�[��[O^��Y[�Έ	̍	���][ێ�	ܙ[]]�I�\�^N�	ٛ^	��^\�X�[ێ�	���[[���\�Y�P�۝[��	��X�KX�]�Y[��_O��]���]��[O^��\�^N�	ٛ^	�[Yے][\Έ	��[�\���\�	�	�X\��[����N�	�M�	�_O��\�\��^�O^�NH��܏H�������ς���[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L�	���܎�	����I��۝�ZY��	��	�]\��X�[�Έ	�\	�X\��[��_O���ԑH��S�QT�S�����T�ς��]�����[O^����܎�	��БQLI��۝�^�N�	�L�	�[�RZY��	�K���X\��[����N�	̌	�_O�����ٚ[K��[[X\�__B�����]����]��[O^��\�^N�	ٛ^	��^ܘ\�	�ܘ\	��\�	�	�_O����ٚ[K�Y[�]UY�˛X\

Y�Y
HO�
��[���^O^�YB��[O^�Y[�Έ	�L	���ܙ\��Y]\Έ	͜	���X��ܛ�[��	��M�	���ܙ\��	�\��Y�ؘJM�NK���JI����܎�	��������۝�[Z[N�	ҙ]��Z[��[ۛ����۝�^�N�	�L\	���۝�ZY��	͌	_B����Y�B���[���
J_B��]����]����]�����X�[ۏ��
NX
W��ۜ��K���	�XZ�H��\ۙ[���]�Y	�N