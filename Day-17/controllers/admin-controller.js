const HttpError = require('../utils/http-error');

const adminSignup = (req,res,next) => {
    console.log(req.body);

    return res.json({'message': 'Admin signed up'});
}

const adminLogin = (req,res,next) => {
    console.log(req.body);
    // const error = new HttpError("Faltu error", 500);
    // throw error;
    
    res.status(200).json({'message': 'Admin logged in'});
}



exports.adminSignup = adminSignup;
exports.adminLogin = adminLogin;
