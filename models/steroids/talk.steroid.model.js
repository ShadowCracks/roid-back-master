const { Schema, model, Types } = require("mongoose");

const SteroidTalkModel = new Schema(
  {
    talkId: {
      type: String,
      required: true,
    },
    image: {
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
    effectiveness: {
      type: String,
      required: true,
    },
    credibility: {
      type: String,
      required: true,
    },
    sideEffects: {
      type: String,
      required: true,
    },
    overall: {
      type: String,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
    votes: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("steroid-talk", SteroidTalkModel);
