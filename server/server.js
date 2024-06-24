require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;
const connectMongoDB = require('./utils/db');
const authRouter = require('./router/auth-router');
const errorMiddleware = require("./middlewares/error-middleware");

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// error middleware
app.use(errorMiddleware);

// Connect to MongoDB
connectMongoDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })
})