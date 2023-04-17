const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");

const UserRepository = require("../repositories/user.repository");
const userModel = require("../models/user.model");
const { Types } = require("mongoose");

const getUserDetails = async (firebaseUid) => {
  const userInDb = await UserRepository.findOne({ firebaseUid });

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User does not exist");
  }

  return userInDb;
};

const updateUserDetails = async (firebaseUid, otherDetails) => {
  const updateUserInDb = await userModel
    .findOneAndUpdate({ firebaseUid }, otherDetails, {
      returnOriginal: false,
    })
    .catch((err) => {
      throw new ApiError(httpStatus.UNAUTHORIZED, err);
    });

  return updateUserInDb;
};

module.exports = {
  getUserDetails,
  updateUserDetails,
};
