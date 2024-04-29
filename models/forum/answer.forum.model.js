const mongoose = require('mongoose');

const ForumAnswerModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'User'
  },
  forumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'Forum'
  },
  parentAnswerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'ForumAnswer'
  },
  text: {
    type: String,
    required: true,
    default: null,
  },
  meta: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  }
}, { timestamps: true });

module.exports = mongoose.model('ForumAnswer', ForumAnswerModel);