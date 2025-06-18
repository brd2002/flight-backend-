
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

module.exports = {
    createCity , 

}