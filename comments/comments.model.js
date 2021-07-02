const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
  {
    identity: {
      type: Object,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
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
    movie: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("comments", commentsSchema);
