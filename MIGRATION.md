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

## Migration plan

1. Fresh 1.6.8 → `jsr:@fresh/core@2.x` (Vite toolchain via
   `@fresh/plugin-vite`), per the official updater + migration guide.
2. `std` URL imports → `jsr:@std/*` latest; `marked` → `npm:marked@18`;
   Preact/signals → latest npm. Enable lockfile. Deno 2.9.x.
3. Delete deployctl workflow; deploy via `deno deploy` CLI and/or the
   console.deno.com GitHub integration (Fresh preset: build `vite build`, serve
   `deno serve -A _fresh/server.js`).
