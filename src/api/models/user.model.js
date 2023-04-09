const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      unique: true,
      index: true,
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
      enum: ["admin", "member"],
      required: true,
      default: "member",
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
