const request = require('request');
module.exports = function (url) {
  request(url, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    }
  });
};
