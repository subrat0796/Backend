const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/auth.controller");
const {
  getAuthToken,
  checkIfAuthenticated,
} = require("../middlewares/validateUser.middleware");

router.post("/auth/signup", [], createUser).post("/auth/login", [], loginUser);

module.exports = router;
