const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    postCode: {
      type: Number,
      required: true,
    },    
    address: {
      type: String,
      required: true,
    },
    addressDetail: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
    versionKey: false,
  }
);

module.exports = userSchema;
