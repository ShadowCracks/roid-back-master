const response = require("../utils/response");
const SteroidsReview = require("../models/steroidsReview");

exports.all = async (req, res, next) => {
  try {
    const reviews = await SteroidsReview.find();
    response.success(res, reviews);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { review_id } = req.params;
    const reviews = await SteroidsReview.find({ reviewId: review_id });
    response.success(res, reviews);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { review_id } = req.params;
    const payload = req.body;
    const review = new SteroidsReview({
      reviewId: review_id,
      createdAt: Date.now(),
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

    const review = await SteroidsReview.findOneAndUpdate(
      {
        _id: id,
        reviewId: review_id,
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

    const review = await SteroidsReview.findOneAndDelete({
      _id: id,
      reviewId: review_id,
    });

    response.success(res, review);
  } catch (err) {
    next(err);
  }
};
