import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Space_Grotesk, Space_Mono } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'Nortable',
  description: 'Code. Collaborate. Create Impact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
