const response = require("../../utils/response");
const SteroidCycleModel = require("../../models/steroids/cycle.steroid.model");

exports.all = async (req, res, next) => {
  try {
    const cycles = await SteroidCycleModel.find();
    response.success(res, cycles);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { cycle_id } = req.params;
    const cycles = await SteroidCycleModel.find({ cycleId: cycle_id });
    response.success(res, cycles);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { cycle_id } = req.params;
    const payload = req.body;
    const cycle = new SteroidCycleModel({
      cycleId: cycle_id,
      createdAt: Date.now(),
      ...payload,
    });
    cycle.save();
    response.success(res, cycle);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { cycle_id, id } = req.params;
    const payload = req.body;

    const cycle = await SteroidCycleModel.findOneAndUpdate(
      {
        _id: id,
        cycleId: cycle_id,
      },
      payload
    );

    response.success(res, cycle);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { cycle_id, id } = req.params;

    const cycle = await SteroidCycleModel.findOneAndDelete({
      _id: id,
      cycleId: cycle_id,
    });

    response.success(res, cycle);
  } catch (err) {
    next(err);
  }
};
