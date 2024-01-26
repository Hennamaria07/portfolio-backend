const express = require("express");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Use the userRouter middleware
app.use(userRouter);

module.exports = app;
