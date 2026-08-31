'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  CarFront,
  ChevronDown,
  Crosshair,
  Gamepad2,
  Menu,
  Play,
  Shirt,
  X,
} from 'lucide-react';

const topics = [
  {
    icon: Shirt,
    number: '01',
    title: 'MODA',
    text: 'Os visuais oficiais de Lucia, Jason e das ruas ensolaradas de Vice City.',
    color: 'orange',
    image: '/lucia.jpg',
  },
  {
    icon: CarFront,
    number: '02',
    title: 'CARROS',
    text: 'Máquinas, perseguições e a cultura automotiva que movimenta Leonida.',
    color: 'purple',
    image: '/vice-city.jpg',
  },
  {
    icon: Crosshair,
    number: '03',
    title: 'MILITARISMO',
    text: 'Operações, equipamentos e os conflitos mostrados no material oficial.',
    color: 'blue',
    image: '/cal-hampton.jpg',
  },
];

export default function Home() {
  const [gameMode, setGameMode] = useState<'V' | 'VI'>('VI');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={gameMode === 'V' ? 'mode-v' : 'mode-vi'}>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="GTA 6 World — início">
          GTA <span>{gameMode === 'VI' ? '6' : '5'}</span> WORLD
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="#noticias">NOTÍCIAS</a>
          <a href="#videos">VÍDEOS</a>
          <a href="#servidores">SERVIDORES</a>
          <a href="#universo">UNIVERSO</a>
        </nav>
        <div className="mode-switch" aria-label="Selecionar jogo">
          <button
            className={gameMode === 'V' ? 'active' : ''}
            onClick={() => setGameMode('V')}
          >
            GTA V
          </button>
          <button
            className={gameMode === 'VI' ? 'active' : ''}
            onClick={() => setGameMode('VI')}
          >
            GTA VI
          </button>
        </div>
        <a className="join-button" href="#servidores">
          {gameMode === 'V' ? 'VER SERVIDORES' : 'EXPLORAR'}{' '}
          <ArrowUpRight size={17} />
        </a>
      </header>

      <section
        className={`hero ${gameMode === 'V' ? 'gta-v' : ''}`}
        id="inicio"
      >
        <div className="hero-noise" />
        <div className="hero-content">
          <p className="eyebrow">
            <span />{' '}
            {gameMode === 'V'
              ? 'SERVIDORES GTA V NO FIVEM'
              : 'O PORTAL DEFINITIVO DE LEONIDA'}
          </p>
          <h1>
            {gameMode === 'V' ? (
              <>
                <em>ENTRE</em>
                <br />
                NO JOGO.
              </>
            ) : (
              <>
                VIVA O<br />
                <em>PRÓXIMO</em>
                <br />
                MUNDO.
              </>
            )}
          </h1>
          <p className="hero-copy">
            {gameMode === 'V'
              ? 'Encontre servidores de GTA V na lista oficial do FiveM e conecte-se à comunidade.'
              : 'Notícias, comunidades e tudo que pulsa nas ruas de Vice City. Seu ponto de encontro começa aqui.'}
          </p>
          <div className="hero-actions">
            <a
              href={gameMode === 'V' ? '#servidores' : '#noticias'}
              className="primary-action"
            >
              {gameMode === 'V' ? 'VER LISTA FIVEM' : 'EXPLORAR AGORA'}{' '}
              <ArrowUpRight />
            </a>
            <a href="#servidores" className="text-action">
              <span>
                <Play size={16} fill="currentColor" />
              </span>{' '}
              VER SERVIDORES
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <strong>{gameMode === 'V' ? 'FIVEM' : '19 NOV'}</strong>
            <span>
              {gameMode === 'V' ? 'LISTA OFICIAL' : 'LANÇAMENTO'}
              <br />
              {gameMode === 'V' ? 'CFX.RE' : '2026'}
            </span>
          </div>
          <div>
            <strong>{gameMode === 'V' ? 'GTA V' : 'PS5'}</strong>
            <span>
              {gameMode === 'V' ? 'MODO' : 'E XBOX'}
              <br />
              {gameMode === 'V' ? 'MULTIPLAYER' : 'SERIES X|S'}
            </span>
          </div>
        </div>
        <div className="scroll-cue">
          ROLE PARA DESCOBRIR <ChevronDown size={14} />
        </div>
      </section>

      <section className="news section vi-only" id="noticias">
        <div className="section-heading">
          <div>
            <p className="kicker">/ FONTE OFICIAL ROCKSTAR</p>
            <h2>
              ÚLTIMAS <em>NOTÍCIAS</em>
            </h2>
          </div>
          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noreferrer"
          >
            SITE OFICIAL <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="news-grid">
          <article className="featured-news">
            <a
              className="news-art"
              href="https://www.rockstargames.com/newswire/article/4k138k8okkk483/grand-theft-auto-vi-an-extended-look-now-playing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/jason-lucia.jpg"
                alt="Jason e Lucia em arte oficial de GTA VI"
              />
              <span>MAIS RECENTE</span>
            </a>
            <div className="news-meta">
              <span>APRESENTAÇÃO OFICIAL</span>
              <time>27 AGO 2026</time>
            </div>
            <h3>GTA VI: “AN EXTENDED LOOK” JÁ ESTÁ DISPONÍVEL</h3>
            <p>
              A Rockstar apresentou uma visão ampliada de Vice City, Leonida e
              da história de Jason e Lucia.
            </p>
            <a
              href="https://www.rockstargames.com/newswire/article/4k138k8okkk483/grand-theft-auto-vi-an-extended-look-now-playing"
              target="_blank"
              rel="noreferrer"
            >
              LER NA ROCKSTAR <ArrowUpRight size={17} />
            </a>
          </article>
          <div className="side-news">
            <article>
              <a
                className="thumb"
                href="https://www.rockstargames.com/newswire/article/5171972o3ak5oa/pre-order-grand-theft-auto-vi-on-june-25"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/lucia.jpg"
                  alt="Lucia Caminos em screenshot oficial"
                />
                <span>OFICIAL</span>
              </a>
              <div>
                <div className="news-meta">
                  <span>PRÉ-VENDA</span>
                  <time>24 JUN 2026</time>
                </div>
                <h3>PRÉ-VENDA DE GTA VI JÁ COMEÇOU</h3>
                <a
                  href="https://www.rockstargames.com/newswire/article/5171972o3ak5oa/pre-order-grand-theft-auto-vi-on-june-25"
                  target="_blank"
                  rel="noreferrer"
                >
                  LER NA ROCKSTAR <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
            <article>
              <a
                className="thumb"
                href="https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/vice-city.jpg"
                  alt="Vice City em screenshot oficial de GTA VI"
                />
                <span>LANÇAMENTO</span>
              </a>
              <div>
                <div className="news-meta">
                  <span>DATA OFICIAL</span>
                  <time>06 NOV 2025</time>
                </div>
                <h3>LANÇAMENTO EM 19 DE NOVEMBRO DE 2026</h3>
                <a
                  href="https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026"
                  target="_blank"
                  rel="noreferrer"
                >
                  LER NA ROCKSTAR <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="videos section vi-only" id="videos">
        <div className="section-heading light">
          <div>
            <p className="kicker">/ ASSISTA AGORA</p>
            <h2>
              VÍDEOS <em>OFICIAIS</em>
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@RockstarGames"
            target="_blank"
            rel="noreferrer"
          >
            CANAL ROCKSTAR <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="video-grid">
          <article>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/VQRLujxTm3c"
                title="Grand Theft Auto VI Trailer 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>TRAILER 2</p>
            <h3>JASON E LUCIA EM VICE CITY</h3>
          </article>
          <article>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/QdBZY2fkU-0"
                title="Grand Theft Auto VI Trailer 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>TRAILER 1</p>
            <h3>O PRIMEIRO OLHAR SOBRE LEONIDA</h3>
          </article>
        </div>
      </section>

      <section className="servers section" id="servidores">
        <div className="section-heading light">
          <div>
            <p className="kicker">
              /{' '}
              {gameMode === 'V'
                ? 'DIRETÓRIO OFICIAL FIVEM'
                : 'STATUS MULTIPLAYER'}
            </p>
            <h2>
              {gameMode === 'V' ? (
                <>
                  SERVIDORES <em>GTA V</em>
                </>
              ) : (
                <>
                  SERVIDORES <em>GTA VI</em>
                </>
              )}
            </h2>
          </div>
          <span className="live-pill">
            <i /> {gameMode === 'V' ? 'FIVEM / CFX.RE' : 'AINDA INDISPONÍVEL'}
          </span>
        </div>
        {gameMode === 'V' ? (
          <div className="fivem-panel">
            <div className="fivem-icon">
              <Gamepad2 />
            </div>
            <div>
              <span>LISTA OFICIAL</span>
              <h3>ENCONTRE SEU SERVIDOR NO FIVEM</h3>
              <p>
                Pesquise servidores de roleplay, corrida, ação e muito mais
                diretamente no navegador oficial da Cfx.re para GTA V.
              </p>
            </div>
            <a
              href="https://servers.fivem.net/"
              target="_blank"
              rel="noreferrer"
            >
              ABRIR SERVIDORES FIVEM <ArrowUpRight />
            </a>
          </div>
        ) : (
          <div className="coming-panel">
            <span>EM BREVE</span>
            <h3>GTA VI AINDA NÃO POSSUI SERVIDORES PÚBLICOS</h3>
            <p>
              Quando houver uma plataforma oficial ou comunitária confiável para
              GTA VI, ela poderá ser listada aqui. Enquanto isso, altere para o
              modo GTA V e explore o FiveM.
            </p>
            <button onClick={() => setGameMode('V')}>
              MUDAR PARA GTA V <ArrowUpRight />
            </button>
          </div>
        )}
      </section>

      <section className="universe section vi-only" id="universo">
        <div className="section-heading">
          <div>
            <p className="kicker">/ IMAGENS OFICIAIS</p>
            <h2>
              EXPLORE O <em>UNIVERSO</em>
            </h2>
          </div>
          <a
            href="https://www.rockstargames.com/VI/media"
            target="_blank"
            rel="noreferrer"
          >
            VER GALERIA OFICIAL <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="topic-grid">
          {topics.map(({ icon: Icon, number, title, text, color, image }) => (
            <article
              className={`topic-card ${color}`}
              key={title}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(12,12,12,.08), rgba(12,12,12,.88)), url(${image})`,
              }}
            >
              <div className="topic-top">
                <span>{number}</span>
                <Icon />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  href="https://www.rockstargames.com/VI/media"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Explorar ${title}`}
                >
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="community vi-only" id="comunidade">
        <p>FAÇA PARTE DA COMUNIDADE</p>
        <h2>
          VICE CITY NÃO
          <br />
          <em>DORME.</em>
        </h2>
        <div className="social-actions">
          <a
            href="https://x.com/RockstarGames"
            target="_blank"
            rel="noreferrer"
          >
            ACOMPANHAR NO X <ArrowUpRight />
          </a>
          <a
            href="https://www.youtube.com/@RockstarGames"
            target="_blank"
            rel="noreferrer"
          >
            VER NO YOUTUBE <Play size={18} fill="currentColor" />
          </a>
        </div>
      </section>
      <footer>
        <a href="#inicio" className="brand">
          GTA <span>{gameMode === 'VI' ? '6' : '5'}</span> WORLD
        </a>
        <p>
          Portal independente criado por fãs. Não afiliado à Rockstar Games.
        </p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
