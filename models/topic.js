const mongoose = require('mongoose');

const TopicModel = new mongoose.Schema({
  company: {
    type: String,
    required: true,
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
  }
}, { timestamps: true });

module.exports = mongoose.model('Topic', TopicModel);