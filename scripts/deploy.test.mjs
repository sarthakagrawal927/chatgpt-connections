import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

test('the retired publisher fails closed and directs releases to SaaS Maker', () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./deploy.mjs', import.meta.url))], {
    cwd: '/',
    encoding: 'utf8',
    env: { PATH: '' },
  });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /repository is retired/);
  assert.match(result.stderr, /sass-maker\/saas-maker\/tree\/main\/apps\/mcp/);
  assert.match(result.stderr, /pnpm deploy:mcp/);
});
