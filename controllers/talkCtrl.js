const mongoose = require('mongoose');
const response = require('../utils/response');
const Talk = require('../models/talk');

exports.list = async (req, res, next) => {
	try {
		const { topic_id } = req.params;
		const talks = await Talk.find({ topicId: topic_id });
		response.success(res, talks);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
	try {
		const { topic_id } = req.params;
		const payload = req.body;
		const Talk = new Talk({
			topicId: topic_id,
			...payload
		});
		Talk.save();
		response.success(res, Talk);
  } catch (err) {
    next(err);
  }
}

exports.update = async (req, res, next) => {
	try {
		const { topic_id, id } = req.params;
		const payload = req.body;

		const Talk = await Talk.findOneAndUpdate({
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

		const Talk = await Talk.findOneAndDelete({
			_id: id,
			topicId: topic_id,
		});

		response.success(res);
  } catch (err) {
    next(err);
  }
}