const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: "mongodb+srv://root:root@cluster0.20y5wcx.mongodb.net/?retryWrites=true&w=majority"
};

module.exports = db;