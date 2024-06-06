const bcryptjs = require("bcryptjs");

const User = require("../models/user-models");

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

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // const hashedPassword = await bcryptjs.hash(password, 10);

        // await User.create({ username, email, password: hashedPassword });

        await User.create({ username, email, password });
        res.status(201).json({ message: "User created successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = { home, getRegister, postRegister };