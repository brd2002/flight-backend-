const { Logger } = require("../config");
const {flight} = require("../models")
const crudRepository = require("./crud-repository");
class FlightRepository extends  crudRepository {
    constructor() {
        super(flight);
    }
    async getAllFlights(filter){
        try{
            const response = await this.model.findAll({
                where : filter
            });
            return response;
        }catch (e) {
            Logger.error('Something went wrong in crud repo : in getAll function');
            throw e;
        }
    }
}
module.exports = FlightRepository;