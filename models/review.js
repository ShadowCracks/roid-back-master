const mongoose = require('mongoose');

const ReviewModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'User'
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'Topic'
  },
  parentReviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'Review'
  },
  reviewText: {
    type: String,
    required: true,
    default: null,
  },
  meta: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  }
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewModel);