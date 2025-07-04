const  {FlightService} = require('../services');
const {StatusCodes} = require('http-status-codes')
async function createFlight(req , res){
    try {
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arivalAirportId : req.body.arivalAirportId,
            arivalTime : req.body.arivalTime,
            departureTime : req.body.departureTime,
            price: req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        })
        return res.status(StatusCodes.CREATED).json({
            success : true ,
            message : 'Successfully created an flight',
            data: flight ,
            error : {}
        });
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating flight",
            data : {},
            error : e
        })
    };
}
async function getAllFlights(req , res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully get all flight',
            data: flights ,
            error : {}
        });
    } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while searching flight",
            data : {},
            error : error
        })
    }
}

module.exports = {
    createFlight,getAllFlights
}