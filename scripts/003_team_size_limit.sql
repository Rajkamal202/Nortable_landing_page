-- Enforce a hard cap on team members at the database level so the limit
-- cannot be bypassed by a crafted client request.

create or replace function public.enforce_team_size()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  member_count integer;
  max_size constant integer := 4;
begin
  select count(*) into member_count
  from public.team_members
  where team_id = new.team_id;

  if member_count >= max_size then
    raise exception 'Team is full (max % members).', max_size
      using errcode = 'P0001';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_enforce_team_size on public.team_members;

create trigger trg_enforce_team_size
  before insert on public.team_members
  for each row
  execute function public.enforce_team_size();
