const mongoose = require('mongoose');

const ForumModel = new mongoose.Schema({
  forumId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: null
  },
  subTitle: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  meta: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  }
}, { timestamps: true });

module.exports = mongoose.model('Forum', ForumModel);