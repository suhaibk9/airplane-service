const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
