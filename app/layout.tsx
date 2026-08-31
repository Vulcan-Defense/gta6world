import type { Metadata } from 'next';
import { Archivo_Black, Inter } from 'next/font/google';
import './globals.css';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const display = Archivo_Black({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});
const inter = Inter({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gta6-world-brasil.styvie2012.chatgpt.site'),
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
        <div className="min-h-screen flex flex-col">
          <header className="site-header flex items-center justify-between px-4 py-3 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <a href="#inicio" className="brand" aria-label="GTA 6 World — início">
                GTA <span id="game-mode-number">6</span> WORLD
              </a>
              <LanguageSwitcher />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                id="mode-switch-gta-v"
                className="px-3 py-1 rounded text-sm font-medium transition-all hover:bg-gray-800/50"
                aria-label="Selecionar jogo"
              >
                GTA V
              </button>
              <button
                id="mode-switch-gta-vi"
                className="px-3 py-1 rounded text-sm font-medium bg-gray-800/50 transition-all hover:bg-gray-800/70"
                aria-label="Selecionar jogo"
              >
                GTA VI
              </button>
            </div>
            <button
              id="menu-button"
              className="md:hidden px-3 py-1 rounded text-sm font-medium transition-all hover:bg-gray-800/50"
              aria-label="Abrir menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </header>
          
          <nav className="hidden md:flex items-center space-x-4 px-4 py-2 bg-gray-900/30 backdrop-blur-sm">
            <a href="#noticias" className="hover:text-gray-300 transition-colors">NOTÍCIAS</a>
            <a href="#videos" className="hover:text-gray-300 transition-colors">VÍDEOS</a>
            <a href="#servidores" className="hover:text-gray-300 transition-colors">SERVIDORES</a>
            <a href="#universo" className="hover:text-gray-300 transition-colors">UNIVERSO</a>
            <a href="/loja?modo=VI" className="hover:text-gray-300 transition-colors">LOJA</a>
          </nav>
          
          <main className="flex-1">{children}</main>
          
          <footer className="mt-auto px-4 py-4 text-center text-gray-500 border-t border-gray-800">
            <a href="#inicio" className="brand">
              GTA <span id="footer-game-mode-number">6</span> WORLD
            </a>
            <p>Portal independente criado por fãs. Não afiliado à Rockstar Games.</p>
            <span>© 2026</span>
          </footer>
        </div>
      </body>
    </html>
  );
}