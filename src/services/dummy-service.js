const {helper} = require('./helper-service')
export const execute = () =>{
    const result = helper();
    console.log("result",result);
    if(result){
        return "Learning js";
    }else{
        return "Learning Reactjs"
    }
}
