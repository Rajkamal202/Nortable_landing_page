'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { ShieldCheck } from 'lucide-react';
import { adminLogin } from './actions';
import { LoginShell, LoginCard, SubmitBtn } from './styles';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <SubmitBtn type="submit" disabled={pending}>
      {pending ? 'Checking…' : 'Enter Dashboard'}
    </SubmitBtn>
  );
}

export default function AdminLogin() {
  const [state, formAction] = useActionState(adminLogin, {});

  return (
    <LoginShell>
      <LoginCard action={formAction}>
        <ShieldCheck size={26} style={{ color: '#48d64c', marginBottom: '0.75rem' }} />
        <h1>Admin Access</h1>
        <p>Enter the organizer password to view registrations, teams, and submissions.</p>
        <label htmlFor="admin-pw">Password</label>
        <input id="admin-pw" name="password" type="password" autoComplete="current-password" autoFocus />
        {state?.error && <div className="err">{state.error}</div>}
        <Submit />
      </LoginCard>
    </LoginShell>
  );
}
