
const {CityRepository} = require('../repositories');
const cityRepository = new CityRepository();
async function createCity(data) {
    try{
        const city = await cityRepository.create(data);
        return city;
    }catch (e) {
        throw e;
    }
}
async function getAllCity() {
    try {
        const cities= await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw e; 
    }
}
module.exports = {
    createCity , 
    getAllCity

}