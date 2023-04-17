const mongoose = require("mongoose");

const EventRegistrationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "User is missing"],
    },
    //  Rest not sure !
  },
  {
    timestamps: true,
    versionKey: false,
    strict: true,
  }
);

module.exports = mongoose.model("EventRegistrations", EventRegistrationSchema);
