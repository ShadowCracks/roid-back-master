const mongoose = require("mongoose");
const response = require("../../utils/response");
const Forum = require("../../models/forum/index.forum.model");

exports.list = async (req, res, next) => {
  try {
    const forums = await Forum.find();
    response.success(res, forums);
  } catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const { forum_id } = req.params;
    const forums = await Forum.findOne({
      _id: forum_id,
    });
    response.success(res, forums);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const payload = req.body;
    const forum = new Forum(payload);
    forum.save();
    response.success(res, forum);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { forum_id } = req.params;
    const payload = req.body;

    const forum = await Forum.findOneAndUpdate({ _id: forum_id }, payload);

    response.success(res);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { forum_id } = req.params;

    const forum = await Forum.findOneAndDelete({ _id: forum_id });

    response.success(res);
  } catch (err) {
    next(err);
  }
};
