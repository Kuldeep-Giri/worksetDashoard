const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require("dotenv");
const ApiRoute = require("./routes/apiRoutes")
const authRoute = require("./routes/authRoute")
const bodyParser = require("body-parser")
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',ApiRoute)
app.use('/api/user',authRoute)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server Runnning on port ${port}`)
}) 