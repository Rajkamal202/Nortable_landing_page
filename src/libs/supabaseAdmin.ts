import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Service-role Supabase client. This bypasses Row Level Security and must
 * NEVER be imported into client components. The `server-only` import above
 * makes the build fail if it is ever pulled into the browser bundle.
 */
const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
