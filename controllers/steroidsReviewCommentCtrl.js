const response = require("../utils/response");
const SteroidsReviewComment = require("../models/steroidsReviewComment");

exports.all = async (req, res, next) => {
  try {
    const comment = await SteroidsReviewComment.find();
    response.success(res, comment);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { comment_id } = req.params;
    const comment = await SteroidsReviewComment.find({ commentId: comment_id });
    response.success(res, comment);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { comment_id } = req.params;
    const payload = req.body;
    const comment = new SteroidsReviewComment({
      commentId: comment_id,
      createdAt: Date.now(),
      ...payload,
    });
    comment.save();
    response.success(res, comment);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { comment_id, id } = req.params;
    const payload = req.body;

    const comment = await SteroidsReviewComment.findOneAndUpdate(
      {
        _id: id,
        commentId: comment_id,
      },
      payload
    );

    response.success(res, comment);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { comment_id, id } = req.params;

    const comment = await SteroidsReviewComment.findOneAndDelete({
      _id: id,
      commentId: comment_id,
    });

    response.success(res, comment);
  } catch (err) {
    next(err);
  }
};
