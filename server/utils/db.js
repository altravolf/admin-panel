const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI

const connectMongoDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connecting to MongoDB");
    }
    catch (err) {
        console.log(err);
        process.exit(0);
    }
}

module.exports = connectMongoDB;