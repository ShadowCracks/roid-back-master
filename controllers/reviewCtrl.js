const mongoose = require('mongoose');
const response = require('../utils/response');
const Review = require('../models/review');

exports.list = async (req, res, next) => {
	try {
		const { topic_id } = req.params;
		const reviews = await Review.find({ topicId: topic_id	});
		response.success(res, reviews);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
	try {
		const { topic_id } = req.params;
		const payload = req.body;
		const review = new Review({
			topicId: topic_id,
			...payload
		});
		review.save();
		response.success(res, review);
  } catch (err) {
    next(err);
  }
}

exports.update = async (req, res, next) => {
	try {
		const { topic_id, id } = req.params;
		const payload = req.body;

		const review = await Review.findOneAndUpdate({
			_id: id,
			topicId: topic_id
		}, payload);

		response.success(res);
  } catch (err) {
    next(err);
  }
}

exports.delete = async (req, res, next) => {
	try {
		const { topic_id, id } = req.params;

		const review = await Review.findOneAndDelete({
			_id: id,
			topicId: topic_id,
		});

		response.success(res);
  } catch (err) {
    next(err);
  }
}