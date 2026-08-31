'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, CarFront, Check, ChevronDown, Copy, Crosshair, Menu, Play, Search, Shirt, Users, X } from 'lucide-react';

const servers = [
  { name: 'VICE ROLEPLAY', type: 'RP', players: '842 / 1000', ping: 18, address: 'play.vicerp.world' },
  { name: 'LEONIDA RACING', type: 'CORRIDA', players: '214 / 300', ping: 31, address: 'race.leonida.gg' },
  { name: 'PORT GELLHORN', type: 'SOBREVIVÊNCIA', players: '126 / 250', ping: 44, address: 'pgh.gta6world.com' },
  { name: 'VICE CITY CHAOS', type: 'LIVRE', players: '93 / 150', ping: 52, address: 'chaos.vice.city' },
];

const topics = [
  { icon: Shirt, number: '01', title: 'MODA', text: 'Streetwear, luxo e o estilo solar que domina as ruas de Vice City.', color: 'orange' },
  { icon: CarFront, number: '02', title: 'CARROS', text: 'Máquinas, customização e os encontros que movimentam Leonida.', color: 'purple' },
  { icon: Crosshair, number: '03', title: 'MILITARISMO', text: 'Equipamentos, operações e estratégias para dominar o mapa.', color: 'blue' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('TODOS');
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredServers = useMemo(() => servers.filter((server) => (activeFilter === 'TODOS' || server.type === activeFilter) && server.name.toLowerCase().includes(query.toLowerCase())), [activeFilter, query]);

  const copyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(address);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return <main>
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="GTA 6 World — início">GTA <span>6</span> WORLD</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-open' : ''}><a href="#noticias">NOTÍCIAS</a><a href="#servidores">SERVIDORES</a><a href="#universo">UNIVERSO</a><a href="#comunidade">COMUNIDADE</a></nav>
      <a className="join-button" href="#servidores">JOGAR AGORA <ArrowUpRight size={17} /></a>
    </header>

    <section className="hero" id="inicio"><div className="hero-noise" /><div className="hero-content">
      <p className="eyebrow"><span /> O PORTAL DEFINITIVO DE LEONIDA</p><h1>VIVA O<br /><em>PRÓXIMO</em><br />MUNDO.</h1>
      <p className="hero-copy">Notícias, comunidades e tudo que pulsa nas ruas de Vice City. Seu ponto de encontro começa aqui.</p>
      <div className="hero-actions"><a href="#noticias" className="primary-action">EXPLORAR AGORA <ArrowUpRight /></a><a href="#servidores" className="text-action"><span><Play size={16} fill="currentColor" /></span> VER SERVIDORES</a></div>
    </div><div className="hero-stats"><div><strong>04</strong><span>SERVIDORES<br />ONLINE</span></div><div><strong>1.275</strong><span>JOGADORES<br />AGORA</span></div></div><div className="scroll-cue">ROLE PARA DESCOBRIR <ChevronDown size={14} /></div></section>

    <section className="news section" id="noticias"><div className="section-heading"><div><p className="kicker">/ DIRETO DE VICE CITY</p><h2>ÚLTIMAS <em>NOTÍCIAS</em></h2></div><a href="https://x.com/RockstarGames" target="_blank" rel="noreferrer">VER TODAS NO X <ArrowUpRight size={17} /></a></div>
      <div className="news-grid"><article className="featured-news"><div className="news-art sunset"><span>DESTAQUE</span><b>VI</b></div><div className="news-meta"><span>TRAILER & ANÁLISE</span><time>30 AGO 2026</time></div><h3>VICE CITY NUNCA PARECEU TÃO VIVA</h3><p>Cada rua conta uma história. Reunimos os detalhes, pistas e lugares que merecem sua atenção.</p><a href="https://www.youtube.com/@RockstarGames" target="_blank" rel="noreferrer">ASSISTIR NO YOUTUBE <ArrowUpRight size={17} /></a></article>
      <div className="side-news"><article><div className="thumb palm"><span>GUIA</span></div><div><div className="news-meta"><span>MUNDO</span><time>28 AGO</time></div><h3>10 LUGARES PARA CONHECER EM LEONIDA</h3><a href="#universo">LER MATÉRIA <ArrowUpRight size={15} /></a></div></article><article><div className="thumb car"><span>GARAGEM</span></div><div><div className="news-meta"><span>CARROS</span><time>25 AGO</time></div><h3>OS CARROS QUE JÁ VIRARAM DESEJO</h3><a href="#universo">LER MATÉRIA <ArrowUpRight size={15} /></a></div></article></div></div>
    </section>

    <section className="servers section" id="servidores"><div className="section-heading light"><div><p className="kicker">/ ENTRE NA CIDADE</p><h2>SERVIDORES <em>ONLINE</em></h2></div><span className="live-pill"><i /> DEMONSTRAÇÃO</span></div>
      <div className="server-toolbar"><div className="filters">{['TODOS', 'RP', 'CORRIDA', 'LIVRE'].map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><label className="search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar servidor" /></label></div>
      <div className="server-list"><div className="server-row header-row"><span>SERVIDOR</span><span>TIPO</span><span>JOGADORES</span><span>PING</span><span /></div>{filteredServers.map((server) => <div className="server-row" key={server.name}><strong><i /> {server.name}</strong><span className="type-tag">{server.type}</span><span><Users size={15} /> {server.players}</span><span className="ping">{server.ping} MS</span><button onClick={() => copyAddress(server.address)}>{copied === server.address ? <><Check size={15} /> COPIADO</> : <><Copy size={15} /> COPIAR IP</>}</button></div>)}{!filteredServers.length && <div className="empty-state">Nenhum servidor encontrado.</div>}</div><p className="server-note">* Lista demonstrativa. A disponibilidade real depende dos servidores da comunidade.</p>
    </section>

    <section className="universe section" id="universo"><div className="section-heading"><div><p className="kicker">/ ESCOLHA SEU ESTILO</p><h2>EXPLORE O <em>UNIVERSO</em></h2></div></div><div className="topic-grid">{topics.map(({ icon: Icon, number, title, text, color }) => <article className={`topic-card ${color}`} key={title}><div className="topic-top"><span>{number}</span><Icon /></div><div><h3>{title}</h3><p>{text}</p><a href="#noticias" aria-label={`Explorar ${title}`}><ArrowUpRight /></a></div></article>)}</div></section>

    <section className="community" id="comunidade"><p>FAÇA PARTE DA COMUNIDADE</p><h2>VICE CITY NÃO<br /><em>DORME.</em></h2><div className="social-actions"><a href="https://x.com/RockstarGames" target="_blank" rel="noreferrer">ACOMPANHAR NO X <ArrowUpRight /></a><a href="https://www.youtube.com/@RockstarGames" target="_blank" rel="noreferrer">VER NO YOUTUBE <Play size={18} fill="currentColor" /></a></div></section>
    <footer><a href="#inicio" className="brand">GTA <span>6</span> WORLD</a><p>Portal independente criado por fãs. Não afiliado à Rockstar Games.</p><span>© 2026</span></footer>
  </main>;
}
