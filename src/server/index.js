const app = require('../components/index');

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started in port: ${port}`);
});
