const chalk = require('chalk');

exports.info = function (log, ...args) {
  console.log(chalk.bold.green(log), ...args);
};
exports.error = function (log, ...args) {
  console.log(chalk.bold.red(log), ...args);
};
exports.warning = function (log, ...args) {
  console.log(chalk.bold.yellow(log), ...args);
};
exports.normal = function (log, ...args) {
  console.log(log, ...args);
};
