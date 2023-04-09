const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const {} = require("");

const loginUser = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;
  // const loginUser =

  return res.status(httpStatus.FOUND).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "User found and logged in",
    // data :
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;

  // const createUser

  return res.status(httpStatus.CREATED).json({
    code: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "User created successfully",
    // data :
  });
});

module.exports = {
  loginUser,
  createUser,
};
