import pg from 'pg';

const { Client } = pg;

let connectionString =
  process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;

if (!connectionString) {
  console.error('Missing POSTGRES_URL_NON_POOLING / POSTGRES_URL');
  process.exit(1);
}

// Strip sslmode so our explicit ssl config (rejectUnauthorized:false) wins.
connectionString = connectionString.replace(/([?&])sslmode=[^&]*/g, '$1').replace(/[?&]$/, '');

const sql = `
create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  college text,
  team_status text not null default 'solo',
  team_bio text,
  teammates jsonb,
  track_selection text not null,
  experience text,
  hear_about text,
  primary_goal text,
  total_price integer not null default 100,
  ticket_serial text not null,
  created_at timestamptz not null default now()
);

alter table public.registrations enable row level security;

drop policy if exists "registrations_insert_own" on public.registrations;
create policy "registrations_insert_own"
  on public.registrations for insert
  with check (auth.uid() = user_id);

drop policy if exists "registrations_select_own" on public.registrations;
create policy "registrations_select_own"
  on public.registrations for select
  using (auth.uid() = user_id);

drop policy if exists "registrations_update_own" on public.registrations;
create policy "registrations_update_own"
  on public.registrations for update
  using (auth.uid() = user_id);

create index if not exists registrations_user_id_idx on public.registrations(user_id);
`;

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  await client.query(sql);
  const { rows } = await client.query(
    "select column_name, data_type from information_schema.columns where table_schema='public' and table_name='registrations' order by ordinal_position"
  );
  console.log('registrations table ready. Columns:');
  console.table(rows);
} catch (err) {
  console.error('DB setup failed:', err.message);
  process.exit(1);
} finally {
  await client.end();
}
