redis = require('redis');
db = redis.createClient();

module.exports = function() {
  return function(req, res, next) {
    if(typeof(req.client._peername) !== 'undefined'){
        db.zincrby('stats:ip', 1, req.client._peername.address);
    }
    if(typeof(req.headers) !== 'undefined'){
        db.zincrby('stats:user-agent', 1, req.headers['user-agent']);
    }
    next();
  };
};
