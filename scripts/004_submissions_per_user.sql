-- ════════════════════════════════════════════════════
-- Shift submissions to be per-registrant.
-- The team is defined entirely at registration (registrant + teammates),
-- so a submission belongs to the registrant rather than a separate team row.
-- ════════════════════════════════════════════════════

-- Add per-user ownership; keep team_id for backward compatibility.
alter table public.submissions
  add column if not exists user_id uuid references auth.users(id) on delete cascade;

alter table public.submissions alter column team_id drop not null;

-- Backfill any legacy rows from submitted_by.
update public.submissions
  set user_id = submitted_by
  where user_id is null and submitted_by is not null;

-- One submission per registrant.
create unique index if not exists submissions_user_id_key
  on public.submissions(user_id);

-- ── Replace team-based RLS with per-user policies ──
drop policy if exists "submissions_select_member" on public.submissions;
drop policy if exists "submissions_insert_member" on public.submissions;
drop policy if exists "submissions_update_member" on public.submissions;

drop policy if exists "submissions_select_own" on public.submissions;
create policy "submissions_select_own" on public.submissions
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "submissions_insert_own" on public.submissions;
create policy "submissions_insert_own" on public.submissions
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "submissions_update_own" on public.submissions;
create policy "submissions_update_own" on public.submissions
  for update to authenticated using (auth.uid() = user_id);

drop policy if exists "submissions_delete_own" on public.submissions;
create policy "submissions_delete_own" on public.submissions
  for delete to authenticated using (auth.uid() = user_id);
