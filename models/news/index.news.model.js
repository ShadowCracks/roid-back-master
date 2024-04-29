const { Schema, model, Types } = require("mongoose");

const NewsModel = new Schema(
  {
    newsId: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    viewed: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("news", NewsModel);
