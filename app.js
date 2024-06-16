const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models');
const routes = require('./routes/routes'); 

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
  });
});
