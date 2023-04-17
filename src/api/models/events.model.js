const mongoose = require("mongoose");

const Events = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User is missing"],
  },
  registrationLink: {
    // Not sure
  },
});
