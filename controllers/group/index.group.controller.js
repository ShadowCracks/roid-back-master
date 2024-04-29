const response = require("../../utils/response");
const Group = require("../../models/group/index.model");

exports.all = async (req, res, next) => {
  try {
    const groups = await Group.find();
    response.success(res, groups);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { group_id } = req.params;
    const groups = await Group.find({ groupId: group_id });
    response.success(res, groups);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { group_id } = req.params;
    const payload = req.body;
    const review = new Group({
      groupId: group_id,
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
    const { group_id, id } = req.params;
    const payload = req.body;

    const review = await Group.findOneAndUpdate(
      {
        _id: id,
        groupId: group_id,
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
    const { group_id, id } = req.params;

    const review = await Group.findOneAndDelete({
      _id: id,
      groupId: group_id,
    });

    response.success(res, review);
  } catch (err) {
    next(err);
  }
};
