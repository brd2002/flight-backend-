const {CityService} = require('../services')
const {StatusCodes} = require('http-status-codes');
async function createCity(req , res) {
    try {
        const cityName = req.body.name;
        const city = await CityService.createCity({
            name : cityName
        });
        if (city){
            return res.status(StatusCodes.CREATED).json({
                success : true ,
                message : 'Successfully created a city',
                data: city ,
                error : {}
            });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating city",
            data : {} ,
            error : {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating city",
            data : {} ,
            error : error
        })
    }
}
async function getAllCity(req ,res) {
    try {
        const cities = await CityService.getAllCity();
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully created a city',
            data: cities ,
            error : {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating city",
            data : {} ,
            error : error
        })
    }
}
module.exports = {
    createCity ,
    getAllCity
}