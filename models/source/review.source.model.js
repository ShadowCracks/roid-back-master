const { Schema, model, Types } = require('mongoose');

const SourceReviewModel = new Schema({
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
    numOfReviews: {
        type: String,
        required: true,
    },
    sourceScore: {
        type: String,
        required: true,
    },
    sourceQualityScore: {
        type: String,
        required: true,
    },
    sourceServiceScore: {
        type: String,
        required: true,
    },
    sourceDeliveryScore: {
        type: String,
        required: true,
    },
    sourcePriceScore: {
        type: String,
        required: true,
    },
    sourceOverallScore: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = model('source-review', SourceReviewModel);