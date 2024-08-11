const express = require('express');
const app = express();
const cors = require('cors') // This is new
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config")
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
const authorRoutes = require('./routes/author.routes');
authorRoutes(app) ; 
app.listen(port, () => console.log(`Listening on port: ${port}`) );