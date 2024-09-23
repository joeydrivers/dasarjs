import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function test', (t) => {
  assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) should return 3');
  assert.strictEqual(sum(-1, 1), 0, 'sum(-1, 1) should return 0');
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
});
