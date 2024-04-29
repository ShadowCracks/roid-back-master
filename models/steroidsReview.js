const { Schema, model, Types } = require("mongoose");

const SteroidsReviewModel = new Schema(
  {
    reviewId: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("steroids-review", SteroidsReviewModel);
