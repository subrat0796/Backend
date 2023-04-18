const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");

const UserRepository = require("../repositories/user.repository");

const loginUser = async (email, password) => {
  const userInDb = await UserRepository.findOne({ email, password });

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User doesn't exists");
  }

  // We won't be creating any jwt token here . The firebase UID is a unique token
  // We would be using it in every validation step to retrieve any data about that user

  return userInDb._id;
};

const signUpUser = async (email, password) => {
  const userInDb = await UserRepository.findOne({
    email: email,
    password: password,
  });

  if (userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User already exists");
  }

  const createNewUser = await UserRepository.create({ email, password });
  console.log(createNewUser);
  return createNewUser._id;
};

module.exports = {
  loginUser,
  signUpUser,
};
