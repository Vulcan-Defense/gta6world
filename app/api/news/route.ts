export const dynamic = 'force-dynamic';

const fallback = [
  { title: 'Grand Theft Auto VI — site oficial', url: 'https://www.rockstargames.com/VI', source: 'Rockstar Games', publishedAt: '2026-08-27T12:00:00Z' },
  { title: 'Grand Theft Auto VI já está disponível para pré-venda', url: 'https://store.rockstargames.com/game/buy-gta-vi', source: 'Rockstar Games', publishedAt: '2026-06-25T12:00:00Z' },
  { title: 'Grand Theft Auto VI chega em 19 de novembro de 2026', url: 'https://www.rockstargames.com/VI', source: 'Rockstar Games', publishedAt: '2025-11-06T12:00:00Z' },
];

const decode = (text: string) => text.replace(/<!\[CDATA\[|\]\]>/g, '')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

export async function GET() {
  let items = fallback;
  try {
    const response = await fetch('https://news.google.com/rss/search?q=%22Grand+Theft+Auto+VI%22&hl=pt-BR&gl=BR&ceid=BR:pt-419', {
      headers: { 'User-Agent': 'GTA6World/1.0' },
      cf: { cacheTtl: 900, cacheEverything: true },
    } as RequestInit & { cf: { cacheTtl: number; cacheEverything: boolean } });
    if (response.ok) {
      const xml = await response.text();
      const parsed = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 3).map((match) => {
        const block = match[1];
        const value = (tag: string) => decode(block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`))?.[1] ?? '');
        return { title: value('title'), url: value('link'), source: value('source') || 'Google Notícias', publishedAt: new Date(value('pubDate')).toISOString() };
      }).filter((item) => item.title && item.url);
      if (parsed.length === 3) items = parsed;
    }
  } catch {}
  return Response.json({ items, updatedAt: new Date().toISOString() }, {
    headers: { 'Cache-Control': 'public, max-age=60, s-maxage=900' },
  });
}
