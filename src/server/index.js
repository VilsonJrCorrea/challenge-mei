
const { app } = require('../components/index');

module.exports = function (port) {
  return app.listen(port, () => {
    console.log(`Server started in port: ${port}`);
  });
};
