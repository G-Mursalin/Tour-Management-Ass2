const express = require("express");
const app = express();
const tourRoute = require("./routes/tourRoute");

//Middleware
app.use(express.json());

//Routs
app.use("/api/v1/tours", tourRoute);

module.exports = app;
