require('dotenv').config();

const express = require("express");
const app = express();
const port = 8000;

const mongoose = require('mongoose');

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require("./server/routes/joke.routes");
AllMyJokesRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );