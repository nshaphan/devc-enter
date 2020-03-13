import sum from '../../src/sum';

describe('adds more than 2 numbers', () => {
  test('correctly adds more than 2 +ve numbers', () => {
    expect(sum(5, 2, 3)).toBe(10);
  });

  test('correctly adds more than 2 -ve numbers', () => {
    expect(sum(-15, -7, -3)).toBe(-25);
  });

  test('correctly adds more than 2 +ve & -ve numbers', () => {
    expect(sum(-15, 7, 3)).toBe(-5);
    expect(sum(10, -5, 2, -11, 10)).toBe(6);
  });
});
