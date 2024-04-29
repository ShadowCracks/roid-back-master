const { Schema, model, Types } = require("mongoose");

const SteroidCycleModel = new Schema(
  {
    cycleId: {
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
    username: {
      type: String,
      required: true,
    },
    userId: {
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

module.exports = model("steroid-cycle", SteroidCycleModel);
