const mongoose = require("mongoose");
const response = require("../../utils/response");
const SourceReview = require("../../models/source/review.source.model");

exports.all = async (req, res, next) => {
  try {
    const reviews = await SourceReview.find();
    response.success(res, reviews);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { review_id } = req.params;
    const reviews = await SourceReview.find({ sourceId: review_id });
    response.success(res, reviews);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { review_id } = req.params;
    const payload = req.body;
    const review = new SourceReview({
      sourceId: review_id,
      ...payload,
    });
    review.save();
    response.success(res, review);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { review_id, id } = req.params;
    const payload = req.body;

    const review = await SourceReview.findOneAndUpdate(
      {
        _id: id,
        sourceId: review_id,
      },
      payload
    );

    response.success(res, review);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { review_id, id } = req.params;

    const review = await SourceReview.findOneAndDelete({
      _id: id,
      sourceId: review_id,
    });

    response.success(res, review);
  } catch (err) {
    next(err);
  }
};
