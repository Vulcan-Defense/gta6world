import { servers } from 'cfx-api';
import axios from 'axios';

export const dynamic = 'force-dynamic';

const clean = (value: string) => value.replace(/\^[0-9]/g, '').trim();

export async function GET() {
  try {
    axios.defaults.adapter = 'fetch';
    const list = await servers.all({
      locale: 'pt-BR',
      minPlayers: 1,
      limit: 80,
    });
    const result = list
      .filter((server) => server.isFiveM)
      .sort((a, b) => b.playersCount - a.playersCount)
      .slice(0, 30)
      .map((server) => ({
        id: server.id,
        name: clean(server.projectName || server.hostname || 'Servidor FiveM'),
        description: clean(
          server.projectDesc || server.gameType || 'Comunidade GTA V',
        ),
        players: server.playersCount,
        maxPlayers: server.maxPlayers,
        locale: server.locale || 'pt-BR',
        tags: server.tags.slice(0, 4),
        joinUrl: server.joinUrl,
        iconUrl: server.iconUrl,
      }));

    return Response.json(
      { servers: result, updatedAt: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, max-age=60, s-maxage=120' } },
    );
  } catch {
    return Response.json(
      {
        servers: [],
        error: 'A lista FiveM está temporariamente indisponível.',
      },
      { status: 502 },
    );
  }
}
