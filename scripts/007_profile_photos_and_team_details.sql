-- Add profile photo to registrations
alter table public.registrations add column if not exists profile_photo_url text;

-- Create team_members_details table to store detailed member info
create table if not exists public.team_members_details (
  id uuid default gen_random_uuid() primary key,
  registration_id uuid not null references public.registrations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete set null,
  full_name text not null,
  email text not null,
  occupation text,
  experience text,
  profile_photo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.team_members_details enable row level security;

-- Users can only see/edit their own team members (via registration.user_id)
drop policy if exists "Users can view their own team members" on public.team_members_details;
create policy "Users can view their own team members" on public.team_members_details
  for select using (
    exists (
      select 1 from public.registrations
      where id = team_members_details.registration_id
      and user_id = auth.uid()
    )
  );

drop policy if exists "Users can insert team members for their registration" on public.team_members_details;
create policy "Users can insert team members for their registration" on public.team_members_details
  for insert with check (
    exists (
      select 1 from public.registrations
      where id = registration_id
      and user_id = auth.uid()
    )
  );

drop policy if exists "Users can delete their own team members" on public.team_members_details;
create policy "Users can delete their own team members" on public.team_members_details
  for delete using (
    exists (
      select 1 from public.registrations
      where id = team_members_details.registration_id
      and user_id = auth.uid()
    )
  );
