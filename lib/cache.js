var LRU = require('lru-cache'),
    Promise = require("bluebird");

var cache = LRU({
  max: parseInt(process.env.CACHE_SIZE || 500),
  maxAge: 1000 * 60
});


var CacheManager = module.exports = {
  /* CacheManager.get('key'); // 'value' */
  get: function(key) {
    return cache.get(key);
  },

  /* CacheManager.set('key', 'value'); // 'value' */
  set: function(key, value, ttl) {
    cache.set(key, value, ttl);
    return value;
  },

  /* CacheManager.del('key'); */
  del: function(key, cb) {
    return cache.del(key);
  },

  /*
    var getValueById = function(id, cb){
      CacheManager.wrap('key:' + id, function(key, cb){
        asyncGetById(id, cb);
      }, cb)
    };
  */
  wrap: function(key, work, ttl) {
    var value = this.get(key);
    if(value) return value;

    if (typeof work === 'function') {
      var promise = Promise.resolve(work());
    } else {
      var promise = Promise.resolve(work);
    }

    this.set(key, promise, ttl);

    promise.catch(function(err) {
      this.del(key);
    }.bind(this));

    return promise;
  }
}
