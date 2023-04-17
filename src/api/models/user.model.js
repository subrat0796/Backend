const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    registrationNumber: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      default: "member",
    },
    whatsappNumber: {
      type: String,
      unique: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UserSchema);
