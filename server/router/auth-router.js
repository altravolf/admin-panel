const express = require('express');
const authRouter = express.Router();
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/auth-middleware");
const registerSchema = require("../validators/auth-validator");

// ? Using route method, we can use get and post methods simultaneously.
authRouter.route("/")
    .get(authController.home);


authRouter.route("/register")
    .get(authController.getRegister)
    .post(validate(registerSchema), authController.postRegister);

authRouter.route("/login")
    .post(authController.postLogin);


module.exports = authRouter;