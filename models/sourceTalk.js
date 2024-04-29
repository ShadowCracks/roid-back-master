const { Schema, model, Types } = require('mongoose');

const SourceTalkModel = new Schema({
    sourceId: {
        type: String,
        required: true,
	},
	sourceName: {
        type: String,
        required: true,
    },
    sourceAddedBy: {
        type: String,
        required: true,
    },
    sourceAddedTime: {
        type: String,
        required: true,
    },
    numOfComments: {
        type: Number,
    },
    lastCommentUserId: {
        type: String,
    },
    lastCommentUserName: {
        type: String,
    },
    lastCommentTimestamp: {
        type: String,
    },
}, { timestamps: true });

module.exports = model('source-talk', SourceTalkModel);