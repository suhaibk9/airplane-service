const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  // const { city, Airport } = require('./models/index');
  // const london = await city.findByPk(2);
  // const heathrow = await london.createAirport({
  //   name: 'Heathrow Airport',
  //   code: 'LHR',
  //   cityId: london.id,
  //   address: 'Longford, Hounslow TW6, United Kingdom',
  // });
  // const gatwick = await london.createAirport({
  //   name: 'Gatwick Airport',
  //   code: 'LGW',
  //   cityId: london.id,
  //   address: 'Horley, Gatwick RH6 0NP, United Kingdom',
  // });
  // const allAirports = await london.getAirports();
  // console.log(allAirports);
  // const { city, Airport } = require('./models/index');
  // const varanasi = await city.findByPk(2);
  // await varanasi.createAirport({
  //   name: 'Lal Bahadur Shastri Airport',
  //   code: 'VNS',
  //   cityId: varanasi.id,
  //   address: 'Babatpur, Varanasi, Uttar Pradesh, India',
  // });
});
