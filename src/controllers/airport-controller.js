const  {AirportService} = require('../services');
const {StatusCodes} = require('http-status-codes')
async function createAirport(req , res){
    try {
        const airport = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            address: req.body.address,
            cityId : req.body.cityId
        })
        return res.status(StatusCodes.CREATED).json({
            success : true ,
            message : 'Successfully created an airport',
            data: airport ,
            error : {}
        });
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating airport",
            data : {},
            error : e
        })
    };
}
async function getAirports(req , res) {
    try{
        const airports = await AirportService.getAirports();
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully get airports',
            data : airports ,
            error : {}
        })
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't fetch Airports from database",
            data : {},
            error : e
        })
    }
}
async function getAirportById(req , res) {
    try{
        const airportId = req.params.id;
        const airport = await AirportService.getAirportById(airportId);
        if (airport == null) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success : false ,
                message : 'airport does not exist',
                data : {},
                error : {}
            })
        }
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully get airport by id',
            data : airport ,
            error : {}
        })
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't fetch airport from database",
            data : {},
            error : e
        })
    }
}
async function deleteAirport(req , res){
    try{
        const airportId  = req.params.id;
        const res = await AirportService.destroyAirport(airportId); 
        console.log(res);
        if (res === 1){
            return res.status(StatusCodes.OK).json({
                success : true ,
                message : 'Successfully deleted',
                data : {},
                error : {}
            });
        }

    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't delete airport",
            data : {},
            error : e
        })
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirportById,
    deleteAirport
}