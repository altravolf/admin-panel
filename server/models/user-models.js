const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// ? premethod
userSchema.pre("save", async function () {
    const hashedPassword = await bcryptjs.hash(this.password, 10);
    this.password = hashedPassword;
})

// ? jwt
userSchema.methods.genenrateJwtToken = async function (next) {
    try {
        if (!this._id || !process.env.JWT_SECRET_KEY) {
            throw new Error("Missing _id or JWT_SECRET_KEY");
        }

        const token = jwt.sign({ id: this._id.toString(), email: this.email, username: this.username, isAdmin: this.isAdmin }, process.env.JWT_SECRET_KEY,
            { expiresIn: "7d" }
        );

        return token;
    } catch (error) {
        next(error);
    }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;