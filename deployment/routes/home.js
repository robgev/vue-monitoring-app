const path = require('path');

module.exports.get = function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}