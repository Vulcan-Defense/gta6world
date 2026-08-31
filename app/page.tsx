'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CarFront,
  Check,
  ChevronDown,
  Copy,
  Crosshair,
  Menu,
  Play,
  Search,
  Shirt,
  Users,
  X,
} from 'lucide-react';

const servers = [
  {
    name: 'VICE ROLEPLAY',
    type: 'RP',
    players: '842 / 1000',
    ping: 18,
    address: 'play.vicerp.world',
  },
  {
    name: 'LEONIDA RACING',
    type: 'CORRIDA',
    players: '214 / 300',
    ping: 31,
    address: 'race.leonida.gg',
  },
  {
    name: 'PORT GELLHORN',
    type: 'SOBREVIVÊNCIA',
    players: '126 / 250',
    ping: 44,
    address: 'pgh.gta6world.com',
  },
  {
    name: 'VICE CITY CHAOS',
    type: 'LIVRE',
    players: '93 / 150',
    ping: 52,
    address: 'chaos.vice.city',
  },
];

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
  const [activeFilter, setActiveFilter] = useState('TODOS');
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredServers = useMemo(
    () =>
      servers.filter(
        (server) =>
          (activeFilter === 'TODOS' || server.type === activeFilter) &&
          server.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [activeFilter, query],
  );

  const copyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(address);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="GTA 6 World — início">
          GTA <span>6</span> WORLD
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
        <a className="join-button" href="#servidores">
          JOGAR AGORA <ArrowUpRight size={17} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <div className="hero-content">
          <p className="eyebrow">
            <span /> O PORTAL DEFINITIVO DE LEONIDA
          </p>
          <h1>
            VIVA O<br />
            <em>PRÓXIMO</em>
            <br />
            MUNDO.
          </h1>
          <p className="hero-copy">
            Notícias, comunidades e tudo que pulsa nas ruas de Vice City. Seu
            ponto de encontro começa aqui.
          </p>
          <div className="hero-actions">
            <a href="#noticias" className="primary-action">
              EXPLORAR AGORA <ArrowUpRight />
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
            <strong>19 NOV</strong>
            <span>
              LANÇAMENTO
              <br />
              2026
            </span>
          </div>
          <div>
            <strong>PS5</strong>
            <span>
              E XBOX
              <br />
              SERIES X|S
            </span>
          </div>
        </div>
        <div className="scroll-cue">
          ROLE PARA DESCOBRIR <ChevronDown size={14} />
        </div>
      </section>

      <section className="news section" id="noticias">
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

      <section className="videos section" id="videos">
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
            <p className="kicker">/ ENTRE NA CIDADE</p>
            <h2>
              SERVIDORES <em>ONLINE</em>
            </h2>
          </div>
          <span className="live-pill">
            <i /> DEMONSTRAÇÃO
          </span>
        </div>
        <div className="server-toolbar">
          <div className="filters">
            {['TODOS', 'RP', 'CORRIDA', 'LIVRE'].map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar servidor"
            />
          </label>
        </div>
        <div className="server-list">
          <div className="server-row header-row">
            <span>SERVIDOR</span>
            <span>TIPO</span>
            <span>JOGADORES</span>
            <span>PING</span>
            <span />
          </div>
          {filteredServers.map((server) => (
            <div className="server-row" key={server.name}>
              <strong>
                <i /> {server.name}
              </strong>
              <span className="type-tag">{server.type}</span>
              <span>
                <Users size={15} /> {server.players}
              </span>
              <span className="ping">{server.ping} MS</span>
              <button onClick={() => copyAddress(server.address)}>
                {copied === server.address ? (
                  <>
                    <Check size={15} /> COPIADO
                  </>
                ) : (
                  <>
                    <Copy size={15} /> COPIAR IP
                  </>
                )}
              </button>
            </div>
          ))}
          {!filteredServers.length && (
            <div className="empty-state">Nenhum servidor encontrado.</div>
          )}
        </div>
        <p className="server-note">
          * Lista demonstrativa. A disponibilidade real depende dos servidores
          da comunidade.
        </p>
      </section>

      <section className="universe section" id="universo">
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

      <section className="community" id="comunidade">
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
          GTA <span>6</span> WORLD
        </a>
        <p>
          Portal independente criado por fãs. Não afiliado à Rockstar Games.
        </p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
