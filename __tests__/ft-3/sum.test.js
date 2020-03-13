const sum = require('../../src/sum');

describe('handles edge cases', () => {
  test("adds more than 2 numbers correctly", () => {
    expect(sum(1, 2, -1, 3, 4, 5, 1, ' ', undefined, 6)).toBe(21);
    expect(sum()).toBe(0);
  });
});
