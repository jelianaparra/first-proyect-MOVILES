const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    runTime: {
      type: String,
      required: true,
      trim: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: true,
      trim: true,
    },
    productionCo: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    like: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    disLike: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("movies", moviesSchema);
