import { NextResponse } from 'next/server';
import { isAdminAuthed } from '@/app/admin/auth';
import { supabaseAdmin } from '@/libs/supabaseAdmin';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { title, body, pinned } = await req.json().catch(() => ({}));
  if (!title?.trim() || !body?.trim()) {
    return NextResponse.json({ error: 'Title and body are required.' }, { status: 400 });
  }
  const { error } = await supabaseAdmin.from('announcements').insert({
    title: String(title).trim().slice(0, 120),
    body: String(body).trim().slice(0, 2000),
    pinned: !!pinned,
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const id = new URL(req.url).searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing id.' }, { status: 400 });
  }
  const { error } = await supabaseAdmin.from('announcements').delete().eq('id', id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
