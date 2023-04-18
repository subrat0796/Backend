const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const EventService = require("../services/event.services");

const getAllEvents = catchAsync(async (req, res, next) => {
  const allEvents = await EventService.getAllEvents();

  return res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Successfully fetched all the event details",
    data: allEvents,
  });
});

const registerEvent = catchAsync(async (req, res, next) => {
  const { _id } = req;
  const { eventId } = req.params;

  const registerForEvent = await EventService.registerEvent(_id, eventId);

  return res.status(httpStatus.OK).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "Successfully registered for the event",
    data: registerForEvent,
  });
});

const registeredEvents = catchAsync(async (req, res, next) => {
  const { _id } = req;

  const totalEventsRegistered = await EventService.registeredEvents(_id);

  return res.status(httpStatus.OK).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "Fetched all the registered events",
    data: totalEventsRegistered,
  });
});

module.exports = {
  getAllEvents,
  registerEvent,
  registeredEvents,
};
