'use client';

import { ArrowUpRight, RefreshCw, Search, Users } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type Server = {
  id: string;
  name: string;
  description: string;
  players: number;
  maxPlayers: number;
  locale: string;
  tags: string[];
  joinUrl: string;
  iconUrl: string;
};

export function ServerBrowser() {
  const [servers, setServers] = useState<Server[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadServers = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('/api/servers');
      if (!response.ok) throw new Error('FiveM unavailable');
      const data = (await response.json()) as { servers: Server[] };
      setServers(data.servers);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadServers();
  }, []);

  const filtered = useMemo(() => {
    const term = query.toLocaleLowerCase('pt-BR');
    return servers.filter((server) =>
      `${server.name} ${server.description} ${server.tags.join(' ')}`
        .toLocaleLowerCase('pt-BR')
        .includes(term),
    );
  }, [query, servers]);

  return (
    <div className="live-servers">
      <div className="live-server-toolbar">
        <label>
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar servidor, cidade ou tag"
          />
        </label>
        <span>
          {loading ? 'CARREGANDO…' : `${filtered.length} SERVIDORES EXIBIDOS`}
        </span>
      </div>

      {loading && (
        <div className="server-loading">
          <RefreshCw className="spin" /> Buscando servidores FiveM…
        </div>
      )}

      {error && (
        <div className="server-error">
          <p>Não foi possível carregar o feed agora.</p>
          <button onClick={() => void loadServers()}>
            <RefreshCw size={16} /> TENTAR NOVAMENTE
          </button>
          <a href="https://servers.fivem.net/" target="_blank" rel="noreferrer">
            ABRIR LISTA OFICIAL <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {!loading && !error && (
        <div className="live-server-grid">
          {filtered.map((server) => (
            <article key={server.id}>
              <div className="server-card-top">
                <img src={server.iconUrl} alt="" loading="lazy" />
                <span>
                  <Users size={14} /> {server.players} / {server.maxPlayers}
                </span>
              </div>
              <h3>{server.name}</h3>
              <p>{server.description}</p>
              <div className="server-tags">
                {server.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={server.joinUrl} target="_blank" rel="noreferrer">
                CONECTAR <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
          {!filtered.length && (
            <div className="server-empty">
              Nenhum servidor encontrado para “{query}”.
            </div>
          )}
        </div>
      )}
      <p className="server-source">
        Dados carregados do diretório FiveM/Cfx.re. A disponibilidade muda em
        tempo real.
      </p>
    </div>
  );
}
