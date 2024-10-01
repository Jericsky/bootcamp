const express = require("express");
const userController = require("../controllers/user");
const { verify } = require("../auth");
const errorHandler = require("../middleware/errorHandler");

const router = express.Router();

router.post("/check-email", userController.checkEmailExists, errorHandler);

router.post("/register", userController.registerUser, errorHandler);

router.post("/login", userController.loginUser, errorHandler);

router.post("/details", verify, userController.getProfile, errorHandler);

module.exports = router;
