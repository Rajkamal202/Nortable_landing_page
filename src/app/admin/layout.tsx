import type { Metadata } from 'next';
import StyledComponentsRegistry from '../../../libs/registry';

export const metadata: Metadata = {
  title: 'Admin · Nortable Hackathon',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
