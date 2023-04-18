const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  registerEvent,
  registeredEvents,
} = require("../controllers/event.controller");

const {
  getAuthToken,
  checkIfAuthenticated,
} = require("../middlewares/validateUser.middleware");

router
  .get("/event/getAllEvents", [], getAllEvents)
  .post(
    "/event/registerEvent/:eventId",
    [getAuthToken, checkIfAuthenticated],
    registerEvent
  )
  .get(
    "/event/registeredEvents",
    [getAuthToken, checkIfAuthenticated],
    registeredEvents
  );
// post /event/ req.body - details
// [getAuthToken, getFirebaseUid, checkIfAdmin]

module.exports = router;
