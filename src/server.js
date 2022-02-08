const dotenv = require('dotenv');

const app = require('./index');

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server online!');
});
