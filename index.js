function getStatus(cb) {
  require('request')('http://my.jetpack/srv/status', function(err, resp, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body).statusData);
  });
}

module.exports = getStatus;
