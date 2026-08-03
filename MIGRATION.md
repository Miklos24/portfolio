# Deploy Classic → Deno Deploy Migration Notes

Deploy Classic (dash.deno.com) shut down 2026-07-20. This repo was migrated to
the new Deno Deploy (console.deno.com) in August 2026.

## Audit (pre-migration state)

- **Framework**: Fresh 1.6.8 via `deno.land/x`, manifest-based (`fresh.gen.ts`),
  served with `start()` from `$fresh/server.ts`.
- **Deps**: Preact 10.19.6 + `@preact/signals` 1.2.2 (esm.sh), `std@0.224.0`
  (URL imports), `deno.land/x/marked@1.0.2` (abandoned; dev-time markdown →
  component codegen only). No lockfile (`"lock": false`).
- **Deploy**: `.github/workflows/deploy.yml` → `deployctl@v1` on Deno v1.x,
  Classic project `miklos-codes`.
- **Classic-specific feature check**:
  - Legacy `std/http` `serve()`: not used (Fresh 1.6.8 uses `Deno.serve`).
  - `Deno.openKv()` / queues / `Deno.cron()`: not used. No KV data to migrate.
  - `Deno.env.get()`: not used. No env vars to re-enter in the new dashboard.
  - Regions: N/A (no region pinning; new platform offers `us`/`eu`/`global`).

## What changed

- **Fresh 1.6.8 → `jsr:@fresh/core` 2.3.3** with the Vite toolchain
  (`@fresh/plugin-vite` 1.1.2, Vite 7). `fresh.gen.ts`, `fresh.config.ts`, and
  `dev.ts` are gone; `main.ts` now builds an `App` with `fsRoutes()`;
  `vite.config.ts` added. `_404.tsx` became `_error.tsx` (Fresh 2 convention).
- **Island children fix**: Fresh 2 serializes island children as an opaque slot,
  so `TabNav`'s `children[selected.value]` indexing silently rendered nothing.
  The island now imports `components/gen/index.ts` directly and renders the
  selected tab component itself.
- **Dependencies**: `deno.land/std@0.224.0` → `jsr:@std/fs` 1.0.24 /
  `jsr:@std/path` 1.1.6; `deno.land/x/marked` 1.0.2 → `npm:marked` 18.0.7
  (regenerated components byte-identical); Preact 10.19.6 → 10.29.8 and signals
  1.2.2 → 2.10.1 (npm, was esm.sh). Dropped `std/dotenv` autoload (nothing reads
  env vars).
- **Tooling**: lockfile enabled (`deno.lock` committed), Deno 2.9.x,
  `jsx: precompile`, `nodeModulesDir: manual` (run `deno install` after
  cloning). Tasks: `dev` (Vite dev server), `build` (`vite build`), `start`
  (`deno serve -A _fresh/server.js`), `deploy` (`deno deploy`).
- **Removed** the deployctl GitHub Actions workflow; deploys go through the
  console.deno.com GitHub integration or `deno task deploy`.

## Remaining manual steps (dashboard/DNS)

1. Create an organization at console.deno.com. The org slug cannot equal any
   existing Deploy Classic project slug (so not `miklos-codes`) and cannot be
   changed later.
2. Create the app: either connect this GitHub repo (select the Fresh preset;
   build `deno task build`, entrypoint `_fresh/server.js`) or run
   `deno task deploy` after `deno deploy` CLI login.
3. Env vars: none to re-enter.
4. Custom domain: app settings → Production Domains → add domain; create the
   `_acme-challenge` CNAME at the DNS provider, point the domain's CNAME/ANAME
   at the new Deploy target, verify DNS, provision TLS.
