'use client';

import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Play,
  Globe,
  YouTube,
  Monitor,
  Film,
  Music,
} from 'lucide-react';

interface InternationalVideo {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  country: string;
  language: string;
  views?: string;
  date?: string;
}

const internationalVideos: InternationalVideo[] = [
  {
    title: 'GTA VI Gameplay Leak - Primeira Olhada Completa',
    description: 'Gameplay vazado mostrando Vice City em 4K com detalhes inéditos',
    url: 'https://www.youtube.com/watch?v=VQRLujxTm3c',
    thumbnail: '/jason-lucia.jpg',
    country: 'Brasil',
    language: 'PT-BR',
    views: '2.4M',
    date: '2 dias atrás'
  },
  {
    title: 'GTA VI Official Trailer Reaction - Spanish Community',
    description: 'Reação da comunidade hispânica ao trailer oficial do GTA VI',
    url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    thumbnail: '/lucia.jpg',
    country: 'Espanha',
    language: 'ES-ES',
    views: '1.8M',
    date: '3 dias atrás'
  },
  {
    title: 'GTA VI Map Comparison - GTA V vs GTA VI',
    description: 'Comparativo detalhado entre os mapas de Los Santos e Vice City',
    url: 'https://www.youtube.com/watch?v=VQRLujxTm3c',
    thumbnail: '/vice-city.jpg',
    country: 'Estados Unidos',
    language: 'EN-US',
    views: '3.2M',
    date: '1 semana atrás'
  },
  {
    title: 'GTA VI Soundtrack - Nova Música Oficial Revelada',
    description: 'Análise da nova trilha sonora oficial do GTA VI com artistas brasileiros',
    url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    thumbnail: '/cal-hampton.jpg',
    country: 'França',
    language: 'FR-FR',
    views: '950K',
    date: '5 dias atrás'
  },
  {
    title: 'GTA VI Carros - Veículos Revelados no Gameplay',
    description: 'Lista completa de todos os carros vistos nos vazamentos do GTA VI',
    url: 'https://www.youtube.com/watch?v=VQRLujxTm3c',
    thumbnail: '/gta5-los-santos.jpg',
    country: 'Alemanha',
    language: 'DE-DE',
    views: '1.6M',
    date: '4 dias atrás'
  },
  {
    title: 'GTA VI Japão - Expectativas da Comunidade Asiática',
    description: 'O que a comunidade japonesa espera do GTA VI e comparações com Yakuza',
    url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    thumbnail: '/gta5-online.jpg',
    country: 'Japão',
    language: 'JA-JP',
    views: '820K',
    date: '6 dias atrás'
  }
];

export function InternationalVideosSection() {
  return null;
  return (
    <section className="international-videos section">
      <div className="section-heading">
        <div>
          <p className="kicker">/ VÍDEOS INTERNACIONAIS</p>
          <h2>VÍDEOS SOBRE GTA VI DE TODO O MUNDO</h2>
        </div>
        <a href="https://www.youtube.com/results?search_query=GTA+VI" target="_blank" rel="noreferrer">
          VER MAIS NO YOUTUBE <ArrowUpRight size={17} />
        </a>
      </div>
      
      <div className="video-grid">
        {internationalVideos.map((video, index) => (
          <article key={index} className="international-video-card">
            <div className="video-frame">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumbnail"
              />
              <div className="video-overlay">
                <Play className="video-play-icon" />
                <span className="video-duration">{index % 2 === 0 ? '15:32' : '8:45'}</span>
              </div>
            </div>
            <div className="video-info">
              <div className="video-meta">
                <span className="video-country">{video.country}</span>
                <span className="video-language">{video.language}</span>
              </div>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <div className="video-stats">
                <span>{video.views} visualizações</span>
                <span>{video.date}</span>
              </div>
              <a href={video.url} target="_blank" rel="noreferrer" className="video-link">
                ASSISTIR VÍDEO <ArrowUpRight size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
