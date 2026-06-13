-- Create registrations table
create table if not exists public.registrations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text not null,
  college text not null,
  team_status text not null,
  team_bio text,
  teammates jsonb,
  track_selection text not null,
  experience text not null,
  hear_about text,
  primary_goal text not null,
  total_price numeric not null,
  ticket_serial text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.registrations enable row level security;

-- Create policies (safe checks if they exist, or standard drop and recreate)
drop policy if exists "Allow public insert (for registrations)" on public.registrations;
create policy "Allow public insert (for registrations)" on public.registrations
  for insert with check (true);

drop policy if exists "Users can view their own registrations" on public.registrations;
create policy "Users can view their own registrations" on public.registrations
  for select using (auth.uid() = user_id);

drop policy if exists "Users can update their own registrations" on public.registrations;
create policy "Users can update their own registrations" on public.registrations
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
