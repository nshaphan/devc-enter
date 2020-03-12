const sum = require('../../src/sum');

describe('does basic addition', () => {
  test("correctly adds 2 +ve numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(5, 4)).toBe(9);
    expect(sum(10, 5)).toBe(15);
  });

  test("correctly adds 2 -ve numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
    expect(sum(-5, -4)).toBe(-9);
    expect(sum(-10, -5)).toBe(-15);
  });

  test("correctly adds +ve & -ve numbers", () => {
    expect(sum(2, -3)).toBe(-1);
    expect(sum(-5, 8)).toBe(3);
    expect(sum(-10, 5)).toBe(-5);
  });
})