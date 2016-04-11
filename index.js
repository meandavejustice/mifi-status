var request = require('request');

function getStatus(cb) {
  request('http://my.jetpack/srv/status', function(err, resp, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body).statusData);
  });
}

function getConnections(cb) {
  request('http://my.jetpack/connecteddevices/refresh', function(err, resp, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body))
  });
}

module.exports.status = getStatus;
module.exports.connections = getConnections;
