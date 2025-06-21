const {FlightRepository} = require('../repositories');
const {Op} = require('sequelize');
const flightRepository = new FlightRepository();
async function createFlight(data){
    try{
        const flight = await flightRepository.create(data);
        return flight;
    }catch (e) {
        throw e ;
    }
}

async function getAllFlights(query){ 
    let customFilters = {};
    //trips=MUM-DEL
    if(query.trips){
        [departureAirportId , arivalAirportId] = query.trips.split('-');
        customFilters.departureAirportId = departureAirportId;
        customFilters.arivalAirportId = arivalAirportId;
        // Todo : add a check for both not should be same
    }
    if(query.price){
        [minPrice , maxPrice] = query.price.split('-');
        customFilters.price = {
            [Op.between] : [minPrice , (maxPrice === undefined) ? 20000 : maxPrice]
        };
    }
    if(query.travellers){
        customFilters.totalSeats= {
            [Op.gte] : query.travellers
        }
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilters);
        return flights;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    createFlight,
    getAllFlights
}