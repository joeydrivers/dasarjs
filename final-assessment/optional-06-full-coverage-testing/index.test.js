import { strict as assert } from 'node:assert';
import sum from './index.js';

// Test: Penjumlahan dua bilangan positif
assert.strictEqual(sum(5, 3), 8, '5 + 3 should equal 8');

// Test: Penjumlahan dengan salah satu bilangan 0
assert.strictEqual(sum(0, 7), 7, '0 + 7 should equal 7');
assert.strictEqual(sum(7, 0), 7, '7 + 0 should equal 7');

// Test: Penjumlahan dua bilangan 0
assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');

// Test: Penjumlahan dengan bilangan negatif (harus mengembalikan 0)
assert.strictEqual(sum(-5, 3), 0, '-5 + 3 should equal 0');
assert.strictEqual(sum(5, -3), 0, '5 + -3 should equal 0');
assert.strictEqual(sum(-5, -3), 0, '-5 + -3 should equal 0');

// Test: Penjumlahan dengan input bukan bilangan (harus mengembalikan 0)
assert.strictEqual(sum('5', 3), 0, '"5" + 3 should equal 0');
assert.strictEqual(sum(5, '3'), 0, '5 + "3" should equal 0');
assert.strictEqual(sum(true, false), 0, 'true + false should equal 0');
assert.strictEqual(sum(null, undefined), 0, 'null + undefined should equal 0');
assert.strictEqual(sum([], {}), 0, '[] + {} should equal 0');

// Test: Penjumlahan dengan nilai desimal (bilangan positif)
assert.strictEqual(sum(2.5, 3.5), 6, '2.5 + 3.5 should equal 6');

// Test: Penjumlahan dengan nilai desimal (bilangan negatif, harus mengembalikan 0)
assert.strictEqual(sum(-2.5, 3.5), 0, '-2.5 + 3.5 should equal 0');
assert.strictEqual(sum(2.5, -3.5), 0, '2.5 + -3.5 should equal 0');
