'use client';

import { ArrowLeft, ArrowUpRight, Check, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import './loja.css';

const products = {
  V: [
    {
      type: 'JOGO COMPLETO',
      name: 'Grand Theft Auto V + GTA Online',
      image: '/gta5-los-santos.jpg',
      detail: 'Story Mode e GTA Online',
      url: 'https://store.rockstargames.com/game/buy-gta-v',
    },
    {
      type: 'MULTIPLAYER',
      name: 'Grand Theft Auto Online',
      image: '/gta5-online.jpg',
      detail: 'Universo online em constante evolução',
      url: 'https://www.rockstargames.com/gta-v',
    },
    {
      type: 'COMUNIDADE',
      name: 'FiveM para GTA V',
      image: '/gta5-los-santos.jpg',
      detail: 'Cliente gratuito — requer GTA V',
      url: 'https://fivem.net/',
    },
  ],
  VI: [
    {
      type: 'PRÉ-VENDA',
      name: 'Grand Theft Auto VI',
      image: '/jason-lucia.jpg',
      detail: 'PlayStation 5 e Xbox Series X|S',
      url: 'https://www.rockstargames.com/VI',
    },
    {
      type: 'EDIÇÃO',
      name: 'Ultimate Edition',
      image: '/lucia.jpg',
      detail: 'Consulte conteúdo e disponibilidade oficial',
      url: 'https://www.rockstargames.com/VI',
    },
    {
      type: 'BÔNUS',
      name: 'Vintage Vice City Pack',
      image: '/vice-city.jpg',
      detail: 'Benefícios oficiais de pré-venda',
      url: 'https://www.rockstargames.com/VI',
    },
  ],
};

export default function StorePage() {
  const [mode, setMode] = useState<'V' | 'VI'>('VI');

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('modo');
    if (requested === 'V' || requested === 'VI') setMode(requested);
  }, []);

  return (
    <main className={`store-page store-${mode.toLowerCase()}`}>
      <header className="store-header">
        <a href="/" className="store-back">
          <ArrowLeft size={17} /> VOLTAR AO PORTAL
        </a>
        <a href="/" className="brand">
          GTA <span>{mode === 'V' ? '5' : '6'}</span> WORLD
        </a>
        <div className="mode-switch" aria-label="Selecionar catálogo">
          <button
            className={mode === 'V' ? 'active' : ''}
            onClick={() => setMode('V')}
          >
            GTA V
          </button>
          <button
            className={mode === 'VI' ? 'active' : ''}
            onClick={() => setMode('VI')}
          >
            GTA VI
          </button>
        </div>
      </header>

      <section className="store-hero">
        <div>
          <p>/ CATÁLOGO OFICIAL</p>
          <h1>
            ESCOLHA SUA
            <br />
            <em>EDIÇÃO.</em>
          </h1>
          <span>Compare opções e finalize sua compra nos canais oficiais.</span>
        </div>
        <ShoppingBag />
      </section>

      <section className="store-products">
        <div className="store-section-title">
          <div>
            <p>/ MODO {mode === 'V' ? 'GTA V' : 'GTA VI'}</p>
            <h2>
              PRODUTOS EM <em>DESTAQUE</em>
            </h2>
          </div>
          <span>
            <Check size={15} /> LINKS OFICIAIS
          </span>
        </div>
        <div className="product-grid">
          {products[mode].map((product) => (
            <article key={product.name}>
              <div className="product-image">
                <img src={product.image} alt="" />
                <span>{product.type}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <strong>CONSULTAR PREÇO</strong>
                <a href={product.url} target="_blank" rel="noreferrer">
                  VER NA LOJA OFICIAL <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="store-disclaimer">
          GTA World é um portal independente. Produtos, preços, disponibilidade,
          pagamentos e suporte são de responsabilidade das lojas oficiais
          vinculadas.
        </p>
      </section>
    </main>
  );
}
