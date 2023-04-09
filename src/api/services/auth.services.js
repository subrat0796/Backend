const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");
const userModel = require("../models/user.model");

const loginSkillsUser = async (firebaseUid) => {
  const userInDb = await userModel.findOne({ firebaseUid });

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User doesn't exists");
  }

  return userInDb;
};

const signUpSkillsUser = async (firebaseUid) => {
  const userInDb = await userModel.findOne({ firebaseUid });

  if (userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User already exists");
  }

  const createNewUser = await userModel.create({ firebaseUid });

  return createNewUser;
};

module.exports = {
  loginSkillsUser,
  signUpSkillsUser,
};
