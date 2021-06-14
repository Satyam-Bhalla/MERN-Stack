const jwt = require('jsonwebtoken');

const HttpError = require('../utils/http-error');

module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }

    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log("Inside check auth");
        if(!token){
            const error = new HttpError("Token doesn't exist, Please try later", 403);
            return next(error);
        }
        let decodedToken = null;
        if(req.headers.role == "User"){
            decodedToken = jwt.verify(token,"userSecretKey");
            console.log(decodedToken);
        }else if(req.headers.role == "Admin"){
            decodedToken = jwt.verify(token,"adminSecretKey");
            console.log(decodedToken);
        }

        req.user = decodedToken;


        next();


    }catch(err){
        const error = new HttpError("Error occured in middleware, Please try later", 403);
        return next(error);
    }
}