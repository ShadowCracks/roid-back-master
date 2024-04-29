import { PipelineStage, Types } from 'mongoose';

function getTokenCreditsAggregation(granterId: string): PipelineStage[] {
  const granterObjectId = new Types.ObjectId(granterId);
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

export { getTokenCreditsAggregation };
