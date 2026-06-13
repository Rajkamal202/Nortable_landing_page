import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Service-role Supabase client. This bypasses Row Level Security and must
 * NEVER be imported into client components. The `server-only` import above
 * makes the build fail if it is ever pulled into the browser bundle.
 *
 * The real client is created lazily on first use (via the Proxy below) so that
 * importing this module during `next build` page-data collection does not throw
 * when env vars are not yet available.
 */
let client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!client) {
    const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error(
        'Missing Supabase admin env vars (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).'
      );
    }
    client = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const real = getClient();
    const value = real[prop as keyof SupabaseClient];
    return typeof value === 'function' ? value.bind(real) : value;
  },
});
