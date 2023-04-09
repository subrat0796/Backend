const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/auth.controller");

router.get("/auth/signup", [], createUser).post("/auth/login", [], loginUser);

module.exports = router;
