const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["member", "admin"],
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
