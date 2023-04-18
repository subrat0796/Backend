const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");

const UserRepository = require("../repositories/user.repository");
const userModel = require("../models/user.model");
const { Types, SchemaTypes } = require("mongoose");
// const { Types } = require("mongoose");

const getUserDetails = async (userId) => {
  console.log(userId);
  const userInDb = await userModel
    .findOne({ _id: Types.ObjectId(userId) })
    .select({
      password: 0,
    });

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User does not exist");
  }

  return userInDb;
};

const updateUserDetails = async (userId, otherDetails) => {
  const updateUserInDb = await userModel
    .findByIdAndUpdate(
      Types.ObjectId(userId),
      otherDetails ,
      {
        returnOriginal: false,
      }
    )
    .select({ password: 0 })
    .catch((err) => {
      throw new ApiError(httpStatus.UNAUTHORIZED, err);
    });

  console.log(updateUserInDb)

  return updateUserInDb;
};

module.exports = {
  getUserDetails,
  updateUserDetails,
};
