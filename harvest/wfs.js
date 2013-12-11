var async = require('async'),
    _ = require('underscore');

module.exports = function (cache) {

  return {
    // Gather the responses to WFS GetCapabilities requests
    gatherCapabilities: function (callback) {
        cache.wfsUrls(function (err, urls) {
            if (err) return callback(err);
            async.eachLimit(urls, 10, cache.getCapabilities, callback);
        });
    },

    // Get all the features from a set of WFS urls
    getFeatures: function (urls, featuretype, maxfeatures, callback) {
        async.eachLimit(urls, 10, function (url, callback) {
            cache.getFeature(url, featuretype, maxfeatures, callback);
        }, callback);
    }
  };
};