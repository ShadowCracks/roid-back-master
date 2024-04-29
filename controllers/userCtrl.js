const response = require('../utils/response');
const User = require('../models/user');

exports.list = async (req, res, next) => {
	try {
		response.success(res, req.query);
  } catch (err) {
    next(err);
  }
}