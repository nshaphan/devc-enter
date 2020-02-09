function sum(a, b, ...others) {
  const all = [a, b, ...others].filter(n => `${n}`.trim() !== '' && !isNaN(n));
  return all.reduce((total, num) => total + num, 0);
}
module.exports = sum;
