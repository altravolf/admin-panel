const express = require('express');
const app = express();
const port = 3000;

const authRouter = require('./router/auth-router');

app.use(express.json());

app.use('/api/auth', authRouter);




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
