const sum = require('../src/sum');

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds more than 2 numbers", () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test("adds more than 2 numbers correctly", () => {
  expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
  expect(sum(1, 2, -1, 3, 4, 5, 1, ' ', undefined, 6)).toBe(21);
});

