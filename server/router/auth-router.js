const express = require('express');
const authRouter = express.Router();
const authController = require("../controllers/auth-controller");

// ? Using route method, we can use get and post methods simultaneously.
authRouter.route("/")
    .get(authController.home);


authRouter.route("/register")
    .get(authController.getRegister);




module.exports = authRouter;