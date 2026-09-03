const fs = require('fs');
const esbuild = require('esbuild');

const files = {};

files['AboutMe.jsx'] = [
  "import React from 'react';",
  "import { User } from 'lucide-react';",
  "",
  "export default function AboutMe({ profile }) {",
  "  return (",
  "    <section id=\"about\" style:{{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>",
  "      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>",
  "        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>",
  "          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700', letterSpacing: '2px'}}>01 //</span>",
  "          <h2 style={{fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#F8pAFC'}}>FOUNDATION &amp; PROFILD</h2>",
  "        </div>",
  "        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#9AA5B1', background: '#0D1420', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)'}}>",
  "          Command Center // Interactive",
  "        </span>",
  "      </div>",
  "",
  "      <div style={{",
    "    display: 'grid',",
    "    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',",
    "    gap: '20px'",
    "  }}>",
    "    <div style:{{",
    "      background: '#0D131C',",
    "      border: '1px solid rgba(0, 240, 255, 0.35)',",
    "      borderRadius: '12px',",
    "      overflow: 'hidden',",
    "      boxShadow: '0 12px 30px rgba(0,0,0,0.5)'",
    "    }}>",
    "      <div style:{{",
    "        background: '#131B26',",
    "        padding: '10px 16px',",
    "        display: 'flex',",
    "        alignItems: 'center',",
    "        justifyContent: 'space-between',",
    "        borderBottom: '1px solid #1E293B'",
    "      }}>",
    "        <div style={{display: 'flex', gap: '6px'}}>",
    "          <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444'}}></span>",
    "          <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B'}}></span>",
    "          <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#10B981''}}></span>",
    "        </div>",
    "        <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B'}}>",
    "          rahul@command-center:~ (bash)",
    "        </span>",
    "      </div>",
    "",
    "      <div style={{padding: '20px', fontFamily: 'JetBrains Mono', fontSize: '12px', lineHeight: '1.8'}}>",
    "        <div style={{color: '#00F0FF', marginBottom: '4px'}}>{'> whoami'}</div>",
    "        <div style={{color: '#F8pAFC', paddingLeft: '10px', marginBottom: '14px'}}>",
    "          {profile.roles.map((r, i) => (",
    "            <div key={i}>{'> ' + r}</div>",
    "          ))}",
    "        </div>",
    "",
    "        <div style={{color: '#00F0FE', marginBottom: '4px'}}>{'> status --current'}</div>",
    "        <div style={{color: '#CBD5E1', paddingLeft: '10px', marginBottom: '14px'}}>",
    "          Building scalable backend APIs &amp; full-stack systems",
    "        </div>",
    "",
    "        <div style={{color: '#00F0FE''}}>{'> ready_for_action '}<span style={{color: '#10B981'}}true</span><span className=\"blink\">_</span></div>",
    "      </div>",
    "    </div>",
    "",
    "    <div className=\"glass-panel\" style={{padding: '24px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>",
    "      <div>",
    "        <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>",
    "          <User size={18} color=\"#00F2FF\" />",
    "          <h3 style={{fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#00F0FF', fontWeight: '700', letterSpacing: '1px', margin: 0}}>",
    "            CORE ENGINEERING FOCUS",
    "          </h3>",
    "        </div>",
    "",
    "        <p style={{color: '#CBD5E1', fontSize: '13px', lineHeight: '1.7', marginBottom: '20px'}}>",
    "          {profile.summary}",
    "        </p>",
    "      </div>",
    "",
    "      <div style={{display: 'flex', flexWrap: 'wrap', gap: '0�y�O������ٚ[K�Y[�]UY�˛X\

Y�Y
HO�
����[�����^O^�ZH����[O^�ȋ��Y[�Έ	�L	�����ܙ\��Y]\Έ	͜	�����X��ܛ�[��	��M�	�����ܙ\��	�\��Y�ؘJM�NK���JI������܎�	�����	�����۝�[Z[N�	ҙ]��Z[��[ۛ������۝�^�N�	�L\	�����۝�ZY��	͌	ȋ��_H��������Y�H�����[�����
J_H����]������]������]�������X�[ۏ����Nȋ��H��K���[�	���N���[\����۝X����\����	�HH�[\ܝ�XX����H	ܙXX�	�ȋ��[\ܝ��]X�[��Y[�XZ[�ؙHH���H	�X�YK\�XX�	�ȋ�����^ܝY�][�[��[ۈ�۝X����\���ٚ[HJHȋ���]\��
������\�YW��۝X���[O^��Y[�Έ	����	�X^�Y�	�L	�X\��[��	�]]��^[Yێ�	��[�\��_O����]��\�Ә[YOW��\��\[�[��[O^��Y[�Έ	�͜�	�X\��[����N�	̍	��ܙ\��	�\��Y�ؘJ��MK��I����Y�Έ	���ؘJ�JI�_O�����[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ����܎�	��������۝�^�N�	�L�	��۝�ZY��	��	�]\��X�[�Έ	̜	�_O�H����[�������[O^�ٛ۝�^�N�	̎	��۝�ZY��	�	�]\��X�[�Έ	�\	���܎�	�ю�Q���X\��[��	�M�	�_O��US��P��������[O^����܎�	��БQLI��۝�^�N�	�M	�X^�Y�	͌	�X\��[��	�]]��]]��[�RZY��	�K���_O�����[��܈�[\�X��]�[�Y[��]�H�X��[�\��]X�\�K[�RH�\�[\���X�ܘ][ۜˈ�����������]��[O^��\�^N�	ٛ^	��\�Y�P�۝[��	��[�\���\�	�L�	��^ܘ\�	�ܘ\	�X\��[����N�	�M�	�_O����H����Y�^��ٚ[K�[��˙�]X�H���\��]W�؛[�������[W����[�\��ܙY�\��\������\�Ә[YOW��\��X�\������[O^��\�^N�	�[�[�KY�^	�[Yے][\Έ	��[�\���\�	�	�Y[�Έ	�LN	��ܙ\��Y]\Έ	�L	��X��ܛ�[��	��M�	��ܙ\��	�\��Y�ؘJ��MK�
I���܎�	�э�ѐI�^X�ܘ][ێ�	ۛۙI��۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L�	��۝�ZY��	͌	�_O�����]X��^�O^�M�H��܏W����W�ψ����]X�����O�������H����Y�^��ٚ[K�[��˛[��Y[�H���\��]W�؛[�������[W����[�\��ܙY�\��\������\�Ә[YOW��\��X�\������[O^��\�^N�	�[�[�KY�^	�[Yے][\Έ	��[�\���\�	�	�Y[�Έ	�LN	��ܙ\��Y]\Έ	�L	��X��ܛ�[��	��M�	��ܙ\��	�\��Y�ؘJM�NK��
I���܎�	�э�ѐI�^X�ܘ][ێ�	ۛۙI��۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L�	��۝�ZY��	͌	�_O����[��Y[��^�O^�M�H��܏W������ψ���[��Y[�����O�������H����Y�^��ٚ[K�[��˜ܝ��[�H���\��]W�؛[�������[W����[�\��ܙY�\��\������\�Ә[YOW��\��X�\������[O^��\�^N�	�[�[�KY�^	�[Yے][\Έ	��[�\���\�	�	�Y[�Έ	�LN	��ܙ\��Y]\Έ	�L	��X��ܛ�[��	��M�	��ܙ\��	�\��Y�ؘJM��L�K�L�
I���܎�	�э�ѐI�^X�ܘ][ێ�	ۛۙI��۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L�	��۝�ZY��	͌	�_O�����ؙH�^�O^�M�H��܏W��M���W�ψ���ܝ��[ȋ���O�����]������]���������[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L\	���܎�	�͍���_O����ܘY�Y�܈�Z[�Z�����Z[�]�XX���H	�[\��]H��������ٛ��\�����
Nȋ��H��K���[�	���N��ؚ�X��[��Y\��[\�K��ܑXX�

ٛ���WJHO��H\؝Z[��[�ٛܛT�[����K��Y\��	ڜ�	�JN�˝ܚ]Q�[T�[��	�ܘ����\ۙ[����
�����K	�]�	�N�ۜ��K���	���P��T��H	�
���NH�]�
\��H�ۜ��K���	��S��SQH	�
���
�	Έ	�
�\���Y\��Y�JNB�JN�