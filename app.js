//requiring express
const express = require("express");
const app = express();

//requiring dotenv
const dotenv = require("dotenv").config({ path: "./.env" });
console.log(process.env.DATABASE);
//requring mongoose model for databser
const mongoose = require("mongoose");

//requiring appError
const appError = require("./utils/AppError");

//requiring body parser to parse the req data from user
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//require user route
const router = require("./routes/userRoute");
const AppError = require("./utils/AppError");
app.use("/users", router);

//using middleware to eroor handling
app.use("*", (req, res, next) => {
  next(new AppError("Cannot find the url", 400));
});

//error handling middleware
app.use((err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.status = err.status || "error";
  console.log(err.stack);
  res.status(err.statuscode).json({
    status: err.status,
    message: err.message,
    errror: err.stack,
  });
});

//calling server
app.listen(process.env.PORT || 3000, async () => {
  console.log("listening to port 3000 ");
  await mongoose.connect(process.env.DATABASE);
});
