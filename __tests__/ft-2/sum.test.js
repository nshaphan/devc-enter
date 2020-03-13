const sum = require('../../src/sum');

describe('adds more than 2 numbers', () => {
  test("correctly adds 1, 2, & 3", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  test("correctly adds 5, 7, & 3", () => {
    expect(sum(5, 7, 3)).toBe(15);
  });

  test("correctly adds 10, 5, 2, 11, 10", () => {
    expect(sum(10, 5, 2, 11, 10)).toBe(38);
  });
});
