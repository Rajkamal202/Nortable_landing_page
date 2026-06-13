-- ════════════════════════════════════════════════════
-- Teams, Team Members & Submissions (additive migration)
-- ════════════════════════════════════════════════════

-- ── TEAMS ─────────────────────────────────────────────
create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  join_code text not null unique,
  track text,
  owner_id uuid references auth.users(id) on delete set null,
  created_at timestamptz default now()
);

-- ── TEAM MEMBERS ──────────────────────────────────────
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  team_id uuid references public.teams(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  full_name text,
  role text default 'member',
  created_at timestamptz default now(),
  unique (team_id, user_id)
);

-- ── SUBMISSIONS (one per team) ────────────────────────
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  team_id uuid references public.teams(id) on delete cascade unique,
  project_name text not null,
  description text,
  github_url text not null,
  live_url text not null,
  track text,
  submitted_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz default now(),
  created_at timestamptz default now()
);

-- ── Helper: is the current user a member of a given team? ──
-- SECURITY DEFINER avoids recursive RLS evaluation between
-- teams <-> team_members policies.
create or replace function public.is_team_member(p_team_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.team_members
    where team_id = p_team_id and user_id = auth.uid()
  );
$$;

-- ════════════════════════════════════════════════════
-- RLS
-- ════════════════════════════════════════════════════
alter table public.teams enable row level security;
alter table public.team_members enable row level security;
alter table public.submissions enable row level security;

-- ── TEAMS policies ────────────────────────────────────
-- Anyone authenticated can look up a team (needed to join by code) and
-- members can see their team. Keep select open to authenticated users.
drop policy if exists "teams_select" on public.teams;
create policy "teams_select" on public.teams
  for select to authenticated using (true);

drop policy if exists "teams_insert_owner" on public.teams;
create policy "teams_insert_owner" on public.teams
  for insert to authenticated with check (auth.uid() = owner_id);

drop policy if exists "teams_update_owner" on public.teams;
create policy "teams_update_owner" on public.teams
  for update to authenticated using (auth.uid() = owner_id);

drop policy if exists "teams_delete_owner" on public.teams;
create policy "teams_delete_owner" on public.teams
  for delete to authenticated using (auth.uid() = owner_id);

-- ── TEAM MEMBERS policies ─────────────────────────────
-- A user can see members of any team they belong to.
drop policy if exists "team_members_select" on public.team_members;
create policy "team_members_select" on public.team_members
  for select to authenticated using (public.is_team_member(team_id));

-- A user can only add themselves to a team (create or join).
drop policy if exists "team_members_insert_self" on public.team_members;
create policy "team_members_insert_self" on public.team_members
  for insert to authenticated with check (auth.uid() = user_id);

-- A user can remove their own membership (leave team).
drop policy if exists "team_members_delete_self" on public.team_members;
create policy "team_members_delete_self" on public.team_members
  for delete to authenticated using (auth.uid() = user_id);

-- ── SUBMISSIONS policies ──────────────────────────────
-- Team members can read their team's submission.
drop policy if exists "submissions_select_member" on public.submissions;
create policy "submissions_select_member" on public.submissions
  for select to authenticated using (public.is_team_member(team_id));

-- Team members can create their team's submission.
drop policy if exists "submissions_insert_member" on public.submissions;
create policy "submissions_insert_member" on public.submissions
  for insert to authenticated with check (public.is_team_member(team_id));

-- Team members can update their team's submission.
drop policy if exists "submissions_update_member" on public.submissions;
create policy "submissions_update_member" on public.submissions
  for update to authenticated using (public.is_team_member(team_id));
