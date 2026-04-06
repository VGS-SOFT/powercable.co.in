// This file intentionally re-exports from proxy.ts.
// Next.js 16 looks for `proxy.ts` first; keeping this file avoids
// breaking older Next.js versions in case of a downgrade.
export { middleware, config } from './proxy';
