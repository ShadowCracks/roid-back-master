"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenCreditsAggregation = void 0;
const mongoose_1 = require("mongoose");
function getTokenCreditsAggregation(granterId) {
    const granterObjectId = new mongoose_1.Types.ObjectId(granterId);
    return [
        {
            $facet: {
                total: [
                    {
                        $match: {
                            $or: [
                                { receiverId: granterObjectId },
                                { granterId: granterObjectId },
                            ],
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            totalTokens: {
                                $sum: {
                                    $cond: {
                                        if: { $eq: ['$receiverId', granterObjectId] },
                                        then: '$amount',
                                        else: { $multiply: ['$amount', -1] },
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        },
        {
            $project: {
                totalTokens: {
                    $ifNull: [{ $arrayElemAt: ['$total.totalTokens', 0] }, 0],
                },
            },
        },
    ];
}
exports.getTokenCreditsAggregation = getTokenCreditsAggregation;
//# sourceMappingURL=token.aggregations.js.map