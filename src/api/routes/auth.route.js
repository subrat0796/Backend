const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/auth.controller");
const {
  getAuthToken,
  getFirebaseUid,
  checkIfAuthenticated,
} = require("../middlewares/validateUser.middleware");

router
  .get("/auth/signup", [getAuthToken, getFirebaseUid], createUser)
  .post(
    "/auth/login",
    [getAuthToken, getFirebaseUid, checkIfAuthenticated],
    loginUser
  );

module.exports = router;
