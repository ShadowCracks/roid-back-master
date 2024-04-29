const { Schema, model, Types } = require("mongoose");

const SteroidsReviewCommentModel = new Schema(
  {
    commentId: {
      type: String,
      required: true,
    },
    reviewId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    stars: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("steroids-review-comment", SteroidsReviewCommentModel);
