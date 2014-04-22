"use strict";
var log4js = require('log4js');
var expect = require('chai').expect;
var sandbox = require('sandboxed-module');

var fakeBugsnag = {
  register: function(key, options) {
    this.key = key;
    this.options = options;
  },
  notify: function(err, meta) {
    this.lasterr = {err: err, meta: meta};
  }
};

var bugsnagModule = sandbox.require('../lib', {
    requires: {
      'bugsnag': fakeBugsnag
    }
  });


describe('bugsnag Appender', function(){

  it('should call bugsnag with error', function(){

    log4js.addAppender(bugsnagModule.configure({key: 'testkey', autoNotifyUncaught: false}), 'test');

    var err = new Error('boom');

    var logger = log4js.getLogger('test');

    logger.error(err);

    expect(fakeBugsnag.key).to.equal('testkey');

    expect(fakeBugsnag.lasterr.err).to.equal(err);

  });

});
