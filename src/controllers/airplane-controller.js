const  {AirPlaneService} = require('../services');
const {StatusCodes} = require('http-status-codes')
const airPlaneRepository = require("../repositories/crud-repository");
async function createAirPlane(req , res){
    try {
        const airplane = await AirPlaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity : req.body.capacity

        })
        return res.status(StatusCodes.CREATED).json({
            success : true ,
            message : 'Successfully created an airplane',
            data: airplane ,
            error : {}
        });
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating airplane",
            data : {},
            error : e
        })
    };
}
async function getAirplanes(req , res) {
    try{
        const airplanes = await AirPlaneService.getAirplanes();
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully get Airplanes',
            data : airplanes ,
            error : {}
        })
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't fetch Airplanes from database",
            data : {},
            error : e
        })
    }
}
module.exports = {
    createAirPlane ,
    getAirplanes
}