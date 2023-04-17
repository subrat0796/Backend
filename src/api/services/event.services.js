const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");

const eventsModel = require("../models/events.model");
const eventRegistrationModel = require("../models/eventRegistration.model");
const userModel = require("../models/user.model");

const getAllEvents = async () => {
  const eventsInDb = await eventsModel.find({});

  return eventsInDb;
};

const registerEvent = async (firebaseUid, eventId) => {
  const userInDb = await userModel.findOne({ firebaseUid });

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User does not exist");
  }

  const eventRegistered = await eventRegistrationModel.create({
    eventId: eventId,
    userId: firebaseUid,
  });

  return eventRegistered;
};

const registeredEvents = async (firebaseUid) => {
  const registeredEventsInDb = await eventRegistrationModel.find({
    userId: firebaseUid,
  });

  return registeredEventsInDb;
};

module.exports = {
  getAllEvents,
  registerEvent,
  registeredEvents,
};
