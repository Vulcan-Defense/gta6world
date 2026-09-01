'use client';

import { ArrowUpRight, Globe, Monitor, Play, Tv, Users } from 'lucide-react';

interface ExternalResource {
  title: string;
  description: string;
  url: string;
  icon: string; // lucide icon name
  category: string;
  color?: string;
  live?: boolean;
}

const externalResources: ExternalResource[] = [
  {
    title: 'GTANet',
    description: 'Notícias, guias e comunidade brasileira de GTA',
    url: 'https://www.gtanet.com.br/',
    icon: 'Globe',
    category: 'Notícias',
    color: 'orange'
  },
  {
    title: 'GTAForums',
    description: 'Maior comunidade internacional de GTA com mods e discussões',
    url: 'https://gtaforums.com/',
    icon: 'Users',
    category: 'Comunidade',
    color: 'purple'
  },
  {
    title: 'Rockstar Newswire',
    description: 'Notícias oficiais diretamente da Rockstar Games',
    url: 'https://www.rockstargames.com/newswire/',
    icon: 'Monitor',
    category: 'Oficial',
    color: 'blue'
  },
  {
    title: 'GTAGaming',
    description: 'Notícias, vazamentos e análises sobre a série GTA',
    url: 'https://www.gtagaming.com/',
    icon: 'Globe',
    category: 'Notícias',
    color: 'orange'
  },
  {
    title: 'TheGTAPlace',
    description: 'Fóruns, downloads e comunidade para modders de GTA',
    url: 'https://www.thegtaplace.com/',
    icon: 'Users',
    category: 'Comunidade',
    color: 'purple'
  },
  {
    title: 'GTABase',
    description: 'Base de dados completa de veículos, armas e locais de GTA',
    url: 'https://www.gtabase.com/',
    icon: 'Tv',
    category: 'Referência',
    color: 'blue'
  },
  {
    title: 'GTA Series Videos',
    description: 'Canal oficial da Rockstar com trailers e making of',
    url: 'https://www.youtube.com/@RockstarGames',
    icon: 'Play',
    category: 'Vídeos',
    color: 'red'
  },
  {
    title: 'Beluga',
    description: 'Análises aprofundadas de lore e easter eggs de GTA',
    url: 'https://www.youtube.com/@Beluga',
    icon: 'Play',
    category: 'Vídeos',
    color: 'red'
  },
  {
    title: 'Broughy1322',
    description: 'Testes de velocidade e comparativos de veículos em GTA Online',
    url: 'https://www.youtube.com/@Broughy1322',
    icon: 'Play',
    category: 'Vídeos',
    color: 'red'
  },
  {
    title: 'GTA Series Snapmatic',
    description: 'Melhores capturas de tela da comunidade GTA',
    url: 'https://snaps.gtagaming.com/',
    icon: 'Users',
    category: 'Comunidade',
    color: 'purple'
  }
];

export function ExternalGtaResources() {
  // Group resources by category
  const grouped = externalResources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as Record<string, ExternalResource[]>);

  return (
    <section className="external-resources section">
      <div className="section-heading">
        <div>
          <p className="kicker">/ RECURSOS EXTERNOS</p>
          <h2>SITES, VÍDEOS E COMUNIDADES GTA</h2>
        </div>
        <a href="https://www.google.com/search?q=GTA+VI+news" target="_blank" rel="noreferrer">
          BUSCAR MAIS <ArrowUpRight size={17} />
        </a>
      </div>
      
      <div className="resources-grid">
        {Object.entries(grouped).map(([category, resources]) => (
          <div key={category} className="resource-category">
            <h3 className="resource-category-title">{category}</h3>
            <div className="resource-cards">
              {resources.map((resource, index) => (
                <article key={index} className={`resource-card ${resource.color || ''}`}>
                  <div className="resource-icon">
                    {/* Map icon names to actual Lucide icons */}
                    {resource.icon === 'Globe' && <Globe className="w-5 h-5" />}
                    {resource.icon === 'Users' && <Users className="w-5 h-5" />}
                    {resource.icon === 'Monitor' && <Monitor className="w-5 h-5" />}
                    {resource.icon === 'Play' && <Play className="w-5 h-5" />}
                    {resource.icon === 'Tv' && <Tv className="w-5 h-5" />}
                  </div>
                  <div className="resource-content">
                    <h4>{resource.title}</h4>
                    <p>{resource.description}</p>
                    {resource.live && (
                      <span className="resource-live-badge">AO VIVO</span>
                    )}
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="resource-link"
                    >
                      VISITAR <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}