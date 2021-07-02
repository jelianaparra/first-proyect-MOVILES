const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    direction: {
      type: String,
      required: true,
      trim: true,
      default: "unsigned",
    },
    age: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      default: "unsigned",
    },
    coments: {
      type: String,
      trim: true,
      default: "unsigned",
    },
    movies: {
      type: Object,
      trim: true,
      default: "unsigned",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
