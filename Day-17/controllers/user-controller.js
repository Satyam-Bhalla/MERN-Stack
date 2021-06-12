const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const HttpError = require('../utils/http-error');

const userSignup = async (req,res,next) => {
    // console.log(req.body);
    const {name, age, email, password} = req.body;
    // Existing user
    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    }catch(err){
        console.log(err);
        const error = new HttpError('Signup failed, please try later', 500);
        return next(error);
    }
    if(existingUser){
        const error = new HttpError('Email already in use', 422);
        return next(error);
    }
    // Encrypt password
    let hashedPasswaord;
    try{
        hashedPasswaord = await bcrypt.hash(password,12);
    }catch(err){
        const error = new HttpError('Password encryption failed', 500);
        return next(error);
    }
    // User Create
    const createUser = new User({
        name: name,
        password: hashedPasswaord,
        email: email,
        age: age || 0
    });
    try{
        await createUser.save();
        res.json({'message': 'user signed up'});
    }catch(err){
        console.log(err);
        const error = new HttpError('Signup failed', 500);
        return next(error);
    }
    
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