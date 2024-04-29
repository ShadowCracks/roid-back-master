const { Schema, model, Types } = require('mongoose');

const UserModel = new Schema({
	email: {
		type: String,
		required: true,
        unique: true,
        lowercase: true,
        trim: true,
	},
	userName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    publicGroupObject: {
        type: Object,
        required: true,
    },
    aboutYourself: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    bodyFat: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = model('user', UserModel);