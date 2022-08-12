const userModel = require("../models/userModels");
const AppError = require("../utils/AppError");

//requiring catchasync function to catch all errors
const catchasync = require("../utils/catchAsync");
const getAllUsers = catchasync(async (req, res, next) => {
  const data = await userModel.find();
  res.status(200).json({
    status: "success ",
    data, //shows all the data stored in the database
  });
});
//post the user to the database
const postUser = catchasync(async (req, res, next) => {
  const { name, age, location } = req.body;
  // if (!name == "undefined" || age == "undefined" || location == "undefined") {
  if (!location) {
    return next(
      new AppError("please input all field in the post method ", 400)
    );
  }
  const rawData = new userModel({
    name,
    age,
    location,
  });
  const data = await rawData.save();
  res.status(200).json({
    status: "success",
    data,
  });
});

//get user by id
const getUserById = catchasync(async (req, res, next) => {
  const id = req.params.id;
  const data = await userModel.findOne({ _id: id });
  res.status(200).json({
    status: "success",
    data,
  });
});
//delete user by id
const deleteUserById = catchasync(async (req, res, next) => {
  const id = req.params.id;
  const data = await userModel.findOneAndDelete({ _id: id });
  res.status(200).json({
    status: "success",
    message: "data deleted ",
  });
});

module.exports = {
  getAllUsers,
  postUser,
  getUserById,
  deleteUserById,
};
