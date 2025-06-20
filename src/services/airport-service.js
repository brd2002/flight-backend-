const {AirportRepository} = require('../repositories');
const airportRepository = new AirportRepository();
async function createAirport(data){
    try{
        const airport = await airportRepository.create(data);
        return airport;
    }catch (e) {
        throw e ;
    }
}
async function getAirports(){
    try{
        const airports = await airportRepository.getAll();
        return airports;
    }catch (e) {
        throw e ;
    }
}

async function getAirportById(id){
    try{
        const airport = await airportRepository.get(id);
        return airport;
    }catch (e){
        throw e ;
    }
}
async function destroyAirport(id){
    try{
        const result = await airportRepository.destroy(id);
        return result;
    }catch (e) {
        throw e ;
    }
}
module.exports = {
    createAirport , getAirports , getAirportById , destroyAirport
}