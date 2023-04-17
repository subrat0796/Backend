const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");

const UserRepository = require("../repositories/user.repository");

const loginUser = async (firebaseUid) => {
  const userInDb = await UserRepository.findOne({ firebaseUid });

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User doesn't exists");
  }

  // We won't be creating any jwt token here . The firebase UID is a unique token
  // We would be using it in every validation step to retrieve any data about that user

  return userInDb;
};

const signUpUser = async (firebaseUid) => {
  const userInDb = await UserRepository.findOne({ firebaseUid });

  if (userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User already exists");
  }

  const createNewUser = await UserRepository.create({ firebaseUid });

  return createNewUser;
};

module.exports = {
  loginUser,
  signUpUser,
};
