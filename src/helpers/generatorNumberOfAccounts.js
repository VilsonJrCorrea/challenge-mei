module.exports = function () {
  const value = String(Math.floor(100000 + Math.random() * 900000));
  return Number(value.substring(0, 4));
};
