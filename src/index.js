const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    //bad code alert
    // const {City} = require('./models');
    // const city =await City.findByPk(1);
    // console.log(city);
    // const response = city.createAirport({ name: 'JFK', code: 'JFK' });
});
