const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const UserService = require("../services/user.services");

const getUserDetails = catchAsync(async (req, res, next) => {
  const { _id } = req;

  const userDetails = await UserService.getUserDetails(_id);

  return res.status(httpStatus.OK).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "Successfully fetched the details of the user",
    data: userDetails,
  });
});

const updateUserDetails = catchAsync(async (req, res, next) => {
  const { _id } = req;
  const data = req.body;
  console.log(data)
  const updateUser = await UserService.updateUserDetails(_id, data);

  return res.status(httpStatus.OK).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "Successfully updated the details of the user",
    data: updateUser,
  });
});

module.exports = {
  getUserDetails,
  updateUserDetails,
};
