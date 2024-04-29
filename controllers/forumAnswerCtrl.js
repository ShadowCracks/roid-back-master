const mongoose = require('mongoose');
const response = require('../utils/response');
const Forum = require('../models/forum');
const ForumAnswer = require('../models/forumAnswer');

exports.list = async (req, res, next) => {
	try {
		const { forum_id } = req.params;
		const answers = await ForumAnswer.find({ forumId: forum_id });
		response.success(res, answers);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
	try {
		const { forum_id } = req.params;
		const payload = req.body;
		const answer = new ForumAnswer({
			forumId: forum_id,
			...payload
		});
		answer.save();
		response.success(res, answer);
  } catch (err) {
    next(err);
  }
}

exports.update = async (req, res, next) => {
	try {
		const { forum_id, id } = req.params;
		const payload = req.body;

		const answer = await ForumAnswer.findOneAndUpdate({
			forumId: forum_id,
			_id: id
		}, payload);

		response.success(res, answer);
  } catch (err) {
    next(err);
  }
}

exports.delete = async (req, res, next) => {
	try {
		const { forum_id, id } = req.params;
		
		const answer = await ForumAnswer.findOneAndDelete({
			forumId: forum_id,
			_id: id
		});

		response.success(res, answer);
  } catch (err) {
    next(err);
  }
}