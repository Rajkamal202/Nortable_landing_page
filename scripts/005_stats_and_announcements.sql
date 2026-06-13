-- ============================================================
-- 005: Stats functions + announcements
-- Scales the platform for 3k+ registrations.
-- ============================================================

-- ---------- Announcements ----------
create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  pinned boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.announcements enable row level security;

-- Anyone signed in (participants) can read announcements.
drop policy if exists "announcements_read_all" on public.announcements;
create policy "announcements_read_all" on public.announcements
  for select using (true);

-- Writes happen only via the service role (admin dashboard), which
-- bypasses RLS, so no public insert/update/delete policies are added.

create index if not exists announcements_created_idx
  on public.announcements (pinned desc, created_at desc);

-- ---------- Stats: headline numbers ----------
-- Single round-trip aggregate so the admin never scans 3k rows for counts.
create or replace function public.admin_registration_stats()
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'total', count(*),
    'revenue', coalesce(sum(total_price), 0),
    'solo', count(*) filter (where team_status = 'solo'),
    'looking', count(*) filter (where team_status = 'looking'),
    'have_team', count(*) filter (where team_status = 'have_team'),
    'today', count(*) filter (where created_at >= date_trunc('day', timezone('utc', now())))
  )
  from public.registrations;
$$;

-- ---------- Stats: track breakdown ----------
create or replace function public.admin_track_breakdown()
returns table(track text, count bigint)
language sql
security definer
set search_path = public
as $$
  select coalesce(track_selection, 'Unspecified') as track, count(*) as count
  from public.registrations
  group by track_selection
  order by count desc;
$$;

-- ---------- Stats: registrations per day (last 30 days) ----------
create or replace function public.admin_daily_registrations()
returns table(day date, count bigint)
language sql
security definer
set search_path = public
as $$
  select date_trunc('day', created_at)::date as day, count(*) as count
  from public.registrations
  where created_at >= timezone('utc', now()) - interval '30 days'
  group by 1
  order by 1;
$$;
