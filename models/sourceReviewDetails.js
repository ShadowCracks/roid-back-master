const { Schema, model, Types } = require('mongoose');

const SourceReviewDetailsModel = new Schema({
    sourceReviewId: {
        type: String,
        required: true,
	},
    sourceId: {
        type: String,
        required: true,
	},
	reviewerName: {
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
    reviewKarma: {
        type: Number,
        required: true,
    },
    isReviewerRecommends: {
        type: Boolean,
        required: true,
    },
    myOverallExperience: {
        type: Object,
        required: true,
    },
    productResults: {
        type: Object,
        required: true,
    },
    customerService: {
        type: Object,
        required: true,
    },
    shipping: {
        type: Object,
        required: true,
    },
    price: {
        type: Object,
        required: true,
    },
    additionalComment: {
        type: Object,
        required: true,
    },
    likesCount: {
        type: Number,
        required: true,
    },
    likesUser: {
        type: Object,
        required: true,
    },
    replyObject: {
        type: Object,
        required: true,
    },
}, { timestamps: true });

module.exports = model('source-review-details', SourceReviewDetailsModel);