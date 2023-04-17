const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const UserService = require("../services/user.services");

const getUserDetails = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;

  const userDetails = await UserService.getUserDetails(firebaseUid);

  return res.status(httpStatus.FOUND).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "Successfully fetched the details of the user",
    data: userDetails,
  });
});

const updateUserDetails = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;
  const data = req.body;
  const updateUser = await UserService.updateUserDetails(
    firebaseUid,
    data
  );

  return res.status(httpStatus.FOUND).json({
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
