import { readFileSync } from 'node:fs';
import { Client } from 'pg';

let connectionString =
  process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;

if (!connectionString) {
  console.error('[migration] No POSTGRES_URL_NON_POOLING / POSTGRES_URL in env');
  process.exit(1);
}

// Strip sslmode from the URL; newer pg treats `require` as `verify-full`,
// which rejects Supabase's self-signed chain. We set ssl explicitly below.
connectionString = connectionString.replace(/([?&])sslmode=[^&]*/g, '$1').replace(/[?&]$/, '');

const file = process.argv[2];
if (!file) {
  console.error('[migration] Usage: node run-migration.mjs <path-to-sql>');
  process.exit(1);
}

const sql = readFileSync(file, 'utf8');

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  console.log('[migration] Connected. Running', file);
  await client.query(sql);
  console.log('[migration] Success');
} catch (err) {
  console.error('[migration] Failed:', err.message);
  process.exitCode = 1;
} finally {
  await client.end();
}
