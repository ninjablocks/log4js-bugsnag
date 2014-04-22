"use strict";
var bugsnag = require('bugsnag');

function bugsnagAppender(config, layout) {

  config.options = config.options || {};

  bugsnag.register(config.key, config.options);

  return function(loggingEvent) {
    if (loggingEvent.data) {
      loggingEvent.data.forEach(function(item){
        if (item instanceof Error) {
          bugsnag.notify(item, {
            categoryName: loggingEvent.categoryName,
            level: loggingEvent.level
          });
        }
      });
    }
  };

}

function configure(config) {
  return bugsnagAppender(config);
}

exports.name      = "bugsnag";
exports.appender  = bugsnagAppender;
exports.configure = configure;
