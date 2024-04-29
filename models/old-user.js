const { Schema, model, Types } = require('mongoose');

const UserModel = new Schema({
	email: {
		type: String,
		required: true,
    unique: true,
    lowercase: true,
    trim: true,
	},
	username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, { timestamps: true });

module.exports = model('user', UserModel);