import sum from '../../src/sum';

describe('secures the bag', () => {
  test('can handle edge cases', () => {
    expect(sum()).toBe(0);
    expect(sum(3)).toBe(3);
    expect(sum(1, 2, -1, '3', null, {}, [], 4, ' 5 ', 1, ' ', undefined, 6)).toBe(21);
  });
});
