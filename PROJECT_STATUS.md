# Retired source repository

The owner absorbed the shared MCP gateway into SaaS Maker on 29 October 2026. This checkout is recovery/history, not a separate active product. Current source and operations are `sass-maker/saas-maker`, `apps/mcp` (absorption PR #357).

The local publisher fails closed before invoking Git, credentials or Cloudflare. The former Worker configuration is retained under `docs/archive/`, outside Wrangler default discovery. Current issues and release instructions belong to SaaS Maker; this repository had no open issues at cutover preparation.

## Cutover order

1. Land the new SaaS Maker source and require successful MCP CI on its exact main revision. Qualify the unchanged endpoints and candidate artifact.
2. Land this retired publisher and archive its default Wrangler configuration. Disable the legacy CI and daily monitor before the first release from SaaS Maker.
3. Release through SaaS Maker and verify the eight configured endpoint hosts, public documents and private unauthenticated denials. Record the new version and proof in the private canonical infrastructure record.

The verified previous production version is `bb871bd6-02a6-4952-a60f-505cc7aa14c7`, tagged `f56529540ac553b47bd0ccc1e0008fc2db8fb9d4`, observed on 29 October 2026. Emergency rollback uses `pnpm --dir apps/mcp exec wrangler rollback bb871bd6-02a6-4952-a60f-505cc7aa14c7` from SaaS Maker, followed by runtime verification. No data migration is included. Retained source at `f5652954` and the archived configuration provide history; do not publish directly from this historical checkout.

Historical project status is preserved in `docs/archive/PROJECT_STATUS.pre-absorption.md`.
