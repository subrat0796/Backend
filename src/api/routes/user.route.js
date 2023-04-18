const express = require("express");
const router = express.Router();

const {
  // Get details of the user
  getUserDetails,
  // Update the details of the user
  updateUserDetails,
} = require("../controllers/user.controller");

// middlewares
const {
  getAuthToken,
  checkIfAuthenticated,
} = require("../middlewares/validateUser.middleware");

router
  .get("/user/details", [getAuthToken, checkIfAuthenticated], getUserDetails)
  .post(
    "/user/updateDetails",
    [getAuthToken, checkIfAuthenticated],
    updateUserDetails
  );

module.exports = router;
