const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  registerEvent,
  registeredEvents,
} = require("../controllers/event.controller");

const {
  getAuthToken,
  getFirebaseUid,
  checkIfAuthenticated,
} = require("../middlewares/validateUser.middleware");

router
  .get("/event/getAllEvents", [], getAllEvents)
  .post(
    "/event/registerEvent/:eventId",
    [getAuthToken, getFirebaseUid, checkIfAuthenticated],
    registerEvent
  )
  .get(
    "/event/registeredEvents",
    [getAuthToken, getFirebaseUid, checkIfAuthenticated],
    registeredEvents
  );

module.exports = router;
