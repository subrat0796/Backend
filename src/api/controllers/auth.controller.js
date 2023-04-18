const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const AuthService = require("../services/auth.services");

const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const loginUsr = await AuthService.loginUser(email, password);

  return res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "User found and logged in",
    data: loginUsr,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const createUsr = await AuthService.signUpUser(email, password);

  return res.status(httpStatus.OK).json({
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
