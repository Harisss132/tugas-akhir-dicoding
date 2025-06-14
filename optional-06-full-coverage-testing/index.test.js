import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; 

test('Test fungsi sum', async (t) => {
  await t.test('Menjumlahkan dua bilangan positif', () => {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(10, 5), 15);
  });

  await t.test('Mengembalikan 0 jika salah satu input bukan number', () => {
    assert.strictEqual(sum('a', 3), 0);
    assert.strictEqual(sum(2, 'b'), 0);
    assert.strictEqual(sum('a', 'b'), 0);
  });

  await t.test('Mengembalikan 0 jika salah satu input negatif', () => {
    assert.strictEqual(sum(-1, 3), 0);
    assert.strictEqual(sum(2, -5), 0);
    assert.strictEqual(sum(-4, -5), 0);
  });

  await t.test('Menangani bilangan desimal', () => {
    assert.strictEqual(sum(2.5, 3.1), 5.6);
  });
});