const { Schema, model, Types } = require('mongoose');

const SourceTalkDetailsModel = new Schema({
    sourceTalkId: {
        type: String,
        required: true,
    },
    sourceId: {
        type: String,
        required: true,
	},
	sourceReplyId: {
        type: String,
        required: true,
    },
    SourceParentReplyId: {
        type: String,
        required: true,
    },
    SourceParentReplyUserId: {
        type: String,
        required: true,
    },
    SourceParentReplyUserName: {
        type: String,
        required: true,
    },
    talkerName: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    userProfileImage: {
        type: String,
        required: true,
    },
    commentKarma: {
        type: Number,
        required: true,
    },
    commentText: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = model('source-talk-details', SourceTalkDetailsModel);