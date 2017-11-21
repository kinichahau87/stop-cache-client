var __cacheTest = require('../src/stop_redis_cache.js');
var expect = require('chai').expect;

describe('simple client test', function() {
	var stopClient = new __cacheTest.stopCacheClient();
	beforeEach(function(done) {
		setTimeout(function() {
			done();
		}, 1);
	});

	it('should do basic set by key', function(done) {
		var testValue = '{"id":1}';
		stopClient.set('1-test', testValue);
		stopClient.get('1-test', function(data) {
			expect(data).to.be.equal(testValue);
			stopClient.shutdown();
			done();
		});
	});

	it('should do basic set by key with expiration', function(done) {
		var testValue = '{"id":2}';
		stopClient.setExpire('2-test', testValue, 100);
		stopClient.get('2-test', function(data) {
			expect(data).to.be.equal(testValue);
			stopClient.shutdown();
			done();
		});
	});

	afterEach(function(done) {
		setTimeout(function() {
			done();
		}, 100);
	});
});