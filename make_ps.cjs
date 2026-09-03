const fs = require('fs');
const esbuild = require('esbuild');

const code = `import React from 'react';

export default function ProblemSolving({leetcode})
{
  return (
    <section id="problem-solving" style={{padding: '30px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontFamily: 'JetBrains Mono', color: '#00F0FF', fontSize: '13px', fontWeight: '700'}}>06 //</span>
          <h2 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC'}}>DSA &amp; PROBLEM SOLVING</h2>
        </div>
        <a href={leetcode.url} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#F59E0B', textDecoration: 'none', fontWeight: '700'}}>
          VIEW LEETCODE PROFILE &#8594;
        </a>
      </div>

      <div style={{
        background: 'linear-gradient(180deg, #090E16 0%, #06090E 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '20px'
        }}>
          <div style={{
            background: '#0D1420',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '12px',
            padding: '18px',
            textAlign: 'center'}}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#64748B'}}>TOTAL STAT</span>
            <h3 style={{fontSize: '38px', fontWeight: '900', color: '#F8pAFC', margin: '4px 0'}}>{leetcode.totalSolved}</h3>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#10B981', fontWeight: '700'}}>{leetcode.acceptanceRate} Acceptance</span>
          </div>

          <div style={{background: '#0D1420', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '18px'}}>
            <span style={{fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#10B981', fontWeight: '700'}}EASY LEVEL</span>
            <h4 style={{fontSize: '22px', fontWeight: '800', color: '#F8FAFC', margin: '6px 0'}}>{leetcode.easy} <span style={{fontSize: '12px', color: '#64748B'}>/ {leetcode.easyTotal}</span></h4>
            <div style={{height: '4px', background: '#1E293B', borderRadius: '2px', overflow: 'hidden'}}>
              <div style={{width: Math.round((leetcode.easy / leetcode.easyTotal) * 100) + '%', height: '100%', background: '#10B981''}}></div>
            </div>
          </div>

          <div style={{background: '#0D1420', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '18px'}}>
            <span style={{fontF`[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L	���܎�	�эNQL���۝�ZY��	��	�_SQQUSHU�S��[����[O^�ٛ۝�^�N�	̌�	��۝�ZY��	�	���܎�	�ю�Q���X\��[��	͜	�_O��Y]��K�YY][_H�[��[O^�ٛ۝�^�N�	�L�	���܎�	�͍���O���Y]��K�YY][U�[O��[�����]��[O^��ZY��	�	��X��ܛ�[��	��QL�LЉ��ܙ\��Y]\Έ	̜	�ݙ\���Έ	�Y[��_O��]��[O^���Y�X]���[�

Y]��K�YY][H�Y]��K�YY][U�[
H
�L
H
�	�I�ZY��	�L	I��X��ܛ�[��	�эNQL��_O��]����]����]����]��[O^�ؘX��ܛ�[��	��M�	��ܙ\��	�\��Y�ؘJ��K����I��ܙ\��Y]\Έ	�M�	�Y[�Έ	�N	�_O���[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L	���܎�	��Q�	��۝�ZY��	��	�_RT�U�S��[����[O^�ٛ۝�^�N�	̌�	��۝�ZY��	�	���܎�	�юQ���X\��[��	͜	�_O��Y]��K�\�H�[��[O^�ٛ۝�^�N�	�L�	���܎�	�͍���O���Y]��K�\��[O��[�����]��[O^��ZY��	�	��X��ܛ�[��	��QL�LЉ��ܙ\��Y]\Έ	̜	�ݙ\���Έ	�Y[��_O��]��[O^���Y�X]���[�

Y]��K�\��Y]��K�\��[
H
�L
H
�	�I�ZY��	�L	I��X��ܛ�[��	��Q�	�_O��]����]����]����]����]��[O^�ؘX��ܛ�[��	ܙؘJMK����JI��ܙ\��	�\��Y�ؘJM�NK���I��ܙ\��Y]\Έ	�L�	�Y[�Έ	�M��	�\�^N�	ٛ^	��\�Y�P�۝[��	��X�KX�]�Y[��[Yے][\Έ	��[�\���^ܘ\�	�ܘ\	��\�	�M�	�_O��]��[O^��\�^N�	ٛ^	��\�	̌	��^ܘ\�	�ܘ\	�_O��]����[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L	���܎�	�͍���O��АS�S����[����[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�M\	���܎�	����I��۝�ZY��	�	�_O���Y]��K��[��O����]���]����[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L	���܎�	�͍���O�QPT��P�RU����[����[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�M\	���܎�	�юQ����۝�ZY��	�	�_O��Y]��K��X�Z\��[ۜ�YX\�O����]���]����[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L	���܎�	�͍���O�P�U�HVT���[����[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�M\	���܎�	�ю�Q����۝�ZY��	�	�_O��Y]��K�X�]�Q^\�O����]���]����[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L	���܎�	�͍���_O�PV��PR���[����[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�M\	���܎�	�эNQL���۝�ZY��	�	�_O��Y]��K�X^��XZ�H^\�����]����]����]��[O^�ؘX��ܛ�[��	��M�	�Y[�Έ	͜L�	��ܙ\��Y]\Έ	�	��ܙ\��	�\��Y�L�NI�_O���[��[O^�ٛ۝�[Z[N�	ҙ]��Z[��[ۛ���۝�^�N�	�L�	���܎�	��L�NI��۝�ZY��	��	�_O��	��M����Y]��K��\�[YSY]�X�B���[����]����]����]�����X�[ۏ��
NX�\؝Z[��[�ٛܛT�[����K��Y\��	ڜ�	�JN�˝ܚ]Q�[T�[��	�ܘ����\ۙ[����؛[T���[�˚��	���K	�]�	�N�ۜ��K���	��؛[T���[���X��\�ٝ[Hܚ][�[��[Y]YI�N