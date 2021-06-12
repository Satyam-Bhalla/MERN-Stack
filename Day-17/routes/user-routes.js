// Other libraries importing
const express = require('express');

// Self created functions/files/classes
const userController = require('../controllers/user-controller');


const router = express.Router();



router.post("/signup",  userController.userSignup);
router.post("/login", userController.userLogin);
router.get("/getInfo/:userName/:userAge", userController.userInfo);


module.exports = router;

