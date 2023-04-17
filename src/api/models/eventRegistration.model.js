const mongoose = require("mongoose");

const EventRegistrationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User Id is missing"],
    },
    eventId: {
      type: String,
      required: [true, "Event Id is missing"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: true,
  }
);

module.exports = mongoose.model("EventRegistrations", EventRegistrationSchema);
