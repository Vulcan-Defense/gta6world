import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loja — GTA World',
  description: 'Catálogo de GTA V e GTA VI com acesso às lojas oficiais.',
};

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
