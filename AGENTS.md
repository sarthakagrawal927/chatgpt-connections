# Retired source repository

The owner absorbed the shared MCP gateway into SaaS Maker. Implement, test and release current work from `saas-maker/apps/mcp`; track issues in `sass-maker/saas-maker`.

- Do not deploy from this repository or reactivate its scheduled monitor.
- `scripts/deploy.mjs` intentionally fails closed. The former Wrangler configuration is historical evidence under `docs/archive/`; do not restore it as an active configuration.
- Preserve historical runtime source, endpoint identities and authentication contracts. This repository has no active feature roadmap.
- `pnpm check` verifies retirement. Runtime tests and releases belong to SaaS Maker.
- Former instructions remain in `docs/archive/AGENTS.pre-absorption.md` for history only.
