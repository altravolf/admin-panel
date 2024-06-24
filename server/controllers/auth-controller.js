const User = require("../models/user-models");
const bcryptjs = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.send("Hello World");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}



const getRegister = async (req, res) => {
    try {
        res.send("Hello World to register again");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const emailExist = await User.findOne({ email });
        const usernameExist = await User.findOne({ username });

        if (emailExist || usernameExist) {
            return res.status(400).json({ message: "User already exists" });
        }


        // Password is hasing and salting at user-models.js

        const userCreated = await User.create({ username, email, password });

        res.status(201).json({
            message: "User created successfully",
            token: await userCreated.genenrateJwtToken(),
            userId: userCreated._id.toString()
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}


// **************
// *** Login ***
// **************

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "User logged in successfully",
            token: await user.genenrateJwtToken(),
            userId: user._id.toString()
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = { home, getRegister, postRegister, postLogin };