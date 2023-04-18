const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");
const catchAsync = require("../helpers/catchAsync");
const admin = require("../helpers/firebase");
const userModel = require("../models/user.model");

// 1st call get auth token , then getFirebaseUid then call checkIfAuthenticated

const getAuthToken = catchAsync(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
    next();
  } else
    next(
      new ApiError(httpStatus.UNAUTHORIZED, "Authorization token not found")
    );
});

// Check if the passwords match
const checkIfAuthenticated = catchAsync(async (req, res, next) => {
  // search using the firebaseUid
  // the auth token here is the mongodb id
  const { authToken } = req;
  console.log(authToken);
  const existingUserInDb = await userModel.findById(authToken);

  if (!existingUserInDb)
    next(new ApiError(httpStatus.UNAUTHORIZED, "User not authorized"));

  req.user = existingUserInDb;
  req._id = authToken;
  next();
});

module.exports = {
  getAuthToken,
  checkIfAuthenticated,
};
