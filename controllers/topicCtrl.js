const mongoose = require('mongoose');
const response = require('../utils/response');
const Topic = require('../models/topic');
const Review = require('../models/review');
const Talk = require('../models/talk');

exports.list = async (req, res, next) => {
	try {
		const { type } = req.params;
		const topics = await Topic.find({ type: type });
		response.success(res, topics);
  } catch (err) {
    next(err);
  }
}

exports.get = async (req, res, next) => {
	try {
		const { type, id } = req.params;
		const topics = await Topic.findOne({
			type: type,
			_id: id
		});
		response.success(res, topics);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
	try {
		const { type } = req.params;
		const payload = req.body;
		const topic = new Topic({
			type: type,
			...payload
		});
		topic.save();
		response.success(res, topic);
  } catch (err) {
    next(err);
  }
}

exports.update = async (req, res, next) => {
	try {
		const { type, id } = req.params;
		const payload = req.body;

		const topic = await Topic.findOneAndUpdate({
			_id: id,
			type: type
		}, payload);

		response.success(res);
  } catch (err) {
    next(err);
  }
}

exports.delete = async (req, res, next) => {
	try {
		const { type, id } = req.params;

		const topic = await Topic.findOneAndDelete({
			_id: id,
			type: type,
		});

		response.success(res);
  } catch (err) {
    next(err);
  }
}

exports.getAnswers = async (req, res, next) => {
	try {
		const { type, id } = req.params;

		if(type === 'review') {
			const reviews = Review.find({ topicId: id }).sort({ created_at: 1 });

			response.success(res, reviews);
		} else if (type === 'talk') {
			const talks = Talk.find({ topicId: id });

			response.success(res, talks);
		}

  } catch (err) {
    next(err);
  }
}