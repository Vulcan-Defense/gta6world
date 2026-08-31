'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, RefreshCw } from 'lucide-react';

type NewsItem = { title: string; url: string; source: string; publishedAt: string };
const images = ['/lucia.jpg', '/vice-city.jpg', '/cal-hampton.jpg'];

export function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [updatedAt, setUpdatedAt] = useState('');

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/news', { cache: 'no-store' });
      if (!response.ok) return;
      const data = await response.json();
      setItems(data.items ?? []);
      setUpdatedAt(data.updatedAt ?? '');
    };
    load();
    const timer = window.setInterval(load, 15 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!items.length) return null;
  const [featured, ...side] = items;
  const date = (value: string) => new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  }).format(new Date(value));

  return (
    <section className="news section vi-only" id="noticias">
      <div className="section-heading">
        <div>
          <p className="kicker">/ ATUALIZAÇÃO AUTOMÁTICA A CADA 15 MIN</p>
          <h2>ÚLTIMAS <em>NOTÍCIAS</em></h2>
          {updatedAt && <small><RefreshCw size={12} /> Atualizado às {new Date(updatedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</small>}
        </div>
        <a href="https://www.rockstargames.com/br/newswire" target="_blank" rel="noreferrer">ROCKSTAR NEWSWIRE <ArrowUpRight size={17} /></a>
      </div>
      <div className="news-grid">
        <article className="featured-news">
          <a className="news-art" href={featured.url} target="_blank" rel="noreferrer">
            <img src={images[0]} alt="Imagem oficial de GTA VI" /><span>MAIS RECENTE</span>
          </a>
          <div className="news-meta"><span>{featured.source}</span><time>{date(featured.publishedAt)}</time></div>
          <h3>{featured.title}</h3>
          <a href={featured.url} target="_blank" rel="noreferrer">LER NOTÍCIA <ArrowUpRight size={17} /></a>
        </article>
        <div className="side-news">
          {side.slice(0, 2).map((item, index) => (
            <article key={item.url}>
              <a className="thumb" href={item.url} target="_blank" rel="noreferrer">
                <img src={images[index + 1]} alt="Imagem oficial de GTA VI" /><span>NOTÍCIAS</span>
              </a>
              <div>
                <div className="news-meta"><span>{item.source}</span><time>{date(item.publishedAt)}</time></div>
                <h3>{item.title}</h3>
                <a href={item.url} target="_blank" rel="noreferrer">LER NOTÍCIA <ArrowUpRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
