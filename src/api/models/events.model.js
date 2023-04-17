const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "User is missing"],
  },
  dateAndTime: {
    type: Date,
    required: [true, "Date is missing "],
  },
  eventDescription: {
    type: String,
    required: [true, "Event description is missing"],
  },
  eventDetails: {
    type: String,
    required: [true, "Event details link is missing"],
  },
});

module.exports = mongoose.model("Events", EventsSchema);
