const express = require("express");
const { info, error } = require("./../utils/logger");

const router = express.Router();

const SourceTalk = require("../models/sourceTalk");
const SourceTalkDetails = require("../models/sourceTalkDetails");
const SourceTalkInfo = require("../models/sourceTalkInfo");
const SourceTalkComments = require("../models/sourceTalkComments");
const SourceReview = require("../models/source/review.source.model");

// Topic

router.post("/sourcetalk", async (request, response) => {
  // console.log('users request',request);
  try {
    if (
      !request.body.sourceId ||
      !request.body.sourceName ||
      !request.body.sourceAddedBy ||
      !request.body.sourceAddedTime
    ) {
      return response.status(400).send({ message: "Send all required fields" });
    }

    const newSourceTalk = {
      sourceId: request.body.sourceId,
      sourceName: request.body.sourceName,
      sourceAddedBy: request.body.sourceAddedBy,
      sourceAddedTime: request.body.sourceAddedTime,
      numOfComments: request.body.numOfComments,
      lastCommentUserId: request.body.lastCommentUserId,
      lastCommentUserName: request.body.lastCommentUserName,
      lastCommentTimestamp: request.body.lastCommentTimestamp,
    };

    info("req body --->", newSourceTalk);

    const sourceTalk = await SourceTalk.create(newSourceTalk);
    return response.status(201).send(sourceTalk);
  } catch (error) {
    console.log("POST /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/sourcetalkinfo", async (request, response) => {
  // console.log('users request',request);
  try {
    if (
      !request.body.sourceId ||
      !request.body.sourceName ||
      !request.body.sourceAddedBy ||
      !request.body.sourceAddedTime ||
      !request.body.isOwnerVerified ||
      !request.body.isOwnerSubscribed ||
      !request.body.estimatedDelivery ||
      !request.body.minimumOrder ||
      !request.body.paymentMethods ||
      !request.body.pleaseNote ||
      !request.body.supplierIntroduction
    ) {
      return response.status(400).send({ message: "Send all required fields" });
    }

    const newSourceTalkInfo = {
      sourceId: request.body.sourceId,
      sourceName: request.body.sourceName,
      sourceAddedBy: request.body.sourceAddedBy,
      sourceAddedTime: request.body.sourceAddedTime,
      numOfViews: request.body.numOfViews,
      isOwnerVerified: request.body.isOwnerVerified,
      isOwnerSubscribed: request.body.isOwnerSubscribed,
      estimatedDelivery: request.body.estimatedDelivery,
      minimumOrder: request.body.minimumOrder,
      paymentMethods: request.body.paymentMethods,
      pleaseNote: request.body.pleaseNote,
      supplierIntroduction: request.body.supplierIntroduction,
    };

    const sourceTalkInfo = await SourceTalkInfo.create(newSourceTalkInfo);
    return response.status(201).send(sourceTalkInfo);
  } catch (error) {
    console.log("POST /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/sourcetalkdetails", async (request, response) => {
  // console.log('users request',request);
  try {
    if (
      !request.body.sourceTalkId ||
      !request.body.sourceId ||
      !request.body.sourceReplyId ||
      !request.body.SourceParentReplyId ||
      !request.body.SourceParentReplyUserId ||
      !request.body.SourceParentReplyUserName ||
      !request.body.talkerName ||
      !request.body.userId ||
      !request.body.userProfileImage ||
      !request.body.commentKarma ||
      !request.body.commentText
    ) {
      return response.status(400).send({ message: "Send all required fields" });
    }

    const newSourceTalkDetails = {
      sourceTalkId: request.body.sourceTalkId,
      sourceId: request.body.sourceId,
      sourceReplyId: request.body.sourceReplyId,
      SourceParentReplyId: request.body.SourceParentReplyId,
      SourceParentReplyUserId: request.body.SourceParentReplyUserId,
      SourceParentReplyUserName: request.body.SourceParentReplyUserName,
      talkerName: request.body.talkerName,
      userId: request.body.userId,
      userProfileImage: request.body.userProfileImage,
      commentKarma: request.body.commentKarma,
      commentText: request.body.commentText,
    };

    const sourceTalkDetails = await SourceTalkDetails.create(
      newSourceTalkDetails
    );
    return response.status(201).send(sourceTalkDetails);
  } catch (error) {
    console.log("POST /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});
router.post("/sourcetalkcomments", async (request, response) => {
  // console.log('users request',request);
  try {
    if (
      !request.body.commentId ||
      !request.body.sourceId ||
      !request.body.commentText ||
      !request.body.commentKarma ||
      !request.body.commentUserName ||
      !request.body.commentUserId ||
      !request.body.userProfileImage ||
      !request.body.likesCount ||
      !request.body.likesUser ||
      !request.body.dislikesCount ||
      !request.body.dislikesUser
    ) {
      return response.status(400).send({ message: "Send all required fields" });
    }

    const newSourceTalkComments = {
      commentId: request.body.commentId,
      sourceId: request.body.sourceId,
      commentText: request.body.commentText,
      commentKarma: request.body.commentKarma,
      commentUserName: request.body.commentUserName,
      commentUserId: request.body.commentUserId,
      userProfileImage: request.body.userProfileImage,
      parentCommentId: request.body.parentCommentId,
      parentReplyId: request.body.parentReplyId,
      likesCount: request.body.likesCount,
      likesUser: request.body.likesUser,
      dislikesCount: request.body.dislikesCount,
      dislikesUser: request.body.dislikesUser,
    };

    const sourceTalkComments = await SourceTalkComments.create(
      newSourceTalkComments
    );
    return response.status(201).send(sourceTalkComments);
  } catch (error) {
    console.log("POST /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/sourcetalkcomments", async (request, response) => {
  try {
    const payload = request.body;

    const sourceTalkComments = await SourceTalkComments.findOneAndUpdate(
      {
        commentId: payload.commentId,
      },
      payload
    );

    response.status(201).send(sourceTalkComments);
  } catch (err) {
    console.log("PUT /sourcetalkcomments", err.message);
    response.status(500).send({ message: err.message });
  }
});
router.post("/sourcereview", async (request, response) => {
  // console.log('users request',request);
  try {
    if (
      !request.body.sourceId ||
      !request.body.sourceName ||
      !request.body.sourceAddedBy ||
      !request.body.sourceAddedTime ||
      !request.body.numOfReviews ||
      !request.body.sourceScore ||
      !request.body.sourceQualityScore ||
      !request.body.sourceServiceScore ||
      !request.body.sourceDeliveryScore ||
      !request.body.sourcePriceScore ||
      !request.body.sourceOverallScore
    ) {
      return response.status(400).send({ message: "Send all required fields" });
    }

    const newSourceReview = {
      sourceId: request.body.sourceId,
      sourceName: request.body.sourceName,
      sourceAddedBy: request.body.sourceAddedBy,
      sourceAddedTime: request.body.sourceAddedTime,
      numOfReviews: request.body.numOfReviews,
      sourceScore: request.body.sourceScore,
      sourceQualityScore: request.body.sourceQualityScore,
      sourceServiceScore: request.body.sourceServiceScore,
      sourceDeliveryScore: request.body.sourceDeliveryScore,
      sourcePriceScore: request.body.sourcePriceScore,
      sourceOverallScore: request.body.sourceOverallScore,
    };

    const sourceReviews = await SourceReview.create(newSourceReview);
    return response.status(201).send(sourceReviews);
  } catch (error) {
    console.log("POST /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/sourcetalk", async (request, response) => {
  try {
    const limit = request.query.limit;
    const skip = request.query.skip;
    console.log("Limit and Skip-->", limit, skip);
    const sourceTalks = await SourceTalk.find({})
      .skip(skip * limit)
      .limit(limit);
    return response.status(200).json(sourceTalks);
  } catch (error) {
    console.log("GET /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/sourcetalkinfo/:sourceId", async (request, response) => {
  try {
    const { sourceId } = request.params;
    console.log("Request Params--->", sourceId);
    const sourceTalksInfo = await SourceTalkInfo.find({ sourceId: sourceId });
    return response.status(200).json(sourceTalksInfo);
  } catch (error) {
    console.log("GET /sourcetalkinfo", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/sourcetalkcomments/:sourceId", async (request, response) => {
  try {
    const { sourceId } = request.params;
    console.log("Request Params--->", sourceId);
    const sourceTalksComments = await SourceTalkComments.find({
      sourceId: sourceId,
    });
    return response.status(200).json(sourceTalksComments);
  } catch (error) {
    console.log("GET /sourcetalkinfo", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/sourcetalkdetails", async (request, response) => {
  try {
    const sourceTalksDetails = await SourceTalkDetails.find({});
    return response.status(200).json(sourceTalksDetails);
  } catch (error) {
    console.log("GET /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/sourcereview", async (request, response) => {
  try {
    const limit = request.query.limit;
    const skip = request.query.skip;
    console.log("Limit and Skip-->", limit, skip);
    const sourceReviews = await SourceReview.find({})
      .skip(skip * limit)
      .limit(limit);
    return response.status(200).json(sourceReviews);
  } catch (error) {
    console.log("GET /sourcetalk", error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/sourcetalk-lastrecord", async (request, response) => {
  try {
    // const limit = request.query.limit;
    // const skip = request.query.skip;
    // console.log("Limit and Skip-->",limit,skip);
    const sourceReviews = await SourceTalk.find({})
      .sort({ $natural: -1 })
      .limit(1);
    return response.status(200).json(sourceReviews);
  } catch (error) {
    console.log("GET /sourcetalk-lastrecord", error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports = router;
