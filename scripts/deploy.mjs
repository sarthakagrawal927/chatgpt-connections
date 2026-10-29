#!/usr/bin/env node

console.error('deploy blocked: this repository is retired. The shared MCP gateway is maintained in https://github.com/sass-maker/saas-maker/tree/main/apps/mcp. Use pnpm deploy:mcp from SaaS Maker.');
process.exitCode = 1;
