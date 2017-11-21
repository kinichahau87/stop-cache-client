var __redis = require('redis');

var stopCacheClient = function() {
	var client = __redis.createClient();

	this.defineOnError = function(aCallBack) {
		client.on('error', function(err) {
			aCallBack(err);
		});
	};

	this.set = function(aKey, aValue) {
		client.set(aKey, aValue);
		return aValue;
	};

	this.setExpire = function(aKey, aValue, aTime) {
		client.set(aKey, aValue, 'EX', aTime);
		return aValue;
	};

	this.get = function(aKey, aCallback) {
		client.get(aKey, function(err, reply) {
			aCallback(reply);
		});
	};

	this.shutdown = function() {
		client.quit();
	};
};

module.exports.stopCacheClient = stopCacheClient;