const mongoose = require('mongoose');
const response = require('../utils/response');
const Promotion = require('../models/promotion');

exports.list = async (req, res, next) => {
	try {
		const promos = await Promotion.find();
		response.success(res, promos);
  } catch (err) {
    next(err);
  }
}

exports.get = async (req, res, next) => {
	try {
		const { id } = req.params;
		const promotion = await Promotion.findOne({
			_id: id
		});
		response.success(res, promotion);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
	try {
		const payload = req.body;
		const promotion = new Promotion(payload);
		promotion.save();
		response.success(res, promotion);
  } catch (err) {
    next(err);
  }
}

exports.update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const payload = req.body;

		const promotion = await Promotion.findOneAndUpdate({ _id: id }, payload);

		response.success(res);
  } catch (err) {
    next(err);
  }
}

exports.delete = async (req, res, next) => {
	try {
		const { id } = req.params;

		const promotion = await Promotion.findOneAndDelete({ _id: id });

		response.success(res);
  } catch (err) {
    next(err);
  }
}
