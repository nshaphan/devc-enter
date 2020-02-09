function sum(a, b, ...others) {
  const all = [a, b, ...others];
  return all.reduce((total, num) => total + num, 0);
}
module.exports = sum;
