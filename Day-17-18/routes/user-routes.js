// Other libraries importing
const express = require('express');

// Self created functions/files/classes
const userController = require('../controllers/user-controller');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();


// Unauthenticated
router.post("/signup",  userController.userSignup);
router.post("/login", userController.userLogin);

//Midleware to check authentication
router.use(checkAuth);

// Authenticated routes
router.get("/getInfo/:userName/:userAge", userController.userInfo);
router.post("/createPost", userController.createPost);

module.exports = router;

