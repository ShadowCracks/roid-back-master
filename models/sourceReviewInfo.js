const { Schema, model, Types } = require('mongoose');

const SourceReviewInfoModel = new Schema({
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
    numOfViews: {
        type: Number,
        required: true,
    },
    isOwnerVerified: {
        type: Boolean,
        required: true,
    },
    isOwnerSubscribed: {
        type: Boolean,
        required: true,
    },
    sourceOverallScore: {
        type: Object,
        required: true,
    },
    sourceQualityScore: {
        type: Object,
        required: true,
    },
    sourceServiceScore: {
        type: Object,
        required: true,
    },
    sourceDeliveryScore: {
        type: Object,
        required: true,
    },
    sourcePriceScore: {
        type: Object,
        required: true,
    },
    sourceRank: {
        type: Number,
        required: true,
    },
    sourceScore: {
        type: Number,
        required: true,
    },
    sourceVotes: {
        type: Number,
        required: true,
    },
    sourceReviewsCount: {
        type: Number,
        required: true,
    },
    sourceRecommendedCount: {
        type: Number,
        required: true,
    },
    sourceNotRecommendedCount: {
        type: Number,
        required: true,
    },
    sourceImages: {
        type: Array,
        required: true,
    },
}, { timestamps: true });

module.exports = model('source-review-info', SourceReviewInfoModel);