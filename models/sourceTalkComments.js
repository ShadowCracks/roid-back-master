const { Schema, model, Types } = require('mongoose');

const SourceTalkCommentsModel = new Schema({
    commentId: {
        type: String,
        required: true,
	},
    sourceId: {
        type: String,
        required: true,
	},
	commentText: {
        type: String,
        required: true,
    },
    commentKarma: {
        type: String,
        required: true,
    },
    commentUserName: {
        type: String,
        required: true,
    },
    commentUserId: {
        type: String,
        required: true,
    },
    userProfileImage: {
        type: String,
        required: true,
    },
    parentCommentId: {
        type: String,
    },
    parentReplyId: {
        type: String,
    },
    likesCount: {
        type: String,
        required: true,
    },
    likesUser: {
        type: Array,
        required: true,
    },
    dislikesCount: {
        type: String,
        required: true,
    },
    dislikesUser: {
        type: Array,
        required: true,
    },

}, { timestamps: true });

module.exports = model('source-talk-comments', SourceTalkCommentsModel);


