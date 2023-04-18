const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const AuthService = require("../services/auth.services");

const loginUser = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;
  const loginUsr = await AuthService.loginUser(firebaseUid);

  return res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "User found and logged in",
    data: loginUsr,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;

  const createUsr = await AuthService.signUpUser(firebaseUid);

  return res.status(httpStatus.CREATED).json({
    code: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "User created successfully",
    data: createUsr,
  });
});

module.exports = {
  loginUser,
  createUser,
};
