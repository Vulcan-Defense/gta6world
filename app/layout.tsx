import type { Metadata } from 'next';
import { Archivo_Black, Inter } from 'next/font/google';
import './globals.css';

const display = Archivo_Black({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});
const inter = Inter({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GTA 6 World — Notícias e Servidores',
  description:
    'Notícias de GTA VI, servidores da comunidade e tudo sobre moda, carros e militarismo em Vice City.',
  openGraph: {
    title: 'GTA 6 World — Notícias e Servidores',
    description: 'Notícias, servidores e comunidade em um só lugar.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'GTA 6 World' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 World — Notícias e Servidores',
    description: 'Notícias, servidores e comunidade em um só lugar.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
