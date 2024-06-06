const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

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

const User = new mongoose.model("User", userSchema);

module.exports = User;