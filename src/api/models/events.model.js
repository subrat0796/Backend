const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Event is missing"],
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
  eventType: {
    type: String,
    enum: ["funEvents", "technicalEvents", "workshops", "culturalEvents"],
    required: [true, "Event type is missing"],
  },
  clubName: {
    type: String,
    required: [true, "Club name is missing"],
  },
});

module.exports = mongoose.model("Events", EventsSchema);
