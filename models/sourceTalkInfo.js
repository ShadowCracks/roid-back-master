const { Schema, model, Types } = require('mongoose');

const SourceTalkInfoModel = new Schema({
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
    estimatedDelivery: {
        type: String,
        required: true,
    },
    minimumOrder: {
        type: String,
        required: true,
    },
    paymentMethods: {
        type: String,
        required: true,
    },
    pleaseNote: {
        type: String,
        required: true,
    },
    supplierIntroduction: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = model('source-talk-info', SourceTalkInfoModel);