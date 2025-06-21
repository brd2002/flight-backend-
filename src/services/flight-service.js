const {FlightRepository} = require('../repositories');
const flightRepository = new FlightRepository();
async function createFlight(data){
    try{
        const flight = await flightRepository.create(data);
        return flight;
    }catch (e) {
        throw e ;
    }
}

module.exports = {
    createFlight
}