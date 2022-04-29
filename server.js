const express = require('express');
const app = express();
require("dotenv").config();
const connect = require('./app/config/db')
const UserRoute = require('./app/routes/user.route')
app.use(express.json());
app.use('/users',UserRoute);
const PORT = process.env.PORT
const start = async () => {
    await connect();
    app.listen(PORT,() => {
        console.log(`listening on PORT ${PORT}`)
    })
}
// start()
module.exports = start;