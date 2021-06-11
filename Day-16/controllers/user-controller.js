const HttpError = require('../utils/http-error');

const userSignup = (req,res,next) => {
    console.log(req.body);

    res.json({'message': 'user signed up'});
}

const userLogin = (req,res,next) => {
    console.log(req.body);

    res.status(200).json({'message': 'user logged in'});
}

const userGetInfo = (req,res,next) => {
    // Query Params for getting variable in the query
    console.log(req.query);

    // For getting the parameters in the req url
    console.log(req.params);

    
    res.json({'user': {'name': 'Satyam', 'age': 15}});
}

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;