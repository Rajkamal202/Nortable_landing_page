-- Allow authenticated users to edit their own registration.
drop policy if exists "Users can update their own registrations" on public.registrations;
create policy "Users can update their own registrations" on public.registrations
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
