'use client';

import { useState } from 'react';
import { Cloud, KeyRound, GitBranch, Copy, Check, Trophy, Download, Box } from 'lucide-react';
import {
  Block,
  SectionTitle,
  Grid,
  VoucherCard,
  BountyCard,
  Btn,
} from '../styles';

const VOUCHERS = [
  { t: 'AWS Credits', s: '$100 free cloud usage', code: 'AWS-NRT26-9X4F2', Icon: Cloud },
  { t: 'OpenAI API', s: '$50 in API tokens', code: 'OAI-NRT26-K7M1Q', Icon: KeyRound },
  { t: 'GitHub Pro', s: '3 months free', code: 'GH-NRT26-PRO88', Icon: GitBranch },
];

const BOUNTIES = [
  { amt: '₹10,000', by: 'GitHub Copilot', desc: 'Best use of Copilot in your build workflow.' },
  { amt: '₹15,000', by: 'Supabase', desc: 'Most creative use of Supabase realtime + RLS.' },
  { amt: '₹8,000', by: 'Vercel', desc: 'Best AI-powered app deployed on Vercel.' },
];

const TEMPLATES = [
  { t: 'Next.js + Supabase Starter', Icon: Box },
  { t: 'Python AI Agent Template', Icon: Box },
  { t: 'MCP Server Boilerplate', Icon: Box },
];

export default function Bounties() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied((c) => (c === code ? null : c)), 1800);
  };

  return (
    <Block>
      <SectionTitle>
        Bounties, API Keys &amp; Sandbox <span className="tag">Builder Perks</span>
      </SectionTitle>

      <Grid $min="240px">
        {VOUCHERS.map((v) => (
          <VoucherCard key={v.t}>
            <div className="vh">
              <div className="ic">
                <v.Icon size={20} />
              </div>
              <div>
                <div className="t">{v.t}</div>
                <div className="s">{v.s}</div>
              </div>
            </div>
            <div className="code">
              <span>{v.code}</span>
              <button onClick={() => copy(v.code)}>
                {copied === v.code ? (
                  <Check size={13} style={{ display: 'inline', color: '#48d64c' }} />
                ) : (
                  <Copy size={13} style={{ display: 'inline' }} />
                )}
              </button>
            </div>
          </VoucherCard>
        ))}
      </Grid>

      <div style={{ marginTop: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Trophy size={14} /> Track Bounties
        </div>
        <Grid $min="240px">
          {BOUNTIES.map((b, i) => (
            <BountyCard key={i}>
              <div className="amt">{b.amt}</div>
              <div className="by">by {b.by}</div>
              <div className="desc">{b.desc}</div>
            </BountyCard>
          ))}
        </Grid>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.85rem' }}>
          Starter Boilerplates
        </div>
        <Grid $min="240px">
          {TEMPLATES.map((t) => (
            <VoucherCard key={t.t}>
              <div className="vh">
                <div className="ic">
                  <t.Icon size={20} />
                </div>
                <div className="t">{t.t}</div>
              </div>
              <Btn $variant="ghost">
                <Download size={15} /> Download
              </Btn>
            </VoucherCard>
          ))}
        </Grid>
      </div>
    </Block>
  );
}
