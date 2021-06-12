const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();



router.post("/signup",  adminController.adminSignup);
router.post("/login", adminController.adminLogin);


module.exports = router;

