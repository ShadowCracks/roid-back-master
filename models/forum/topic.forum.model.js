const mongoose = require("mongoose");

const TopicModel = new mongoose.Schema(
  {
    topicId: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      required: true,
    },
    meta: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Topic", TopicModel);
