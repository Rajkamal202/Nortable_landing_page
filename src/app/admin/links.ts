// Builds /admin?... hrefs while dropping empty params.
export function buildHref(params: Record<string, string | number | undefined>): string {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== '' && v !== null) sp.set(k, String(v));
  });
  const qs = sp.toString();
  return qs ? `/admin?${qs}` : '/admin';
}
