'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { LoginShell, LoginCard, SubmitBtn } from './styles';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? 'Login failed. Try again.');
    } catch {
      setError('Network error. Try again.');
    } finally {
      setPending(false);
    }
  }

  return (
    <LoginShell>
      <LoginCard onSubmit={handleSubmit}>
        <ShieldCheck size={26} style={{ color: '#48d64c', marginBottom: '0.75rem' }} />
        <h1>Admin Access</h1>
        <p>Enter the organizer password to view registrations, teams, and submissions.</p>
        <label htmlFor="admin-pw">Password</label>
        <input
          id="admin-pw"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="err">{error}</div>}
        <SubmitBtn type="submit" disabled={pending}>
          {pending ? 'Checking…' : 'Enter Dashboard'}
        </SubmitBtn>
      </LoginCard>
    </LoginShell>
  );
}
