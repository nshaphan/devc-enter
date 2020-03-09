const sum = require('../../src/sum');

describe('does basic addition', () => {
  test("adds 1 + 2 to produce 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 5 + 2 to produce 7", () => {
    expect(sum(5, 2)).toBe(7);
  });

  test("adds 10 + -2 to produce 8", () => {
    expect(sum(10, -2)).toBe(8);
  });
})