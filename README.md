# Moved to SaaS Maker

The shared MCP gateway is maintained in [SaaS Maker’s `apps/mcp`](https://github.com/sass-maker/saas-maker/tree/main/apps/mcp). This repository preserves historical source; it is no longer a product or a release source.

Existing MCP endpoints and product authentication scopes remain in place. Report new issues in [SaaS Maker](https://github.com/sass-maker/saas-maker/issues). Use `pnpm deploy:mcp` from SaaS Maker.

The historical publisher fails closed. The former Wrangler configuration is retained at `docs/archive/wrangler.pre-absorption.jsonc`, outside automatic deployment discovery. Do not restore it to publish from this repository.

Previous documentation is preserved in [the archive](docs/archive/README.pre-absorption.md). Current contracts and release instructions live in SaaS Maker.
