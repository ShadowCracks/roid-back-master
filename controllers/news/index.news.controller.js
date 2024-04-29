const response = require("../../utils/response");
const News = require("../../models/news/index.news.model");

exports.all = async (req, res, next) => {
  try {
    const newsList = await News.find();
    response.success(res, newsList);
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { news_id } = req.params;
    const newsList = await News.find({ newsId: news_id });
    response.success(res, newsList);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { news_id } = req.params;
    const payload = req.body;
    const news = new News({
      newsId: news_id,
      createdAt: Date.now(),
      ...payload,
    });
    news.save();
    response.success(res, news);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { news_id, id } = req.params;
    const payload = req.body;

    const news = await News.findOneAndUpdate(
      {
        _id: id,
        newsId: news_id,
      },
      payload
    );

    response.success(res, news);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { news_id, id } = req.params;

    const news = await News.findOneAndDelete({
      _id: id,
      newsId: news_id,
    });

    response.success(res, news);
  } catch (err) {
    next(err);
  }
};
