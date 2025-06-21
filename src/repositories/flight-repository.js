const {flight} = require("../models")
const crudRepository = require("./crud-repository");
class FlightRepository extends  crudRepository {
    constructor() {
        super(flight);
    }
}
module.exports = FlightRepository;