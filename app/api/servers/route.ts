import { Root } from 'protobufjs/light';
import { masterSchema } from './schema';

export const dynamic = 'force-dynamic';

type RawServer = {
  EndPoint?: string;
  Data?: {
    clients?: number;
    svMaxclients?: number;
    hostname?: string;
    gametype?: string;
    iconVersion?: number;
    vars?: Record<string, string>;
  };
};

const clean = (value: string) => value.replace(/\^[0-9]/g, '').trim();

export async function GET() {
  try {
    const response = await fetch(
      'https://frontend.cfx-services.net/api/servers/streamRedir/',
      {
        headers: { Accept: 'application/octet-stream' },
      },
    );
    if (!response.ok) throw new Error('FiveM feed unavailable');

    const bytes = new Uint8Array(await response.arrayBuffer());
    const serverType = Root.fromJSON(masterSchema).lookupType('master.Server');
    const decoded: RawServer[] = [];
    let offset = 0;

    while (offset + 4 <= bytes.length) {
      const length = new DataView(
        bytes.buffer,
        bytes.byteOffset + offset,
        4,
      ).getUint32(0, true);
      offset += 4;
      if (!length || offset + length > bytes.length) break;
      const message = serverType.decode(
        bytes.subarray(offset, offset + length),
      );
      offset += length;
      const item = serverType.toObject(message, {
        arrays: true,
        objects: true,
        defaults: true,
      }) as RawServer;
      const vars = item.Data?.vars ?? {};
      if (
        vars.gamename === 'gta5' &&
        vars.locale === 'pt-BR' &&
        (item.Data?.clients ?? 0) > 0
      )
        decoded.push(item);
    }

    const result = decoded
      .sort((a, b) => (b.Data?.clients ?? 0) - (a.Data?.clients ?? 0))
      .slice(0, 30)
      .map((server) => {
        const id = server.EndPoint ?? '';
        const data = server.Data ?? {};
        const vars = data.vars ?? {};
        const iconVersion = data.iconVersion;
        return {
          id,
          name: clean(vars.sv_projectName || data.hostname || 'Servidor FiveM'),
          description: clean(
            vars.sv_projectDesc || data.gametype || 'Comunidade GTA V',
          ),
          players: data.clients ?? 0,
          maxPlayers: data.svMaxclients ?? 0,
          locale: vars.locale || 'pt-BR',
          tags: (vars.tags || '')
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
            .slice(0, 4),
          joinUrl: `https://cfx.re/join/${id}`,
          iconUrl:
            iconVersion === undefined
              ? ''
              : `https://frontend.cfx-services.net/api/servers/icon/${id}/${iconVersion}.png`,
        };
      });

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
