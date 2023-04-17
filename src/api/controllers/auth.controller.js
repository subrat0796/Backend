const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const AuthService = require("../services/auth.services");

const loginUser = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;
  const loginUser = await AuthService.loginUser(firebaseUid);

  return res.status(httpStatus.FOUND).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "User found and logged in",
    data: null,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;

  const createUser = await AuthService.signUpUser(firebaseUid);

  return res.status(httpStatus.CREATED).json({
    code: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "User created successfully",
    data: null,
  });
});

module.exports = {
  loginUser,
  createUser,
};
