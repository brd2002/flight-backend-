const { Logger } = require("../config");
const { flight, Airplane, Airport, City } = require("../models");
const crudRepository = require("./crud-repository");
class FlightRepository extends crudRepository {
  constructor() {
    super(flight);
  }
  async getAllFlights(filter) {
    try {
        //NOTE - this is a nested association example
      const response = await flight.findAll({
        where: filter,
        attributes: { exclude: ['createdAt', 'updatedAt'] } ,
        include: [
          {
            model: Airplane,
            as: "Airplane_Detail",
            required: true,
            attributes: { exclude: ['createdAt', 'updatedAt'] } 
          },
          {
            //NOTE - this is a nested association example
            model: Airport,
            as: "DepartureAirport", // Use alias for departure
            required: true,
            attributes: { exclude: ['createdAt', 'updatedAt'] } ,
            include: [{ 
                model: City, 
                as: "City",
                attributes: { exclude: ['createdAt', 'updatedAt'] } 
            }],
          },
          {
            //NOTE - this is a nested association example
            model: Airport,
            as: "ArrivalAirport", // Use alias for arrival
            required: true,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{ 
                model: City, 
                as: "City",
                attributes: { exclude: ['createdAt', 'updatedAt'] } 
            }],
          },
        ],
      });
      return response;
    } catch (e) {
      Logger.error("Something went wrong in crud repo : in getAll function");
      throw e;
    }
  }
}
module.exports = FlightRepository;
