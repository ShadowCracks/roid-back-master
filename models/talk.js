const mongoose = require('mongoose');

const TalkModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'User'
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'Topic'
  },
  parentTalkId: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'Talk'
  },
  text: {
    type: String,
    default: null,
  },
  meta: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  }
}, { timestamps: true });

module.exports = mongoose.model('Talk', TalkModel);