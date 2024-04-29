const response = require("../../utils/response");
const SteroidTalkModel = require("../../models/steroids/talk.steroid.model");

exports.all = async (req, res, next) => {
  try {
    const talks = await SteroidTalkModel.find();
    response.success(res, talks);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { talk_id } = req.params;
    const talks = await SteroidTalkModel.find({ talkId: talk_id });
    response.success(res, talks);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { talk_id } = req.params;
    const payload = req.body;
    const talk = new SteroidTalkModel({
      talkId: talk_id,
      createdAt: Date.now(),
      ...payload,
    });
    talk.save();
    response.success(res, talk);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { talk_id, id } = req.params;
    const payload = req.body;

    const talk = await SteroidTalkModel.findOneAndUpdate(
      {
        _id: id,
        talkId: talk_id,
      },
      payload
    );

    response.success(res, talk);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { talk_id, id } = req.params;

    const talk = await SteroidTalkModel.findOneAndDelete({
      _id: id,
      talkId: talk_id,
    });

    response.success(res, talk);
  } catch (err) {
    next(err);
  }
};
