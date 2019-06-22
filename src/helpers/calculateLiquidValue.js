module.exports = function (value, plots) {
  const baseTax = 1.8;
  const tax = 1.99;
  if (value > 0 && plots > 0) {
    return value + baseTax + (tax * plots);
  }
};
