const httpStatus = require("http-status");
const ApiError = require("../helpers/ApiError");

const eventsModel = require("../models/events.model");
const eventRegistrationModel = require("../models/eventRegistration.model");
const userModel = require("../models/user.model");
const { Types } = require("mongoose");

const getAllEvents = async () => {
  const eventsInDb = await eventsModel.find({});

  return eventsInDb;
};

const registerEvent = async (userId, eventId) => {
  const userInDb = await userModel.findById(userId);

  if (!userInDb) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User does not exist");
  }

  const eventRegistered = await eventRegistrationModel.create({
    eventId: eventId,
    userId: userInDb._id,
  });

  return eventRegistered;
};

const getEventDetails = async (eventId) => {
  return await eventsModel.find({
    _id: Types.ObjectId(eventId),
  });
};

const registeredEvents = async (userId) => {
  let registeredEventsInDb = await eventRegistrationModel.find({
    userId,
  });

  const userEventsId = registeredEventsInDb.map(({ eventId }) => eventId);
  const userEvents = eventsModel.find({ _id: { $in: userEventsId } });
  // await Promise.all(registeredEventsInDb);

  return userEvents;
};

module.exports = {
  getAllEvents,
  registerEvent,
  registeredEvents,
};
